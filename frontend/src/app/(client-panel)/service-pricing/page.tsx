"use client";

import { useState } from "react";

import {
    Award,
    BriefcaseBusiness,
    Check,
    CircleCheck,
    Crown,
    Headset,
    Info,
    Sparkles,
    Star,
    Tag,
    Trophy,
    User,
    Wallet,
    X,
} from "lucide-react";
import UserSubHeader from "@/layouts/client/client-panel/UserSubHeader";

function ServicePricingPage() {
    const titlePage = "bảng giá dịch vụ";

    const [isActiveOption, seIsActiveOption] = useState("monthly");
    const [isAnnually, setIsAnnually] = useState(false);

    return (
        <div>
            {/* Sub Header */}
            <UserSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="p-6 flex flex-col gap-15">
                {/* Services Pricing Card - Classic */}
                <div className="flex items-start justify-between gap-6">
                    {/* Item 1 */}
                    <div className="flex flex-col h-full w-full bg-white shadow-sm rounded-xl p-4 gap-4 hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer border hover:border-blue-400">
                        {/* Icon Service */}
                        <div className="flex items-center justify-center relative">
                            <div className="p-6 rounded-full bg-linear-to-r from-blue-400 to-blue-500">
                                <User className="text-white w-10 h-10" />
                            </div>
                            <div className="absolute top-0 right-0 flex bg-black items-center justify-center gap-2 py-1.5 px-3 rounded-xl z-10">
                                <Check className="text-white w-3 h-3" />
                                <span className="uppercase text-xs text-slate-200 font-bold">
                                    Hiện tại
                                </span>
                            </div>
                        </div>

                        {/* Title Service */}
                        <div className="flex items-center justify-center flex-col text-center gap-2">
                            <span className="font-bold text-blue-500 text-xl">
                                Khách lẻ
                            </span>
                            <span className="text-gray-400 font-medium text-sm">
                                Cấp bậc mặc định cho tất cả khách hàng
                            </span>
                        </div>

                        {/* Content Service */}
                        <div className="flex flex-col items-center gap-4">
                            {/* Content Item 1 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#12cad8] p-2 rounded-md">
                                    <Tag className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Giá bán lẻ
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Áp dụng giá tiêu chuẩn
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 2 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md">
                                <div className="bg-[#ffa403] p-2 rounded-md">
                                    <Wallet className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Không yêu cầu nạp tối thiểu
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Dễ dàng bắt đầu
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col h-full w-full bg-white shadow-sm rounded-xl p-4 gap-4 hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer border hover:border-blue-400">
                        {/* Icon Service */}
                        <div className="flex items-center justify-center">
                            <div className="p-6 rounded-full bg-slate-100 shadow-slate-600">
                                <Award className="text-gray-500 w-10 h-10" />
                            </div>
                        </div>

                        {/* Title Service */}
                        <div className="flex items-center justify-center flex-col text-center gap-2">
                            <span className="font-bold text-slate-500 text-xl">
                                Cộng tác viên
                            </span>
                            <span className="text-gray-400 font-medium text-sm">
                                Cấp bậc đặc biệt với ưu đãi hấp dẫn
                            </span>
                        </div>

                        {/* Content Service */}
                        <div className="flex flex-col items-start gap-4">
                            {/* Content Item 1 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#ffa403] p-2 rounded-md">
                                    <Tag className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Giá Cộng tác viên
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Ưu đãi đặc biệt
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 2 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#ffa403] p-2 rounded-md">
                                    <Wallet className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Nạp tối thiểu
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        $19.23
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 3 */}
                            <div className="w-full bg-amber-100 flex flex-col items-start p-2 rounded-sm gap-2">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <Info className="w-3 h-3 text-amber-500" />
                                        <span className="font-bold text-amber-500 text-xs">
                                            Còn thiếu
                                        </span>
                                    </div>
                                    <span className="font-bold text-amber-500 text-xs">
                                        $19.23
                                    </span>
                                </div>
                                <div className="w-full h-1 rounded-lg bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col h-full w-full bg-white shadow-sm rounded-xl p-4 gap-4 hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer border hover:border-blue-400">
                        {/* Icon Service */}
                        <div className="flex items-center justify-center">
                            <div className="p-6 rounded-full bg-slate-100 shadow-slate-600">
                                <Trophy className="text-gray-500 w-10 h-10" />
                            </div>
                        </div>

                        {/* Title Service */}
                        <div className="flex items-center justify-center flex-col text-center gap-2">
                            <span className="font-bold text-slate-500 text-xl">
                                Giá Đại lý
                            </span>
                            <span className="text-gray-400 font-medium text-sm">
                                Cấp bậc đặc biệt với ưu đãi hấp dẫn
                            </span>
                        </div>

                        {/* Content Service */}
                        <div className="flex flex-col items-start gap-4">
                            {/* Content Item 1 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FFA403] p-2 rounded-md">
                                    <Tag className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Giá Đại lý
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Ưu đãi đặc biệt
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 2 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#fd6610] p-2 rounded-md">
                                    <CircleCheck className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Hỗ trợ tạo website con
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Chi phí gia hạn 100.000đ / tháng
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 3 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FFA403] p-2 rounded-md">
                                    <Wallet className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Nạp tối thiểu
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        $1.923.08
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 4 */}
                            <div className="w-full bg-amber-100 flex flex-col items-start p-2 rounded-sm gap-2">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <Info className="w-3 h-3 text-amber-500" />
                                        <span className="font-bold text-amber-500 text-xs">
                                            Còn thiếu
                                        </span>
                                    </div>
                                    <span className="font-bold text-amber-500 text-xs">
                                        $1.923.08
                                    </span>
                                </div>
                                <div className="w-full h-1 rounded-lg bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex flex-col h-full w-full bg-white shadow-sm rounded-xl p-4 gap-4 hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer border hover:border-blue-400">
                        {/* Icon Service */}
                        <div className="flex items-center justify-center">
                            <div className="p-6 rounded-full bg-slate-100 shadow-slate-600">
                                <Star className="text-gray-500 w-10 h-10" />
                            </div>
                        </div>

                        {/* Title Service */}
                        <div className="flex items-center justify-center flex-col text-center gap-2">
                            <span className="font-bold text-slate-500 text-xl">
                                Nhà phân phối
                            </span>
                            <span className="text-gray-400 font-medium text-sm">
                                Cấp bậc đặc biệt với ưu đãi hấp dẫn
                            </span>
                        </div>

                        {/* Content Service */}
                        <div className="flex flex-col items-start gap-4">
                            {/* Content Item 1 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FD6610] p-2 rounded-md">
                                    <Tag className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Giá Nhà phân phối
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Ưu đãi đặc biệt
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 2 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FD6610] p-2 rounded-md">
                                    <CircleCheck className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Hỗ trợ tạo website con
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Chi phí gia hạn 100.000đ / tháng
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 3 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FFA403] p-2 rounded-md">
                                    <Crown className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Dịch vụ độc quyền
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Dịch vụ độc quyền chỉ dành riêng cho
                                        khách hàng VIP
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 4 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#3023c3] p-2 rounded-md">
                                    <Headset className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Hỗ trợ riêng 24/7
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        Chúng tôi sẽ luôn sẵn sàng giúp đỡ bạn
                                        mọi lúc, mọi nơi
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 5 */}
                            <div className="flex items-center gap-4 bg-[#ecf4ff] p-2 rounded-md w-full">
                                <div className="bg-[#FD6610] p-2 rounded-md">
                                    <Wallet className="text-white w-3.5 h-3.5" />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <span className="text-sm font-medium text-slate-800">
                                        Nạp tối thiểu
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        $19.230.77
                                    </span>
                                </div>
                            </div>

                            {/* Content Item 6 */}
                            <div className="w-full bg-amber-100 flex flex-col items-start p-2 rounded-sm gap-2">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <Info className="w-3 h-3 text-amber-500" />
                                        <span className="font-bold text-amber-500 text-xs">
                                            Còn thiếu
                                        </span>
                                    </div>
                                    <span className="font-bold text-amber-500 text-xs">
                                        $19.230.77
                                    </span>
                                </div>
                                <div className="w-full h-1 rounded-lg bg-slate-200" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Pricing Card - Modern*/}
                <div className="bg-white px-6 w-full pt-16 pb-8 rounded-lg">
                    <div className="flex flex-col">
                        {/* Service Title */}
                        <div className="mx-auto max-w-lg flex items-center justify-center mb-7">
                            <span className="font-bold text-3xl text-center text-gray-800">
                                Các gói dịch vụ thiết kế riêng phù hợp với nhu
                                cầu độc đáo!
                            </span>
                        </div>

                        {/* Services Option */}
                        <div className="relative inline-flex mx-auto bg-gray-200 rounded-full z-1 p-1 mb-8">
                            <span
                                className={`absolute top-1/2 -z-1 h-11 w-30 -translate-y-1/2 rounded-full bg-white shadow-md duration-300 ease-linear ${
                                    isActiveOption === "monthly"
                                        ? "translate-x-0"
                                        : "translate-x-full"
                                }`}
                            />
                            <button
                                className={`flex h-11 w-30 items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer ${
                                    isActiveOption === "monthly"
                                        ? "text-gray-800 font-bold"
                                        : ""
                                }`}
                                onClick={() => {
                                    seIsActiveOption("monthly");
                                    setIsAnnually(false);
                                }}
                            >
                                Monthly
                            </button>
                            <button
                                className={`flex h-11 w-30 items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer ${
                                    isActiveOption === "annually"
                                        ? "text-gray-800 font-bold"
                                        : ""
                                }`}
                                onClick={() => {
                                    seIsActiveOption("annually");
                                    setIsAnnually(true);
                                }}
                            >
                                Annually
                            </button>
                        </div>

                        {/* Service Cards */}
                        <div className="flex justify-between gap-6">
                            {/* Personal Card */}
                            <div className="flex flex-col gap-6 w-full ring-1 ring-gray-300 hover:ring-2 hover:ring-blue-500 transition-colors duration-300  p-6 rounded-lg">
                                {/* Card Title */}
                                <div>
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col gap-2">
                                            <span className="font-bold text-lg">
                                                Personal
                                            </span>
                                            <div>
                                                <span className="font-bold text-3xl">
                                                    {isAnnually
                                                        ? "$99.00"
                                                        : "$59.99"}
                                                </span>
                                                <span>/ Lifetime</span>
                                            </div>
                                        </div>
                                        <div className="bg-blue-100 p-3 rounded-md">
                                            <User className="w-6 h-6 text-blue-500" />
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <span className="text-xs text-gray-600">
                                            For solo designers & freelancers
                                        </span>
                                    </div>
                                </div>

                                {/* Divide Horizontal */}
                                <div className="w-full border border-b-gray-300" />

                                {/* Benefit & Limitless Service */}
                                <div className="flex flex-col gap-4">
                                    {/* B1 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            5 website
                                        </span>
                                    </div>

                                    {/* B2 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            500 MB Storage
                                        </span>
                                    </div>

                                    {/* B3 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            Unlimited Sub-Domain
                                        </span>
                                    </div>

                                    {/* B4 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            3 Custom Domain
                                        </span>
                                    </div>

                                    {/* L1 */}
                                    <div className="flex items-center gap-2">
                                        <X className="text-gray-400 w-4 h-4" />
                                        <span className="font-semibold text-xs text-gray-400">
                                            Free SSL Certificate
                                        </span>
                                    </div>

                                    {/* L2 */}
                                    <div className="flex items-center gap-2">
                                        <X className="text-gray-400 w-4 h-4" />
                                        <span className="font-semibold text-xs text-gray-400">
                                            Unlimited Traffic
                                        </span>
                                    </div>
                                </div>

                                {/* Choose Button */}
                                <button className="flex w-full items-center justify-center rounded-lg bg-[#0f172a] p-3.5 text-xs font-medium text-white shadow-sm transition-colors duration-300 hover:bg-blue-600 cursor-pointer">
                                    Choose Starter
                                </button>
                            </div>

                            {/* Professional Card */}
                            <div className="flex flex-col gap-6 w-full ring-2 ring-blue-500  p-6 rounded-lg">
                                {/* Card Title */}
                                <div>
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col gap-2">
                                            <span className="font-bold text-lg">
                                                Professional
                                            </span>
                                            <div>
                                                <span className="font-bold text-3xl">
                                                    {isAnnually
                                                        ? "$199.00"
                                                        : "$99.99"}
                                                </span>
                                                <span>/ Lifetime</span>
                                            </div>
                                        </div>
                                        <div className="bg-blue-100 p-3 rounded-md">
                                            <BriefcaseBusiness className="w-6 h-6 text-blue-500" />
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <span className="text-xs text-gray-600">
                                            For working on commercial projects
                                        </span>
                                    </div>
                                </div>

                                {/* Divide Horizontal */}
                                <div className="w-full border border-b-gray-300" />

                                {/* Benefit & Limitless Service */}
                                <div className="flex flex-col gap-4">
                                    {/* B1 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            10 website
                                        </span>
                                    </div>

                                    {/* B2 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            1GB Storage
                                        </span>
                                    </div>

                                    {/* B3 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            Unlimited Sub-Domain
                                        </span>
                                    </div>

                                    {/* B4 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            5 Custom Domain
                                        </span>
                                    </div>

                                    {/* B5 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            Free SSL Certificate
                                        </span>
                                    </div>

                                    {/* L1 */}
                                    <div className="flex items-center gap-2">
                                        <X className="text-gray-400 w-4 h-4" />
                                        <span className="font-semibold text-xs text-gray-400">
                                            Unlimited Traffic
                                        </span>
                                    </div>
                                </div>

                                {/* Choose Button */}
                                <button className="flex w-full items-center justify-center rounded-lg bg-blue-600 p-3.5 text-xs font-medium text-white shadow-sm transition-colors duration-300 hover:bg-blue-800 cursor-pointer">
                                    Choose This Plan
                                </button>
                            </div>

                            {/* Enterprise Card */}
                            <div className="flex flex-col gap-6 w-full ring-1 ring-gray-300 hover:ring-2 hover:ring-blue-500 transition-colors duration-300  p-6 rounded-lg">
                                {/* Card Title */}
                                <div>
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col gap-2">
                                            <span className="font-bold text-lg">
                                                Enterprise
                                            </span>
                                            <div>
                                                <span className="font-bold text-3xl">
                                                    {isAnnually
                                                        ? "$799.00"
                                                        : "$599.99"}
                                                </span>
                                                <span>/ Lifetime</span>
                                            </div>
                                        </div>
                                        <div className="bg-blue-100 p-3 rounded-md">
                                            <Sparkles className="w-6 h-6 text-blue-500" />
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <span className="text-xs text-gray-600">
                                            For teams larger than 5 members
                                        </span>
                                    </div>
                                </div>

                                {/* Divide Horizontal */}
                                <div className="w-full border border-b-gray-300" />

                                {/* Benefit & Limitless Service */}
                                <div className="flex flex-col gap-4">
                                    {/* B1 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            15 website
                                        </span>
                                    </div>

                                    {/* B2 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            10GB Storage
                                        </span>
                                    </div>

                                    {/* B3 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            Unlimited Sub-Domain
                                        </span>
                                    </div>

                                    {/* B4 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            10 Custom Domain
                                        </span>
                                    </div>

                                    {/* B5 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            Free SSL Certificate
                                        </span>
                                    </div>

                                    {/* B6 */}
                                    <div className="flex items-center gap-2">
                                        <Check className="text-green-500 w-4 h-4" />
                                        <span className="font-semibold text-xs text-slate-600">
                                            Unlimited Traffic
                                        </span>
                                    </div>
                                </div>

                                {/* Choose Button */}
                                <button className="flex w-full items-center justify-center rounded-lg bg-[#0f172a] p-3.5 text-xs font-medium text-white shadow-sm transition-colors duration-300 hover:bg-blue-600 cursor-pointer">
                                    Choose Starter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Pricing Table */}
                <div></div>
            </div>
        </div>
    );
}

export default ServicePricingPage;
