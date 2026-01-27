"use client";

import * as z from "zod";
import { Controller, useForm } from "react-hook-form";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/common/ui/card";
import {
    Field,
    FieldGroup,
} from "@/components/common/ui/field";

import { Input } from "@/components/common/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerStep1Schema } from "@/schemas/auth/register-step-1.schema";

export default function RegistersForm() {
    const router = useRouter();
    const [registerBy, setRegisterBy] = useState<"email" | "phone">("email");

    const form = useForm<z.infer<typeof registerStep1Schema>>({
        resolver: zodResolver(registerStep1Schema),
        defaultValues: {
            identifier: "",
        },
    });

    const onSubmit = (data: z.infer<typeof registerStep1Schema>) => {
        window.alert(`REGISTER STEP 1: ${JSON.stringify(data)}`);
        router.push("/verify-account");
    };

    return (
        <Card className="w-full p-0!">
            {/* Form Header */}
            <CardHeader>
                <CardTitle className="text-[26px] font-semibold text-black">
                    Đăng nhập hoặc đăng ký
                </CardTitle>
                <CardDescription className="text-slate-400">
                    Vui lòng nhập thông tin tài khoản để tiếp tục
                </CardDescription>
            </CardHeader>

            {/* Navigate Form */}
            <div className="pt-6 w-full flex items-center justify-start gap-8 border-b border-gray-200">
                <button
                    onClick={() => router.push("/login")}
                    className="pb-4 cursor-pointer"
                >
                    <span className="text-gray-400 font-medium text-[15px]! hover:text-gray-600 transition-colors duration-300 cursor-pointer">
                        Đăng nhập
                    </span>
                </button>
                <button
                    onClick={() => router.push("/register")}
                    className="pb-4 border-b-2 border-[#3B82F6] cursor-pointer"
                >
                    <span className="text-[#3B82F6] font-medium text-[15px]! cursor-pointer">
                        Đăng ký
                    </span>
                </button>
            </div>

            {/* Form Content */}
            <CardContent>
                <form
                    id="register-step1-form"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FieldGroup>
                        <Controller
                            name="identifier"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <Input
                                        {...field}
                                        placeholder={
                                            registerBy === "email"
                                                ? "Nhập email của bạn"
                                                : "Nhập số điện thoại của bạn"
                                        }
                                        aria-invalid={fieldState.invalid}
                                        className="border border-gray-200 rounded-lg px-4 py-6 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition mb-4"
                                    />
                                </Field>
                            )}
                        />

                        {/* Switch method */}
                        <div className="w-full text-left pt-4">
                            <button
                                onClick={(e) => {
                                    setRegisterBy(registerBy === "email" ? "phone" : "email")
                                    e.preventDefault();
                                }}
                                className="text-[#3B82f6] hover:underline text-sm! cursor-pointer"
                            >
                                {registerBy === "email"
                                    ? "Đăng ký bằng số điện thoại"
                                    : "Đăng ký bằng email"}
                            </button>
                        </div>
                    </FieldGroup>
                </form>
            </CardContent>

            {/* Submit Button */}
            <CardFooter className="mb-6">
                <div className="w-full">
                    <button
                        type="submit"
                        form="register-step1-form"
                        className="w-full bg-[#1e40af] hover:bg-blue-700 text-white py-4! font-semibold rounded-full shadow-sm transition-colors duration-300 cursor-pointer"
                    >
                        Đăng ký
                    </button>
                </div>
            </CardFooter>
        </Card>
    );
}