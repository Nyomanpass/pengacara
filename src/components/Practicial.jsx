import React from "react";

export default function Practicial() {
  const practiceAreas = [
    {
      title: "Hukum Perdata",
      desc: "Menyelesaikan sengketa antara individu atau badan hukum, termasuk wanprestasi dan perbuatan melawan hukum.",
      icon: "document-text-outline",
    },
    {
      title: "Hukum Pidana",
      desc: "Pendampingan kasus pidana, baik sebagai kuasa hukum tersangka/terdakwa maupun korban.",
      icon: "shield-half-outline",
    },
    {
      title: "Hukum Keluarga",
      desc: "Menangani perkara perceraian, hak asuh anak, harta gono-gini, dan warisan.",
      icon: "people-outline",
    },
    {
      title: "Hukum Bisnis/Korporasi",
      desc: "Penyusunan kontrak, pendirian PT, kepatuhan hukum perusahaan, dan penyelesaian sengketa usaha.",
      icon: "briefcase-outline",
    },
    {
      title: "Sengketa Tanah",
      desc: "Membantu klien menyelesaikan konflik tanah, baik administratif maupun melalui litigasi.",
      icon: "map-outline",
    },
  ];

  return (
    <section className="bg-[#1b1d2f] text-white py-32" id="practice-areas">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Kiri: Judul dan intro */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light leading-snug mb-6">
            Bidang Praktik Hukum
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
          Berbagai layanan hukum disediakan secara profesional untuk menangani permasalahan sesuai bidangnya.
          </p>
          <img className="mt-10 rounded-xl shadow-md" src="header1.jpg" alt="" />
        </div>

        {/* Kanan: Daftar area praktik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {practiceAreas.map((area, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-primary text-3xl mt-1">
                <ion-icon name={area.icon}></ion-icon>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{area.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
