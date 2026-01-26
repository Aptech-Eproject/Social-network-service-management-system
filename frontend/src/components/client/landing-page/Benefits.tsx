import { CheckSquare } from "lucide-react";
import Image from "next/image";
import Services from "./Services";

export default function Benefits() {
  return (
    <section className="bg-white relative w-full pb-70">
      <div className="bg-[#1e40af] px-6 relative z-10 mx-auto flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl! max-w-4xl! text-center font-extrabold text-white mb-6 leading-tight">
            Chúng tôi đang giúp thống trị mạng xã hội với bảng điều khiển mạng
            xã hội lớn nhất.
          </h2>
        </div>

        <div className="flex gap-12 items-start justify-between">
          {/* Left: Image */}
          <div className="relative w-full">
            <div className="rounded-3xl h-100 flex items-center justify-center">
              <Image
                alt="Mobile apps illustration"
                loading="lazy"
                width="400"
                height="400"
                decoding="async"
                data-nimg="1"
                className="w-full h-full object-contain animate-float" style={{ color: "transparent" }}
                src="/images/why-us.png" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="max-w-2xl flex flex-col w-full">
            <p className="text-gray-300 text-[16px] font-normal mb-8 leading-relaxed pt-8">
              Chúng tôi chỉ hoạt động hỗ trợ 24 giờ mỗi ngày và bảy lần một tuần
              với tất cả các nhu cầu và dịch vụ của bạn suốt cả ngày. Đừng đi đâu
              khác. Chúng tôi sẵn sàng phục vụ bạn và giúp đỡ bạn với tất cả các
              nhu cầu SMM của bạn. Người dùng hoặc Khách hàng có đơn đặt hàng SMM
              và cần dịch vụ SMM GIÁ RẺ sẽ được chào đón nhiều hơn trong PANEL SMM
              của chúng tôi.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <CheckSquare size={20} stroke="#ffffff" />
                <span className="text-white font-bold">
                  Đa dạng dịch vụ
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckSquare size={20} stroke="#ffffff" />
                <span className="text-white font-bold">
                  Chất lượng tuyệt vời
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckSquare size={20} stroke="#ffffff" />
                <span className="text-white font-bold">
                  Giá không thể tin được
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckSquare size={20} stroke="#ffffff" />
                <span className="text-white font-bold">
                  Nhiều phương thức thanh toán
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <Services /> */}
      </div>

      {/* Wave Container - Bottom with downward waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-64 md:h-80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          {/* Wave thứ nhất */}
          <path
            fill="#1e40af"
            fillOpacity="0.5"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>

          {/* Wave thứ hai */}
          <path
            fill="#1e40af"
            fillOpacity="0.7"
            d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>

          {/* Wave thứ ba */}
          <path
            fill="#1e40af"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,208C672,213,768,203,864,202.7C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>
    </section>
  );
}