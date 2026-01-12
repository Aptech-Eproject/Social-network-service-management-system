"use client";
import {
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
} from "recharts";

interface OrderStats {
    pending: number;
    processing: number;
    completed: number;
    cancelled: number;
    refund: number;
    error: number;
    other: number;
}

interface HomeOrderStatisticsProps {
    totalOrders: number;
    orderStats: OrderStats;
}

export default function HomeOrderStatistics({
    totalOrders,
    orderStats,
}: HomeOrderStatisticsProps) {
    const statsData = [
        { name: "Pending", value: orderStats.pending, fill: "#FFB020" },
        { name: "Processing", value: orderStats.processing, fill: "#3B82F6" },
        { name: "Completed", value: orderStats.completed, fill: "#10B981" },
        { name: "Cancelled", value: orderStats.cancelled, fill: "#EF4444" },
        { name: "Refund", value: orderStats.refund, fill: "#6B7280" },
        { name: "Error", value: orderStats.error, fill: "#F97316" },
        { name: "Other", value: orderStats.other, fill: "#0EA5E9" },
    ];

    return (
        <div className="bg-white rounded shadow-sm p-6 border border-slate-200">
            <h2 className="mb-4 text-lg font-bold text-gray-900">
                Thống kê đơn hàng
            </h2>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between gap-4">
                    <div
                        className="flex-1 relative"
                        style={{ height: "280px" }}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart
                                cx="50%"
                                cy="90%"
                                innerRadius="50%"
                                outerRadius="110%"
                                barSize={14}
                                data={statsData}
                                startAngle={180}
                                endAngle={0}
                            >
                                <PolarAngleAxis
                                    type="number"
                                    domain={[0, totalOrders || 1]}
                                    tick={false}
                                />
                                <RadialBar
                                    background
                                    clockWise
                                    dataKey="value"
                                />
                            </RadialBarChart>
                        </ResponsiveContainer>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center">
                            <p className="text-4xl font-bold text-gray-900">
                                {totalOrders}
                            </p>
                            <p className="text-xs text-gray-500 font-medium uppercase">
                                Total
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        {statsData.map((stat) => (
                            <div
                                key={stat.name}
                                className="flex items-center gap-2"
                            >
                                <div
                                    className="w-3 h-3 rounded-sm"
                                    style={{ backgroundColor: stat.fill }}
                                />
                                <span className="text-xs text-gray-700">
                                    {stat.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
