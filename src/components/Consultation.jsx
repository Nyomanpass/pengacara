const Consultation = () => {
    return (
      <section className="container">
        <div className="container rounded-2xl bg-secondary py-16 px-6 text-center flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Kiri: Teks */}
          <div className="flex-1">
            <h2 className="text-lg text-white font-semibold mb-2">-- Konsultasi Hukum --</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Konsultasi Sekarang Bersama </h3>
            <p className="text-gray-300 mb-6 text-md">
              Butuh bantuan atau saran hukum? Siap memberikan solusi yang tepat dan profesional untuk permasalahan Anda.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Konsultasi Sekarang
            </button>
          </div>
  
          {/* Kanan: Placeholder (kosongkan atau bisa isi nanti) */}
         
        </div>
      </section>
    );
  };
  
  export default Consultation;
  