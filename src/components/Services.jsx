export default function Services() {

  const practiceAreas = [
    {
      title: "Hukum Perdata",
      desc:
        "Kami menangani berbagai sengketa perdata, termasuk kasus wanprestasi (ingkar janji), perbuatan melawan hukum (PMH), gugatan utang-piutang, hingga konflik kepemilikan aset. Layanan kami mencakup pendampingan dalam proses mediasi maupun litigasi di pengadilan, dengan tujuan melindungi hak-hak hukum klien secara maksimal dan memperoleh penyelesaian yang adil serta sesuai hukum yang berlaku.",
      icon: "document-text-outline",
    },
    {
      title: "Hukum Pidana",
      desc:
        "Kami memberikan pendampingan hukum kepada tersangka, terdakwa, maupun korban dalam perkara pidana, mulai dari tahap penyelidikan hingga persidangan. Tim kami berpengalaman dalam kasus pidana umum, pidana khusus (seperti korupsi atau narkotika), serta peninjauan kembali. Kami memastikan bahwa proses hukum dijalani dengan perlindungan hak asasi manusia dan strategi hukum yang tepat.",
      icon: "shield-half-outline",
    },
    {
      title: "Hukum Keluarga",
      desc:
        "Kami membantu klien dalam berbagai persoalan hukum keluarga, seperti perceraian, perebutan hak asuh anak, pembagian harta bersama (gono-gini), hingga penyelesaian sengketa waris. Proses penanganan dilakukan secara bijaksana dan sensitif, dengan pendekatan mediasi maupun litigasi, demi menjaga kepentingan keluarga serta masa depan anak-anak yang terlibat.",
      icon: "people-outline",
    },
    {
      title: "Hukum Bisnis/Korporasi",
      desc:
        "Kami menyediakan layanan hukum menyeluruh bagi pelaku usaha dan korporasi, mulai dari pendirian badan usaha, penyusunan dan peninjauan kontrak, merger dan akuisisi, hingga kepatuhan terhadap regulasi bisnis. Kami juga membantu penyelesaian sengketa komersial melalui negosiasi, mediasi, arbitrase, atau proses litigasi apabila diperlukan. Fokus kami adalah menjaga kelangsungan bisnis Anda dengan perlindungan hukum yang kuat.",
      icon: "briefcase-outline",
    },
    {
      title: "Sengketa Tanah",
      desc:
        "Kami menangani konflik pertanahan yang kompleks, baik yang bersifat administratif (seperti sertifikat ganda atau hak atas tanah yang tumpang tindih) maupun yang memerlukan penyelesaian di pengadilan. Tim kami siap membantu klien dalam proses verifikasi legalitas dokumen tanah, pendampingan mediasi di BPN, hingga proses gugatan perdata atau pidana yang terkait dengan kepemilikan dan penggunaan tanah.",
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
            Professional Legal Services for Individuals & Families
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">
            Our law firm provides trusted legal counsel and representation for your personal, family, and civil matters.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Legal Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
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
    <section className="bg-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: "shield-checkmark-outline",
          title: "Komitmen Terhadap Keadilan",
          desc: "Kami menjunjung tinggi integritas dan berjuang demi hak serta kepentingan hukum klien secara maksimal."
        },
        {
          icon: "bulb-outline",
          title: "Pendekatan Hukum Strategis",
          desc: "Setiap kasus dianalisis mendalam untuk merancang strategi hukum yang efisien dan berdampak positif."
        },
        {
          icon: "document-text-outline",
          title: "Transparansi & Etika",
          desc: "Kami menjamin komunikasi terbuka dan menjalankan praktik hukum sesuai kode etik dan profesionalisme."
        },
        {
          icon: "stats-chart-outline",
          title: "Tingkat Keberhasilan Tinggi",
          desc: "Berbagai kasus kompleks berhasil kami menangkan, menunjukkan rekam jejak yang dapat diandalkan."
        }
      ].map((item, i) => (
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
      Ready To <span className="text-primary">Secure</span> Your Future? Let’s <span className="text-primary">Talk</span>
    </h2>
    <p className="text-gray-300 mb-6">
      During your consultation, we’ll discuss your unique needs, answer any questions,
      and outline a clear strategy to help protect and grow your business or legacy.
      Let’s take the first step together.
    </p>
    <button className="bg-primary max-w-max text-white px-6 py-2 rounded-full hover:bg-yellow-600">
      Schedule Your Consultation
    </button>
  </div>
</section>

    </>
  );
}
