export default function Services() {

  const practiceAreas = [
    {
      title: "Hukum Perdata",
      desc:
        "Menangani berbagai sengketa perdata seperti wanprestasi (ingkar janji), perbuatan melawan hukum (PMH), gugatan utang-piutang, dan konflik kepemilikan aset. Layanan mencakup pendampingan dalam proses mediasi maupun litigasi di pengadilan untuk melindungi hak hukum secara maksimal dan mencapai penyelesaian yang adil sesuai hukum yang berlaku.",
      icon: "document-text-outline",
    },
    {
      title: "Hukum Pidana",
      desc:
        "Pendampingan hukum diberikan kepada tersangka, terdakwa, maupun korban dalam perkara pidana sejak tahap penyelidikan hingga persidangan. Penanganan mencakup kasus pidana umum, pidana khusus (korupsi, narkotika), serta peninjauan kembali, dengan pendekatan yang menjamin hak asasi manusia dan strategi hukum yang tepat.",
      icon: "shield-half-outline",
    },
    {
      title: "Hukum Keluarga",
      desc:
        "Mencakup persoalan perceraian, hak asuh anak, pembagian harta bersama (gono-gini), hingga sengketa waris. Proses ditangani secara bijaksana melalui pendekatan mediasi maupun litigasi untuk menjaga keharmonisan dan masa depan keluarga yang bersangkutan.",
      icon: "people-outline",
    },
    {
      title: "Hukum Bisnis/Korporasi",
      desc:
        "Layanan hukum menyeluruh bagi pelaku usaha dan entitas bisnis, mulai dari pendirian badan usaha, pembuatan kontrak, merger dan akuisisi, hingga kepatuhan terhadap regulasi. Juga mencakup penyelesaian sengketa bisnis melalui jalur negosiasi, mediasi, arbitrase, atau litigasi jika diperlukan.",
      icon: "briefcase-outline",
    },
    {
      title: "Sengketa Tanah",
      desc:
        "Menangani konflik pertanahan administratif dan hukum, seperti sertifikat ganda atau tumpang tindih hak tanah. Bantuan diberikan dalam verifikasi legalitas dokumen, pendampingan mediasi di BPN, hingga proses gugatan di pengadilan, baik secara perdata maupun pidana.",
      icon: "map-outline",
    },
  ];
  
  

  
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center bg-no-repeat py-24 px-6"
        style={{ backgroundImage: "url('galery2.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary bg-opacity-60"></div>

        {/* Content */}
        <div className="relative mt-7 max-w-5xl mx-auto z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Layanan Hukum Profesional yang Terpercaya
          </h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto mb-6">
            Menyediakan pendampingan dan solusi hukum dalam berbagai permasalahan, mulai dari perdata, pidana, hingga urusan keperdataan lainnya.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition">
            Jadwalkan Konsultasi Sekarang
          </button>
        </div>

      </section>

      <section className="py-16 container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Legal Services</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
          {practiceAreas.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl py-16 px-8 shadow-md border bg-white text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <ion-icon
                  name={item.icon}
                  className="text-3xl text-primary hover:text-white transition-colors duration-300"
                ></ion-icon>
                <h3 className="text-xl font-semibold transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>



    {/* Why Choose Us Section */}
    <section className="bg-gray-100 py-20">
  <div className="container text-center">
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
  {
    icon: "shield-checkmark-outline",
    title: "Komitmen Terhadap Keadilan",
    desc: "Menjunjung tinggi integritas dan memperjuangkan hak serta kepentingan hukum secara maksimal."
  },
  {
    icon: "bulb-outline",
    title: "Pendekatan Hukum Strategis",
    desc: "Setiap kasus dianalisis secara mendalam untuk merancang strategi hukum yang efisien dan berdampak positif."
  },
  {
    icon: "document-text-outline",
    title: "Transparansi & Etika",
    desc: "Mengutamakan komunikasi terbuka dan menjalankan praktik hukum sesuai dengan kode etik dan standar profesional."
  },
  {
    icon: "stats-chart-outline",
    title: "Tingkat Keberhasilan Tinggi",
    desc: "Berbagai kasus kompleks telah diselesaikan secara efektif, menunjukkan rekam jejak yang dapat diandalkan."
  }
]
.map((item, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition duration-300 text-left"
        >
          <div className="text-primary mb-4">
            <ion-icon name={item.icon} size="large"></ion-icon>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<div className="md:px-10">
<section className="bg-secondary rounded-xl flex flex-col md:flex-row items-stretch justify-between gap-8 max-w-6xl mx-auto my-12 overflow-hidden">
  <div className="w-full md:w-1/2 h-full">
    <img
      src="konsultasi.jpg"
      alt="Courthouse"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
  <h2 className="text-2xl text-white font-semibold mb-4">
    Siap untuk <span className="text-primary">Melindungi</span> Masa Depan Anda? Mari <span className="text-primary">Bicara</span>
  </h2>
  <p className="text-gray-300 mb-6">
    Dalam sesi konsultasi, akan dibahas kebutuhan hukum Anda secara mendalam, memberikan jawaban atas pertanyaan yang ada, dan menyusun strategi yang jelas untuk menjaga kepentingan pribadi maupun usaha. 
    Ini adalah langkah awal menuju solusi yang tepat.
  </p>
  <button className="bg-primary max-w-max text-white px-6 py-2 rounded-full hover:bg-yellow-600">
    Jadwalkan Konsultasi Sekarang
  </button>
</div>

</section>
</div>

    </>
  );
}
