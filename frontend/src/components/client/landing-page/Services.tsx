import {
  Building2,
  CreditCard,
  Layers,
  Package,
  Shield,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    { icon: Package, label: "Đại lý" },
    {
      icon: Layers,
      label: "Dịch vụ chất lượng cao",
    },
    { icon: Building2, label: "Hỗ trợ" },
    { icon: Zap, label: "Cấp nhật" },
    { icon: CreditCard, label: "Hỗ trợ API" },
    {
      icon: Shield,
      label: "Thanh toán an toàn",
    },
  ];

  return (
    <section className="pt-6 px-52 bg-[#1e40af]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <service.icon className="text-orange-600" size={60} />
              </div>
              <div>
                <h3 className="text-gray-300 font-normal text-sm mb-1">
                  {service.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
