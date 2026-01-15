"use client";

interface RecentOrder {
    id: string;
    serviceName: string;
    quantity: number;
    price: number;
    date: string;
    icon: "facebook" | "instagram";
}

interface HomeRecentOrdersProps {
    orders: RecentOrder[];
}

export default function HomeRecentOrders({ orders }: HomeRecentOrdersProps) {
    return (
        <div className="bg-white rounded shadow-sm p-6 border border-slate-200">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                    Đơn hàng gần đây
                </h2>
                <a
                    href="/order-histories"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    Xem tất cả
                </a>
            </div>

            <div className="space-y-8">
                {orders.map((order, idx) => (
                    <div
                        key={order.id}
                        className="rounded-sm transition-all hover:border-gray-300"
                    >
                        <div className="flex items-start gap-3">
                            <div className="w-2.5 h-2.5 mt-1 rounded-full bg-blue-500" />
                            <div className="min-w-0 flex-1">
                                <p className="mb-1 text-xs text-gray-500">
                                    {order.date}
                                </p>
                                <p className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900">
                                    {order.serviceName}
                                </p>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                                        Số lượng: {order.quantity}
                                    </span>
                                    <span className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                                        Giá tiền:{" "}
                                        {order.price.toLocaleString("vi-VN")}đ
                                    </span>
                                </div>
                            </div>
                        </div>
                        {idx !== orders.length - 1 && (
                            <div className="mt-3 h-px w-full bg-gray-200" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
