"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const revenueData = [
    { month: "Apr", basic: 1200, premium: 2300, total: 3500 },
    { month: "May", basic: 1400, premium: 2700, total: 4100 },
    { month: "Jun", basic: 1550, premium: 3000, total: 4550 },
    { month: "Jul", basic: 1650, premium: 3100, total: 4750 },
    { month: "Aug", basic: 1720, premium: 3350, total: 5070 },
    { month: "Sep", basic: 1800, premium: 3500, total: 5300 },
];

export const AreaCharts = () => {
    return (
        <div className="dark:bg-[var(--darkpurple)] bg-white rounded-xl p-6">
            <p className="font-medium text-2xl mb-4">Revenue Over Time</p>
            <ResponsiveContainer width={700} height={700}>
                <AreaChart
                    style={{ width: '100%', maxWidth: '500px', maxHeight: '100vh', aspectRatio: 1.618 }}
                    responsive
                    data={revenueData}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="premium" />
                    <YAxis width='auto' />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="premium" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="basic" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}