import React from 'react';

const Statistik = () => {
  const stats = [
    { value: "1,000+", label: "Klien Terpercaya" },
    { value: "95%", label: "Kasus Berhasil" },
    { value: "500+", label: "Kasus Ditangani" },
    { value: "20+ Tahun", label: "Pengalaman" },
  ];

  return (
    <div className="bg-secondary mt-28 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold">{stat.value}</h2>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistik;
