"use client";
import { CircleDollarSign, Landmark, Wallet } from "lucide-react";
import React, { useMemo, useState } from "react";

type Bank = {
    code: string;
    name: string;
};

const BANKS: Bank[] = [
    { code: "VCB", name: "Vietcombank" },
    { code: "TCB", name: "Techcombank" },
    { code: "MB", name: "MB Bank" },
    { code: "VTB", name: "VietinBank" },
    { code: "BIDV", name: "BIDV" },
    { code: "ACB", name: "ACB" },
];

const MIN_AMOUNT = 1000;

function formatVND(value: number) {
    if (Number.isNaN(value)) return "0đ";
    return value.toLocaleString("vi-VN") + "đ";
}

export default function RechargeForm() {
    const [amount, setAmount] = useState<string>("");
    const [bank, setBank] = useState<string>(BANKS[0].code);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const numericAmount = useMemo(() => {
        const n = Number(amount.replace(/\D/g, ""));
        return Number.isFinite(n) ? n : 0;
    }, [amount]);

    const estimatedReceive = useMemo(() => numericAmount, [numericAmount]);

    const amountTooLow = numericAmount < MIN_AMOUNT;

    function onChangeAmount(e: React.ChangeEvent<HTMLInputElement>) {
        const raw = e.target.value.replace(/\D/g, "");
        const n = Number(raw || 0);
        const pretty = raw ? n.toLocaleString("vi-VN") : "";
        setAmount(pretty);
    }

    async function onCreateInvoice(e: React.FormEvent) {
        e.preventDefault();
        if (amountTooLow) return;
        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 700));
        setIsSubmitting(false);
        alert(
            `Đã tạo hóa đơn nạp ${formatVND(numericAmount)} qua ${
                BANKS.find((b) => b.code === bank)?.name || bank
            } (demo)`
        );
    }

    return (
        <form
            onSubmit={onCreateInvoice}
            className="rounded bg-white shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800"
        >
            <div className="mb-4 w-full bg-black p-4 text-white">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-white">
                        <Landmark color="gray" size={24} />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">
                            Nạp tiền qua ngân hàng
                        </h1>
                        <p className="text-sm text-neutral-300">
                            Thanh toán nhanh chóng và an toàn
                        </p>
                    </div>
                </div>
            </div>

            <div className="m-4 rounded bg-blue-50 p-3 text-sm text-blue-900 ">
                <p className="font-medium">Hướng dẫn nạp tiền</p>
                <p>
                    Nhập số tiền, chọn ngân hàng và nhấn tạo hóa đơn để bắt đầu
                    quy trình nạp tiền.
                </p>
            </div>

            <div className="m-4">
                <label className="mb-1 block text-sm font-medium">
                    Số tiền nạp <span className="text-red-600">*</span>
                </label>
                <div>
                    <div className="flex items-center border border-neutral-300 dark:border-neutral-700 rounded">
                        <div className="flex h-10.5 w-12 items-center justify-center border bg-neutral-50 text-neutral-500">
                            <CircleDollarSign size={15} color="black" />
                        </div>
                        <input
                            value={amount}
                            onChange={onChangeAmount}
                            inputMode="numeric"
                            placeholder="Nhập số tiền cần nạp"
                            className="flex-1 h-10.5 px-3 text-[15px] outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900"
                        />
                    </div>
                    <p className="mt-1 text-xs text-neutral-500">
                        Số tiền tối thiểu:{" "}
                        <span className="font-medium text-red-500">1.000đ</span>
                    </p>
                </div>
            </div>

            <div className="m-4">
                <label className="mb-1 block text-sm font-medium">
                    Chọn ngân hàng <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center border border-neutral-300 dark:border-neutral-700 rounded">
                    <div className="flex h-10.5 w-12 items-center justify-center border bg-neutral-50 text-neutral-500">
                        <Landmark color="black" size={15} />
                    </div>
                    <select
                        value={bank}
                        onChange={(e) => setBank(e.target.value)}
                        className="flex-1 h-10.5 px-3 text-[15px] outline-none appearance-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-neutral-700 dark:bg-neutral-900"
                    >
                        {BANKS.map((b) => (
                            <option key={b.code} value={b.code}>
                                {b.name}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none pr-3 text-neutral-400">
                        ▾
                    </div>
                </div>
            </div>

            <div className="m-4">
                <div className="flex items-center border border-dashed border-neutral-300 dark:border-neutral-700 rounded">
                    <div className="flex h-18 w-12 items-center justify-center border-r border-dashed bg-neutral-50 text-neutral-500">
                        <Wallet color="black" size={22} />
                    </div>
                    <div className="flex-1 px-3 text-lg font-semibold text-gray-800">
                        <div className="block text-sm font-medium">
                            <div>Số tiền thực nhận ước tính</div>
                            <div className="text-sm text-red-600">
                                {formatVND(estimatedReceive)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-4">
                <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded bg-neutral-900 px-4 py-2 text-sm font-semibold text-white cursor-pointer"
                >
                    <span>🧾</span>
                    <span>{isSubmitting ? "Đang tạo..." : "TẠO HÓA ĐƠN"}</span>
                </button>
            </div>
        </form>
    );
}
