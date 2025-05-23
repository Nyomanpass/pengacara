import { useState } from 'react';

const faqData = [
  {
    question: "Kapan sebaiknya menggunakan jasa pengacara?",
    answer: "Jasa pengacara sebaiknya digunakan sejak awal munculnya permasalahan hukum, baik dalam hal perdata, pidana, atau administrasi. Pendampingan sejak awal dapat mencegah kesalahan langkah dan memperkuat posisi hukum."
  },
  {
    question: "Apakah konsultasi hukum pertama dikenakan biaya?",
    answer: "Kebijakan terkait biaya konsultasi awal dapat berbeda-beda tergantung kebijakan kantor hukum. Sebagian memberikan konsultasi awal secara gratis, sementara lainnya menetapkan tarif tertentu."
  },
  {
    question: "Berapa lama proses hukum perdata biasanya berlangsung?",
    answer: "Proses hukum perdata dapat berlangsung antara 3 hingga 12 bulan, tergantung pada kompleksitas perkara, kelengkapan dokumen, dan respons dari pihak terkait."
  },
  {
    question: "Bagaimana cara mengurus legalisasi dokumen untuk keperluan luar negeri?",
    answer: "Legalisasi dokumen dilakukan melalui notaris, Kementerian Hukum dan HAM, dan Kementerian Luar Negeri, serta kedutaan negara tujuan jika diperlukan. Proses ini memastikan dokumen sah secara internasional."
  },
  {
    question: "Apakah warga negara asing bisa menggunakan layanan hukum di Indonesia?",
    answer: "Ya, warga negara asing berhak mendapatkan pendampingan hukum di Indonesia. Layanan hukum tersedia dalam bahasa Inggris untuk memfasilitasi komunikasi yang lebih baik."
  },
  {
    question: "Apakah hasil konsultasi hukum bersifat rahasia?",
    answer: "Ya. Setiap informasi yang disampaikan oleh klien bersifat rahasia dan dilindungi oleh kode etik profesi advokat."
  }
];


export default function Pertanyaan() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
  <section className="bg-gray-50 py-20">
  <div className="container mx-auto px-6 lg:px-20">
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl border ${
            openIndex === index ? "bg-white shadow-md" : "bg-white/80"
          } transition-all duration-300`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-5 text-left text-gray-800 font-medium focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <ion-icon
                name="help-circle-outline"
                className="text-xl text-primary"
              ></ion-icon>
              <span>{item.question}</span>
            </div>
            <ion-icon
              name={openIndex === index ? "chevron-up-outline" : "chevron-down-outline"}
              className="text-xl text-gray-500"
            ></ion-icon>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5 py-4 text-gray-600 border-t border-gray-200">
              {item.answer}
            </div>
          )}
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
