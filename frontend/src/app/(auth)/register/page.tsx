import Link from "next/link";

import { ChevronLeft } from "lucide-react";
import RegisterForm from "@/layouts/client/landing-page/RegisterForm";

export default function RegisterPage() {
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
                            Quay lại trang chủ
                        </span>
                    </Link>
                </div>

                <RegisterForm />

                {/* Divide Horizontal */}
                <div className="relative my-6 mt-0! w-full">
                    <div className="border-t border-gray-200 absolute top-1/2 left-0 right-0" />
                    <div className="flex justify-center text-sm">
                        <span className="px-4 text-gray-400 text-[13px] bg-white z-50">
                            Bạn cũng có thể dùng
                        </span>
                    </div>
                </div>

                {/* Google Button */}
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-3.5 px-4 rounded-md transition-all duration-300 cursor-pointer"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span>
                        Google
                    </span>
                </button>

                {/* Accept Terms */}
                <span className="text-xs text-gray-500 mt-5">
                    Bằng cách tiếp tục, bạn đồng ý với {" "}
                    <span className="underline text-[#DC2626] cursor-pointer">
                        Điều khoản và chính sách
                    </span>
                    <span>
                        {""} của chúng tôi
                    </span>
                </span>
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