"use client"

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Faq() {
  const features = [
    {
      title: "SMM panels - what are they?",
      description:
        "Panels are platforms to manage your social media growth and engagement efficiently.",
    },
    {
      title: "What SMM services can I find on this panel?",
      description:
        "You can find services for Instagram, Twitter, Facebook, YouTube, TikTok and more.",
    },
    {
      title: "Are SMM services on your panel safe to buy?",
      description:
        "Yes, all our services are safe and verified by our quality team.",
    },
    {
      title: "How does a mass order work?",
      description:
        "Mass orders allow you to boost multiple accounts simultaneously with our bulk system.",
    },
    {
      title: "What does Drip-feed mean?",
      description:
        "Drip-feed spreads your engagement gradually to look more natural and organic.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pb-28 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 py-6 items-center justify-between gap-8">
          {/* Left: Illustration */}
          <div className="flex flex-col h-full gap-2.5 max-w-xl">
            <p className="text-4xl font-extrabold">
              Những câu hỏi thường gặp
            </p>
            <div className="space-y-0.5">
              <p>
                Không tìm thấy câu trả lời bạn đang tìm kiếm?
              </p>
              <p>
                Hãy xem trang Câu hỏi thường gặp của chúng tôi để biết thêm thông tin.
              </p>
            </div>
          </div>

          {/* Right: FAQ List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-600 transition-900 cursor-pointer group shadow-sm ${openIndex === index ? "border-blue-400" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-medium text-gray-800 group-hover:text-[#2563eb] text-base ${openIndex === index ? "text-blue-500" : ""}`}
                  >
                    {feature.title}
                  </span>
                  <ChevronRight
                    size={18}
                    className={`text-gray-400 group-hover:text-[#2563eb] transition shrink-0 ${openIndex === index ? "rotate-90 text-blue-400" : ""}`}
                  />
                </div>
                {openIndex === index && (
                  <div className="mt-2 text-gray-600 text-sm animate-fade-in">
                    {feature.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
