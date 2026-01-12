"use client";
import { FlagOff } from "lucide-react";
import { STATUS_CONFIG } from "@/lib/utils";
import { useState } from "react";
import type { OrderItem } from "@/types/order";

interface OrderHistoriesTableProps {
    orders: OrderItem[];
    itemsPerPage: number;
}

export default function OrderHistoriesTable({
    orders,
    itemsPerPage,
}: OrderHistoriesTableProps) {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    async function copyToClipboard(text: string) {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.left = "-9999px";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }
        } catch (e) {}
    }

    const handleCopy = async (link: string, id: string) => {
        await copyToClipboard(link);
        setCopiedId(id);
        setTimeout(
            () => setCopiedId((curr) => (curr === id ? null : curr)),
            1200
        );
    };

    return (
        <div className="overflow-x-auto max-h-200 overflow-y-auto">
            <table className="w-max min-w-full text-sm">
                <thead className="bg-gray-900 text-white border-b border-gray-200 sticky top-0">
                    <tr>
                        <th className="px-4 py-3 text-left font-semibold">
                            Mã đơn hàng
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Thời gian đặt hàng
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Dịch vụ
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Liên kết
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Bình luận
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Trạng thái
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Thanh toán
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Số lượng cần tăng
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Bản dự
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Còn lại
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                            Cập nhật
                        </th>
                        <th className="px-4 py-3 text-center font-semibold">
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.slice(0, itemsPerPage).map((order) => (
                        <tr
                            key={order.id}
                            className="border-b border-gray-200 hover:bg-gray-50"
                        >
                            <td className="px-4 py-3">
                                <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded text-xs font-semibold">
                                    {order.orderCode}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-700">
                                <span className="bg-gray-100 text-blue-800 px-0.5 py-0.2 rounded text-xs font-semibold">
                                    {order.datetime}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-700 max-w-xs truncate">
                                {order.serviceName}
                            </td>
                            <td className="px-4 py-3">
                                <div className="relative flex items-center gap-2">
                                    <button
                                        type="button"
                                        title={order.link}
                                        onClick={() =>
                                            handleCopy(order.link, order.id)
                                        }
                                        className="inline-block max-w-xs w-30 bg-gray-100 border border-gray-300 rounded px-2 py-1 text-xs text-gray-800 truncate cursor-pointer hover:bg-gray-50 active:bg-gray-100"
                                    >
                                        {order.link}
                                    </button>
                                    {copiedId === order.id && (
                                        <span className="absolute -top-5.5 left-0 z-10 bg-emerald-600 text-white text-[10px] leading-none px-2 py-1 rounded shadow">
                                            Đã copy
                                        </span>
                                    )}
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-700">
                                {order.comment}
                            </td>
                            <td className="px-4 py-3">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                        STATUS_CONFIG[order.status].bg
                                    } ${STATUS_CONFIG[order.status].text}`}
                                >
                                    {order.status}
                                </span>
                            </td>
                            <td className="px-4 py-3">
                                <span className="px-2 py-1 rounded-full text-xs font-semibold">
                                    {order.payment}
                                </span>
                            </td>
                            <td className="px-2 py-1  font-semibold text-green-600">
                                {order.quantity}
                            </td>
                            <td className="px-2 py-1 text-gray-700">
                                {order.revenue}
                            </td>
                            <td className="px-2 py-1 text-gray-700">
                                {order.remaining}
                            </td>
                            <td className="px-2 py-1 text-gray-500 text-xs">
                                <span className="bg-gray-100 text-blue-800 px-0.5 py-0.2 rounded text-xs font-semibold">
                                    {order.datetime}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <button className="p-1 hover:bg-gray-200 rounded text-blue-600 hover:text-blue-800">
                                        <FlagOff size={16} color="red" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
