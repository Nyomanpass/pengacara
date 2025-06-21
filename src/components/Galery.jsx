const Galery = () => {
  return (
    <div className="bg-white py-32 pb-10 px-4">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Galeri Kegiatan</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dokumentasi berbagai aktivitas yang mencerminkan komitmen dalam memberikan layanan hukum secara profesional dan terpercaya.
        </p>



        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          
            <div className="overflow-hidden rounded-lg break-inside-avoid">
              <img
                src="pengacara-konsultasi-bali.jpg"
                alt="Konsultasi dengan pengacara berpengalaman di Bali"
                title="Konsultasi Hukum dengan Pengacara dan Lawyer Profesional di Bali"
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-lg break-inside-avoid">
              <img
                src="jasa-advokat-bali.jpg"
                  alt="Jasa advokat hukum perdata di Bali untuk penyelesaian sengketa"
                  title="Jasa Advokat Bali untuk Kasus Hukum Perdata"
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-lg break-inside-avoid">
              <img
                src="pengacara-lawyer-bali.jpg"
                alt="Pengacara dan lawyer di Bali memberikan layanan hukum"
                title="Pengacara & Lawyer di Bali untuk Konsultasi Hukum"
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-lg break-inside-avoid">
              <img
                src="advokat-bali.jpg"
                alt="Pengacara dan lawyer di Bali memberikan layanan hukum"
                title="Pengacara & Lawyer di Bali untuk Konsultasi Hukum"
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-lg break-inside-avoid">
              <img
                src="kantor-pengacara-bali.jpeg"
                alt="Kantor jasa pengacara dan lawyer di Bali"
                title="Kantor Jasa Pengacara & Lawyer di Bali"
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Galery;
