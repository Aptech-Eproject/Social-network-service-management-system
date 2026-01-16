"use client"

import { useState } from "react";
import {
    BriefcaseBusiness,
    Check,
    Sparkles,
    User,
    X,
} from "lucide-react";

function ServicesPricingCardModern() {
    const [isActiveOption, seIsActiveOption] = useState("monthly");
    const [isAnnually, setIsAnnually] = useState(false);

    return (
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
                        className={`absolute top-1/2 -z-1 h-11 w-30 -translate-y-1/2 rounded-full bg-white shadow-md duration-300 ease-linear ${isActiveOption === "monthly"
                            ? "translate-x-0"
                            : "translate-x-full"
                            }`}
                    />
                    <button
                        className={`flex h-11 w-30 items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer ${isActiveOption === "monthly"
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
                        className={`flex h-11 w-30 items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-800 cursor-pointer ${isActiveOption === "annually"
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
    )
}

export default ServicesPricingCardModern