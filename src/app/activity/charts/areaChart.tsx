"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const resumeActivityData = [
    { date: "Oct 12", created: 340, downloaded: 280 },
    { date: "Oct 13", created: 420, downloaded: 350 },
    { date: "Oct 14", created: 380, downloaded: 300 },
    { date: "Oct 15", created: 460, downloaded: 400 },
    { date: "Oct 16", created: 500, downloaded: 450 },
    { date: "Oct 17", created: 490, downloaded: 420 },
    { date: "Oct 18", created: 550, downloaded: 500 },
];

export const AreaCharts = () => {
    return (
        <div className="dark:bg-[var(--darkpurple)] bg-white rounded-xl p-6">
            <p className="font-medium text-2xl mb-4">Revenue Over Time</p>
            <ResponsiveContainer width={700} height={700}>
                <AreaChart
                    style={{ width: '100%', maxWidth: '500px', maxHeight: '100vh', aspectRatio: 1.618 }}
                    responsive
                    data={resumeActivityData}
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
                    <XAxis dataKey="date" />
                    <YAxis width='auto' />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="created" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="downloaded" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}