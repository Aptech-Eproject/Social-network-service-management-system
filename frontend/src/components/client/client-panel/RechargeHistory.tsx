import { ScanSearch, Shredder, Trash2 } from "lucide-react";

function formatVND(value: number) {
    if (Number.isNaN(value)) return "0đ";
    return value.toLocaleString("vi-VN") + "đ";
}

type HistoryItem = {
    id: string;
    status: string;
    bank: string;
    needPay: number;
    received: number;
    createdAt: string;
    updatedAt: string;
};

interface RechargeHistoryProps {
    data?: HistoryItem[];
}

export default function RechargeHistory({ data = [] }: RechargeHistoryProps) {
    const history: HistoryItem[] =
        data.length > 0
            ? data
            : [
                  {
                      id: "689714325",
                      status: "Chưa thanh toán",
                      bank: "Vietcombank",
                      needPay: 10000,
                      received: 10000,
                      createdAt: "07/01/2026 17:04:33",
                      updatedAt: "07/01/2026 17:04:33",
                  },
              ];

    return (
        <div className="mt-6 rounded bg-white p-4 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-base font-semibold">
                        LỊCH SỬ NẠP TIỀN
                    </span>
                </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-[1fr_220px_280px_auto]">
                <div className="relative">
                    <input
                        placeholder="Mã giao dịch"
                        className="w-full rounded border border-neutral-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900"
                    />
                    <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-neutral-400">
                        <ScanSearch />
                    </span>
                </div>
                <select className="rounded border border-neutral-300 bg-white py-2 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900">
                    <option>-- Trạng thái --</option>
                    <option>Chưa thanh toán</option>
                    <option>Đã thanh toán</option>
                    <option>Hủy</option>
                </select>
                <div className="grid grid-cols-2 gap-2">
                    <input
                        type="date"
                        className="rounded border border-neutral-300 bg-white py-2 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900"
                    />
                    <input
                        type="date"
                        className="rounded border border-neutral-300 bg-white py-2 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button className="rounded bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
                        Tìm kiếm
                    </button>
                    <button className="rounded bg-white px-1 py-2 border ">
                        <Shredder  />
                    </button>
                </div>
            </div>

            <div className="mt-4 overflow-x-auto">
                <table className="min-w-225 w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-neutral-50 text-left text-neutral-600 dark:bg-neutral-800/40 dark:text-neutral-300">
                            <th className="px-3 py-2 font-medium">
                                Mã giao dịch
                            </th>
                            <th className="px-3 py-2 font-medium">
                                Trạng thái
                            </th>
                            <th className="px-3 py-2 font-medium">Ngân hàng</th>
                            <th className="px-3 py-2 font-medium">
                                Số tiền cần thanh toán
                            </th>
                            <th className="px-3 py-2 font-medium">
                                Số tiền nhận được
                            </th>
                            <th className="px-3 py-2 font-medium">
                                Thời gian tạo hóa đơn
                            </th>
                            <th className="px-3 py-2 font-medium">Cập nhật</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((h) => (
                            <tr
                                key={h.id}
                                className="border-t border-neutral-200 dark:border-neutral-800"
                            >
                                <td className="px-3 py-2">
                                    <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded text-xs font-semibold">
                                        {h.id}
                                    </span>
                                </td>
                                <td className="px-3 py-2">
                                    <span className="inline-flex rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                                        {h.status}
                                    </span>
                                </td>
                                <td className="px-3 py-2">{h.bank}</td>
                                <td className="px-3 py-2">
                                    {formatVND(h.needPay)}
                                </td>
                                <td className="px-3 py-2">
                                    {formatVND(h.received)}
                                </td>
                                <td className="px-3 py-2 whitespace-nowrap">
                                    {h.createdAt}
                                </td>
                                <td className="px-3 py-2 whitespace-nowrap">
                                    {h.updatedAt}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
