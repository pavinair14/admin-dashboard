"use client";

import { BarChart, Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const resumeActivityData = [
    { day: "Mon", created: 420, downloaded: 310 },
    { day: "Tue", created: 465, downloaded: 390 },
    { day: "Wed", created: 512, downloaded: 405 },
    { day: "Thu", created: 487, downloaded: 390 },
    { day: "Fri", created: 530, downloaded: 410 },
    { day: "Sat", created: 610, downloaded: 495 },
    { day: "Sun", created: 670, downloaded: 520 },
];


export const BarCharts = () => {

    return (
        <div className="dark:bg-[var(--darkpurple)] bg-white rounded-xl p-6">
            <p className="font-medium text-2xl mb-4">Template Usage</p>
            <ResponsiveContainer width={500} height={500}>
                <BarChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '100vh', aspectRatio: 1.618 }}
                    responsive
                    data={resumeActivityData}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="created" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="created" stackId="a" fill="#ff2056" />
                    <Bar dataKey="downloaded" stackId="a" fill="#009966" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}