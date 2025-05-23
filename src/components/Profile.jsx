import React from 'react'

const Profile = () => {
  return (
    <>


    <section className="bg-white py-16">
  <div className="container py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
{/* Kiri: Teks dan statistik */}
<div>
  <div className="mb-6 border-l-4 border-yellow-500 pl-4">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight">
    Pengabdian hukum dengan integritas dan tanggung jawab.
    </h2>
  </div>


  <p className="text-gray-500 mb-6">
    Berdiri di atas prinsip keadilan dan profesionalisme, menyelesaikan berbagai perkara hukum — dari persoalan keluarga, perdata, hingga pidana dan sengketa properti.
  </p>

  <p className="text-gray-500 mb-6">
    Dengan pengalaman lebih dari 15 tahun di dunia hukum, setiap klien mendapatkan pendampingan menyeluruh dan strategi hukum yang disesuaikan. Setiap kasus ditangani secara etis, transparan, dan dengan komitmen penuh untuk melindungi hak serta kepentingan hukum klien.
  </p>

  <p className="text-gray-500 mb-6">
    Tidak hanya fokus pada penyelesaian sengketa, tetapi juga memberikan edukasi dan pencegahan hukum, agar masyarakat lebih sadar hukum dan mampu mengambil keputusan yang tepat secara legal.
  </p>
</div>


    {/* Kanan: Gambar */}
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <img
          src="galery3.jpg"
          alt="Law Office"
          className="rounded-lg shadow-lg object-cover h-full w-full"
        />
        <img
          src="about1.jpg"
          alt="Court Gavel"
          className="rounded-lg shadow-lg object-cover h-64 w-full mt-6"
        />
      </div>
      {/* Background dot pattern bisa pakai SVG atau skip untuk versi pertama */}
    </div>
  </div>
</section>

<section className="grid container pb-28 md:grid-cols-2 grid-cols-1 items-center justify-between gap-8 bg-white">
      {/* Left Side Images and Stats */}
      <div className="grid grid-cols-2 gap-4 max-w-lg">
        <img
          src="galery6.jpg"
          alt="Gavel"
          className="rounded-xl shadow-md object-cover w-full h-40"
        />
        <div className="bg-secondary text-white flex items-center justify-center p-4 rounded-xl shadow-md text-center">
          <div>
            <div className="text-sm mb-2 font-semibold">$20M</div>
            <div className="text-xs">revenue growth from startup to acquisition</div>
          </div>
        </div>
    
        <div className="bg-primary text-white flex items-center justify-center p-4 rounded-xl shadow-md text-center">
          <div>
            <div className="text-xl font-bold">12+ years</div>
            <div className="text-xs">of combined legal and entrepreneurial experience</div>
          </div>
        </div>
        <img
          src="header4.jpg"
          alt="Lawyer in Court"
          className="col-span-1 rounded-xl shadow-md object-cover w-full h-40"
        />
      </div>

      {/* Right Side Text */}
      <div className="max-w-xl">

  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight">
    Pendampingan Hukum Tanpa Batas Bahasa dan Wilayah
  </h2>
  <p className="text-gray-500 mb-8 mt-3">
    Proses hukum di Indonesia sering kali melibatkan kendala bahasa bagi warga negara asing atau ekspatriat. Dengan kemampuan komunikasi dalam bahasa Inggris, berbagai layanan hukum seperti perkara perdata, pertanahan, warisan, hingga perizinan usaha dapat diakses lebih mudah dan jelas.
    <br /><br />
    Pendampingan hukum yang dapat menjembatani perbedaan budaya dan sistem hukum, tanpa kehilangan esensi keadilan di Indonesia.
  </p>
  <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition">
    Konsultasi Sekarang
  </button>
</div>

    </section>

    <section
        className="relative bg-cover bg-center bg-no-repeat py-28"
        style={{
            backgroundImage: "url('headerabout.jpg')", // Ganti dengan path gambar kamu
        }}
        >
        {/* Overlay gelap agar teks tetap terlihat */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="relative container mx-auto max-w-5xl text-center px-4 text-white">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container">
                {[
  {
    title: "Integritas",
    desc: "Setiap tindakan hukum dijalankan dengan kejujuran, tanggung jawab, dan komitmen terhadap etika.",
    icon: "shield-checkmark-outline",
  },
  {
    title: "Empati",
    desc: "Pendekatan yang memanusiakan klien, dengan mendengarkan dan memahami setiap latar belakang permasalahan.",
    icon: "chatbubble-ellipses-outline",
  },
  {
    title: "Kompetensi",
    desc: "Keahlian hukum terus diasah untuk menghadapi tantangan hukum modern dan kebutuhan klien yang beragam.",
    icon: "school-outline",
  },
]
.map((item, idx) => (
                <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-white/20"
                >
                    <div className="text-4xl mb-3 text-primary">
                    <ion-icon name={item.icon}></ion-icon>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                </div>
                ))}
            </div>
        </div>

        </section>



</>
  
  )
}

export default Profile