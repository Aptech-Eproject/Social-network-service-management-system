export default function RechargeTips() {
    return (
        <aside className="self-start rounded bg-white p-4 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
            <div className="mb-2 font-semibold">Lưu ý</div>
            <ul className="list-disc space-y-2 pl-5 text-xs font-semibold text-neutral-700">
                <li>
                    Vui lòng chuyển khoản đúng số tiền và nội dung để được cộng
                    tiền tự động
                </li>
                <li>
                    Thời gian xử lý giao dịch có thể mất từ 1-5 phút sau khi
                    chuyển khoản thành công
                </li>
                <li>
                    Nếu sau 30 phút vẫn chưa nhận được tiền, vui lòng liên hệ hỗ
                    trợ
                </li>
            </ul>
        </aside>
    );
}
