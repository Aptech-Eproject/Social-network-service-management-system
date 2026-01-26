import Image from "next/image";

export default function Clients() {
  const socialIcons = [
    {
      name: "Facebook",
      src: "/images/facebook.png",
    },
    {
      name: "TikTok",
      src: "/images/tiktok.png",
    },
    {
      name: "Telegram",
      src: "/images/telegram.png",
    },
    {
      name: "Instagram",
      src: "/images/instagram.png",
    },
    {
      name: "YouTube",
      src: "/images/youtube.png",
    },
    {
      name: "X",
      src: "/images/twitter.png",
    },
  ];

  return (
    <section className="px-22 pb-20">
      <div className="py-22 px-6 bg-orange-600 rounded-xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div className="flex flex-col gap-4">
            <h2 className="w-5/6 text-4xl text-white font-extrabold mb-4 leading-10">
              Cung cấp dịch vụ trên tất cả các mạng xã hội
            </h2>
            <p className="text-slate-100 text-sm! max-w-xl mb-8 leading-6">
              Bảng điều khiển dịch vụ SMM tốt nhất và rẻ nhất trực tuyến cho
              TikTok, Instagram, YouTube, Facebook, Spotify, Telegram, Twitch,
              Twitter, Lưu lượng truy cập trang web, LinkedIn, Discord và
              SoundCloud từ Nhà cung cấp smmpanel-v3.baocms.net SMM.
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="grid grid-cols-3 gap-8 justify-center">
            {socialIcons.map((icon) => (
              <div
                key={icon.name}
                className="bg-white rounded-xl flex items-center justify-center p-8 shadow-md animate-bounce hover:ring-4 hover:ring-orange-800 hover:ring-opacity-50 transition-all duration-200"
              >
                <Image
                  src={icon.src}
                  alt={icon.name}
                  className="object-contain"
                  width={60}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
