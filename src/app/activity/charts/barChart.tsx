"use client";

import { BarChart, Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const topTemplatesData = [
    { template: "Modern Blue", uses: 580 },
    { template: "Professional Gray", uses: 470 },
    { template: "Classic", uses: 390 },
    { template: "Minimalist", uses: 320 },
    { template: "Creative", uses: 260 },
];


export const BarCharts = () => {

    return (
        <div className="dark:bg-[var(--darkpurple)] bg-white rounded-xl p-6">
            <p className="font-medium text-2xl mb-4">Template Usage</p>
            <ResponsiveContainer width={500} height={500}>
                <BarChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '100vh', aspectRatio: 1.618 }}
                    responsive
                    data={topTemplatesData}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="template" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="template" stackId="a" fill="#ff2056" />
                    <Bar dataKey="uses" stackId="a" fill="#009966" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}