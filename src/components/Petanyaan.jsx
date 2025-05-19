import { useState } from 'react';

const faqData = [
  {
    question: "Bagaimana cara mencabut surat penangkapan (warrant)?",
    answer: "Untuk mencabut surat penangkapan, Anda harus mengajukan permohonan ke pengadilan atau lembaga penegak hukum dengan didampingi pengacara. Dalam beberapa kasus, negosiasi atau pembuktian tidak adanya bukti cukup dapat menjadi dasar pencabutan."
  },
  {
    question: "Apa yang harus saya lakukan jika dituduh melakukan tindak pidana?",
    answer: "Segera hubungi pengacara dan jangan memberikan keterangan kepada pihak berwajib tanpa pendampingan hukum. Hak Anda untuk diam dan didampingi pengacara dilindungi oleh hukum."
  },
  {
    question: "Bisakah saya menggugat balik dalam kasus perdata?",
    answer: "Ya, jika Anda memiliki bukti bahwa pihak lawan melakukan wanprestasi atau perbuatan melawan hukum, Anda dapat mengajukan gugatan balik (rekonvensi) dalam proses hukum yang sedang berjalan."
  },
  {
    question: "Apa itu mediasi dalam sengketa keluarga?",
    answer: "Mediasi adalah proses penyelesaian sengketa secara damai dengan bantuan pihak ketiga yang netral. Dalam kasus perceraian atau hak asuh, mediasi sering dianjurkan sebelum proses pengadilan."
  },
  {
    question: "Apakah tanah warisan bisa dijual jika belum dibagi?",
    answer: "Tanah warisan tidak dapat dijual sebelum dilakukan pembagian secara hukum kepada para ahli waris. Semua pihak yang berhak harus menyetujui proses jual-beli tersebut."
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
    <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
      Frequently Asked Questions
    </h2>
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
