const AboutUsSection = () => {
    return (
      <section className="py-32 container bg-white" id="about">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          
          {/* Kiri - Teks utama */}
          <div className="md:col-span-1">
            
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-8">
            Mengutamakan Keadilan dalam Setiap Menangani Perkara
            </h2>
            {/* <p className="text-sencondary mb-6">
            Sebagai advokat berpengalaman, saya bersama tim memberikan pendampingan hukum yang profesional, 
            terpercaya, dan berintegritas tinggi. Membantu Anda menghadapi berbagai 
            persoalan hukum secara bijaksana dan tuntas.
            </p> */}



          </div>
  
          {/* Tengah - Gambar */}
          <div className="md:col-span-1">
            <img
              src="lawyer-di-bali.jpg" // ganti dengan path gambar kamu
              alt="Pengacara dan Advokat Profesional di Bali untuk Konsultasi Hukum"
              title="Jasa Pengacara dan Advokat Bali"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
  
          {/* Kanan - Kutipan */}
          <div className="md:col-span-1">
            <p className="text-gray-600 text-lg leading-relaxed italic mb-6">
            <span className="text-2xl font-serif text-secondary">S</span>aya, Ni Nengah Saliani, S.H., M.H., adalah seorang advokat & konsultan hukum
  yang memiliki komitmen dan berintegritas serta konsisten dalam menangani setiap perkara yang di butuhkan oleh pencari keadilan. 
  Dengan pengalaman dalam menangani berbagai perkara pidana maupun perdata, saya percaya bahwa setiap orang 
  berhak mendapatkan keadilan.
            </p>
            
          </div>
  
        </div>
      </section>
    );
  };
  
  export default AboutUsSection;
  