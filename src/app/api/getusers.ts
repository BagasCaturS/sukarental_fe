import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sukarental_db_2",
    password: "bgs1212Cs",
    port: 5432,
});

pool.connect((err, client, done) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Successfully connected to database");
    }
    done();
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log("Fetching data...");
        const result = await pool.query(`
            SELECT 
                TO_CHAR(created_at, 'Month') AS month,
                COUNT(*) AS total_users,
                COUNT(CASE WHEN role_id = 1 THEN 1 END) AS admin_users,
                COUNT(CASE WHEN role_id = 2 THEN 1 END) AS regular_users
            FROM users
            GROUP BY TO_CHAR(created_at, 'Month')
            ORDER BY MIN(created_at);
        `);

        // Map the result rows to the required format
        const formattedData = result.rows.map((row) => ({
            month: row.month.trim(), // Remove extra spaces in the month name
            newUsers: parseInt(row.new_users, 10),
            returningUsers: parseInt(row.returning_users, 10),
        }));

        console.log("Formatted data:", formattedData);
        res.status(200).json(formattedData);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
