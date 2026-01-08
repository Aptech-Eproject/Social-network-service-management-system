export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-emerald-900">SocialNet</span>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 text-emerald-700 hover:text-emerald-900 font-medium transition-colors">Đăng nhập</button>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 font-medium transition-all shadow-lg shadow-emerald-200">Đăng ký</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6">
            Kết nối mọi người,
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Chia sẻ khoảnh khắc</span>
          </h1>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto mb-8">
            Hệ thống quản lý mạng xã hội hiện đại, giúp bạn kết nối với bạn bè và chia sẻ những khoảnh khắc đáng nhớ
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:from-emerald-600 hover:to-green-700 font-semibold text-lg transition-all shadow-xl shadow-emerald-300 hover:shadow-2xl hover:scale-105">
            Bắt đầu ngay
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Kết nối bạn bè</h3>
            <p className="text-emerald-700">Tìm kiếm và kết nối với bạn bè, đồng nghiệp một cách dễ dàng</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Chia sẻ nội dung</h3>
            <p className="text-emerald-700">Đăng ảnh, video và cập nhật trạng thái với cộng đồng của bạn</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">An toàn & Bảo mật</h3>
            <p className="text-emerald-700">Dữ liệu của bạn được bảo vệ với công nghệ mã hóa hiện đại</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng tham gia cộng đồng?</h2>
          <p className="text-emerald-50 mb-6 text-lg">Hàng triệu người đang sử dụng SocialNet mỗi ngày</p>
          <button className="px-8 py-3 bg-white text-emerald-600 rounded-xl hover:bg-emerald-50 font-semibold transition-all shadow-lg hover:scale-105">
            Tạo tài khoản miễn phí
          </button>
        </div>
      </main>

      <footer className="bg-emerald-900 text-emerald-100 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 SocialNet. Hệ thống quản lý mạng xã hội.</p>
        </div>
      </footer>
    </div>
  );
}
