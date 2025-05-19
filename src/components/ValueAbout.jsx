import React from "react";

const services = [
  {
    icon: <ion-icon name="people-sharp" class="text-3xl"></ion-icon>,
    title: "Family Law",
    description: "Perceraian, hak asuh anak, warisan",
    active: false,
  },
  {
    icon: <ion-icon name="document-text" class="text-3xl"></ion-icon>,
    title: "Contract Law",
    description: "Pembuatan, peninjauan, dan sengketa kontrak",
    active: false,
  },
  {
    icon: <ion-icon name="hammer" class="text-3xl"></ion-icon>,
    title: "Criminal Law",
    description: "Tindak pidana, pembelaan di pengadilan",
    active: false,
  },
  {
    icon: <ion-icon name="home" class="text-3xl"></ion-icon>,
    title: "Land & Property Law",
    description: "Sengketa tanah, jual beli rumah, warisan tanah",
    active: false,
  },
];

export default function ValueAbout() {
  return (
    <div className="relative z-30 -mt-24 mx-auto w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-4 bg-white shadow-lg divide-x divide-gray-200 rounded-lg overflow-hidden">
        {services.map((service, index) => (
            <div
            key={index}
            className={`
                flex flex-col items-start justify-center gap-4 p-8
                ${service.active ? "bg-[#D2BE9C] text-white shadow-lg" : "bg-gray-50 text-gray-900"}
            `}
            >
            <div className={`flex items-center justify-center w-12 h-12 rounded-full 
                ${service.active ? "bg-white/30 text-white" : "bg-secondary text-white"}`}>
                {service.icon}
            </div>

            <div className="text-xl font-semibold tracking-wide leading-tight">
                {service.title}
            </div>

            <p className={`text-sm leading-relaxed ${service.active ? "text-white/90" : "text-gray-600"}`}>
                {service.description}
            </p>
            </div>
        ))}
    </div>

  );
}
