export default function Practicial() {
  const practiceAreas = [
    {
      title: "Hukum Perdata",
     desc: (
      <>
        <p className="font-medium text-gray-200">Permohonan:</p>
        <ul className="list-none space-y-1 text-gray-300 leading-relaxed">
          <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-yellow-400">
            Permohonan perubahan nama
          </li>
          <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-yellow-400">
            Permohonan pengangkatan anak
          </li>
          <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-yellow-400">
            Perceraian melalui Pengadilan Agama maupun Pengadilan Negeri
          </li>
        </ul>


        <p className="mt-4 font-medium text-gray-200">Sengketa Tanah:</p>
       <ul className="list-none space-y-1 text-gray-300 leading-relaxed">
          <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-yellow-400">Perbuatan melawan hukum</li>
          <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-yellow-400">Perbuatan wanprestasi</li>
        </ul>


        <p className="mt-4 text-gray-300">Baik secara Litigasi maupun Non Litigasi</p>
      </>
    ),

      icon: "document-text-outline",
    },
    {
      title: "Hukum Pidana",
      desc: (
        <>
          <p className="text-gray-300">Pendampingan klien sebagai Pelapor atau Terlapor</p>
          <p className="text-gray-300">Baik sebagai Tersangka maupun Terdakwa</p>
        </>
      ),
      icon: "shield-half-outline",
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
            Berbagai layanan hukum disediakan secara profesional untuk menangani permasalahan yang sedang dihadapi.
          </p>
          <img className="mt-10 rounded-xl shadow-md" 
               src="lawyerbali.jpg" 
               alt="Lawyer di Bali untuk konsultasi hukum dan bantuan advokat"
               title="Lawyer dan Pengacara Profesional di Bali – Konsultasi Hukum Terpercaya"
          />
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
                <div className="text-gray-400 text-sm leading-relaxed">
                  {area.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}