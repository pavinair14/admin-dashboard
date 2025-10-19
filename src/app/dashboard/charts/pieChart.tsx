"use client";

import { Pie, PieChart, ResponsiveContainer } from "recharts";

const userPlanData = [
    { name: "Free", value: 7200 },
    { name: "Basic", value: 1800 },
    { name: "Premium", value: 900 },
];

export const PieCharts = () => {
    return (
        <div className="dark:bg-[var(--darkpurple)] bg-white rounded-xl p-6">
            <p className="font-medium text-2xl mb-4">User Plan Distribution</p>
            <ResponsiveContainer width={300} height={300}>
                <PieChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: "100vh", aspectRatio: 1 }}
                    responsive
                // margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                >
                    <Pie
                        data={userPlanData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#6366f1"
                        label
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}