import Link from "next/link";

import { ChevronLeft } from "lucide-react";
import ForgotPasswordForm from "@/layouts/client/landing-page/ForgotPasswordForm";

export default function ForgotPasswordPage() {
    return (
        <div className="w-full h-full bg-white flex flex-col">
            <div className="px-22 flex flex-col items-center justify-center flex-1">
                {/* Back Navigation */}
                <div className="flex items-center justify-start pb-12 w-full">
                    <Link
                        className="text-[#667085] flex"
                        href="/"
                    >
                        <ChevronLeft className="w-5.5 h-5.5 hover:text-slate-700 cursor-pointer" />
                        <span className="font-medium text-sm hover:text-slate-700 cursor-pointer">
                            Quay lại đăng nhập
                        </span>
                    </Link>
                </div>

                {/* Form */}
                <ForgotPasswordForm />
            </div>

            {/* Terms */}
            <div className="h-10 flex items-center justify-center">
                <span className="text-xs text-gray-400">
                    Copyright © 2026 TUANORI {" "}
                    <span className="underline text-gray-500 cursor-pointer">
                        Chính sách bảo mật
                    </span>
                </span>
            </div>
        </div>
    );
}