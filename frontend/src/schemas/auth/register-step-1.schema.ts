import * as z from "zod";

export const registerStep1Schema = z.object({
    identifier: z
        .string()
        .min(5, "Vui lòng nhập email hoặc số điện thoại hợp lệ"),
});