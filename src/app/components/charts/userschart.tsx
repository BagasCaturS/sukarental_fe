"use client";

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

interface ChartData {
    month: string;
    newUsers: number;
    returningUsers: number;
}

const chartConfig = {
    newUsers: {
        label: "New Users",
        color: "#2563eb",
    },
    returningUsers: {
        label: "Returning Users",
        color: "#60a5fa",
    },
} satisfies ChartConfig;


const GetUsers: React.FC = () => {
    const [data, setData] = useState<ChartData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("GetUsers: fetching data...");
                const response = await fetch("/api/getusers");

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = (await response.json()) as ChartData[];
                if (!result || result.length === 0) {
                    throw new Error("No data returned from the API");
                }

                console.log("GetUsers: fetch response", result);
                setData(result);
            } catch (err: any) {
                console.error("GetUsers: error", err);
                setError(err.message || "An error occurred while fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log("GetUsers: props", { data, loading, error });

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
        ;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    if (data.length === 0) {
        return <p className="text-center">No user data available to display.</p>;
    }

    return (
        <ChartContainer config={chartConfig} className=" bg-slate-100 shadow-md rounded-md p-4 min-h-[200px] w-full">
            <BarChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="car" fill="var(--color-car)" radius={4} />
                <Bar dataKey="motorcycle" fill="var(--color-motorcycle)" radius={4} />
            </BarChart>
        </ChartContainer>
    );
};

export default GetUsers;


