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
                    data={activeUsersData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="date" stroke="#8884d8" />
                    <Line type="monotone" dataKey="active" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}

export const activeUsersData = [
    { date: "Oct 12", active: 124 },
    { date: "Oct 13", active: 172 },
    { date: "Oct 14", active: 198 },
    { date: "Oct 15", active: 165 },
    { date: "Oct 16", active: 220 },
    { date: "Oct 17", active: 214 },
    { date: "Oct 18", active: 256 },
];