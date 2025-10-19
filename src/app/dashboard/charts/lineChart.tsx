"use client";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export const LineCharts = () => {
    return (
        <div className="dark:bg-[var(--darkpurple)] rounded-xl bg-white p-6">
            <p className="font-medium text-2xl mb-4">User Growth Over Time</p>
            <ResponsiveContainer width={700} height={500}>
                <LineChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '100vh', aspectRatio: 1.618 }}
                    responsive
                    data={userGrowthData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="totalUsers" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
                    <Line type="monotone" dataKey="newUsers" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}

const userGrowthData = [
    { date: "2025-09-01", newUsers: 42, totalUsers: 1042 },
    { date: "2025-09-02", newUsers: 57, totalUsers: 1099 },
    { date: "2025-09-03", newUsers: 63, totalUsers: 1162 },
    { date: "2025-09-04", newUsers: 51, totalUsers: 1213 },
    { date: "2025-09-05", newUsers: 68, totalUsers: 1281 },
    { date: "2025-09-06", newUsers: 74, totalUsers: 1355 },
    { date: "2025-09-07", newUsers: 89, totalUsers: 1444 },
];