import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex items-center justify-center bg-white">
      <footer className="w-full">
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-26 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="https://tuanori.vn"
                target="_blank"
                className="flex justify-center items-center lg:justify-start text-3xl font-bold"
              >
                <Image
                  src="/images/logo.png"
                  alt="LIKESUB-VIP"
                  width={250}
                  height={50}
                />
              </a>
            </div>

            {/* End Col */}
            <div className="lg:mx-auto text-left">
              <h4 className="text-2xl text-gray-900 font-extrabold mb-7">
                Pagedone
              </h4>
              <ul className="transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800 font-medium hover:underline cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800 font-medium hover:underline cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800 font-medium hover:underline cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* End Col */}
            <div className="lg:mx-auto text-left">
              <h4 className="text-2xl text-gray-900 font-extrabold mb-7">
                Products
              </h4>
              <ul className="transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800 font-medium hover:underline cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800 font-medium hover:underline cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    Icons Assets
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800 font-medium hover:underline cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    Responsive Blocks
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Col */}
            <div className="lg:mx-auto text-left">
              <h4 className="text-2xl text-gray-900 font-extrabold mb-7">
                Support
              </h4>
              <ul className="transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800 font-medium hover:underline cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    Customer Support
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800 font-medium hover:underline cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-gray-800 font-medium hover:underline cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Subcribe Col */}
            <div className="lg:mx-auto text-left">
              <h4 className="text-2xl text-gray-900 font-extrabold mb-7">
                Subscribe
              </h4>
              <p className="text-gray-800 font-medium hover:underline cursor-pointer leading-6 mb-7">
                Subscribe to get the latest news from us
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-4 flex items-center justify-center bg-[#f6f8f9]">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-gray-600 text-sm font-medium">
              Copyright © 2026 Tuanori, All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
