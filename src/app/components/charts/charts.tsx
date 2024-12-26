"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"

const chartData = [
    { month: "January", car: 186, motorcycle: 80 },
    { month: "February", car: 305, motorcycle: 200 },
    { month: "March", car: 237, motorcycle: 120 },
    { month: "April", car: 73, motorcycle: 190 },
    { month: "May", car: 209, motorcycle: 130 },
    { month: "June", car: 214, motorcycle: 140 },
]

const chartConfig = {
    car: {
        label: "Car",
        color: "#2563eb",
    },
    motorcycle: {
        label: "Motorcycle",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export default function Chart() {
    return (
        <ChartContainer config={chartConfig} className=" bg-slate-100 shadow-md rounded-md p-4 min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent/>}/>
                <ChartLegend content = {<ChartLegendContent/>}/>
                <Bar dataKey="car" fill="var(--color-car)" radius={4} />
                <Bar dataKey="motorcycle" fill="var(--color-motorcycle)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}
