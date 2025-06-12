import React from 'react';

const services = [
  {
    icon: 'person-outline',
    title: 'Pendampingan Hukum Pribadi',
    description:
      'Memberikan layanan hukum secara langsung dan personal, ditangani oleh saya sendiri bersama rekan terpercaya untuk memastikan bantuan terbaik bagi Anda.',
  },
  {
    icon: 'shield-checkmark-outline',
    title: 'Pembelaan Hukum',
    description:
      'Mendampingi Anda dalam proses hukum, baik sebagai penasihat hukum maupun sebagai kuasa hukum dalam menghadapi perkara pidana atau perdata.',
  },
  {
    icon: 'trophy-outline',
    title: '95% Kasus Terselesaikan',
    description:
      'Berdasarkan pengalaman yang telah saya jalani, sebagian besar kasus berhasil diselesaikan dengan hasil yang memuaskan klien.',
  },
  {
    icon: 'chatbubble-ellipses-outline',
    title: 'Pendampingan Hukum Internasional',
    description:
      'Saya menyediakan layanan hukum dalam bahasa Inggris untuk klien yang membutuhkan pendampingan hukum atau konsultasi hukum.',
  }
  
];


const ServicesSection = () => {
  return (
    <section className="pb-32 bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg py-14 px-6 text-center shadow-sm hover:shadow-md transition"
          >
            <ion-icon
              name={service.icon}
              class="text-5xl text-primary mb-4"
            ></ion-icon>
            <h3 className="text-lg font-semibold text-secondary mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
