import React from 'react'

const Profile = () => {
  return (
    <>


    <section className="bg-white py-16">
  <div className="container py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Kiri: Teks dan statistik */}
    <div>
      <div className="mb-6 border-l-4 border-yellow-500 pl-4">
        <h2 className="text-3xl font-semibold text-gray-800 leading-tight">
          We are the leading firm in worldwide
        </h2>
      </div>
      <p className="text-lg font-medium text-gray-700 mb-2">
        Loyalty is very important to client
      </p>
      <p className="text-gray-500 mb-8">
        Kami adalah firma hukum independen dengan fokus pada keadilan, loyalitas klien, dan hasil yang nyata. 
        Dengan pengalaman lebih dari 20 tahun, kami telah menyelesaikan ratusan kasus dengan pendekatan profesional dan beretika.
      </p>

      <p className="text-gray-500 mb-8">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequuntur! Odio qui maiores, impedit labore recusandae animi harum soluta deleniti ipsum tempora eveniet commodi, necessitatibus, sapiente vero ducimus asperiores laboriosam.
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

<section className="flex container pb-28 flex-col md:flex-row items-center justify-between gap-8 bg-white">
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
        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
          Business-Driven Legal Expertise
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 leading-tight">
          Legal Expertise With Real-World Business Success
        </h2>
        <p className="text-gray-500 mb-8 mt-3">
          At Trusted Plan Lawyers, we combine legal knowledge with firsthand
          entrepreneurial experience. Our approach goes beyond standard legal
          advice—we deliver actionable strategies drawn from real achievements
          in business growth and management. Work with a partner who understands
          the challenges of building and protecting a business.
        </p>
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-yellow-700">
          Get Started
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
            <h2 className="text-3xl font-bold mb-12 tracking-tight">
                Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                {
                    title: "Integritas",
                    desc: "Kami menjunjung tinggi kejujuran dan tanggung jawab dalam setiap langkah hukum.",
                    icon: "shield-checkmark-outline",
                },
                {
                    title: "Empati",
                    desc: "Kami memahami klien sebagai manusia, bukan hanya kasus hukum.",
                    icon: "chatbubble-ellipses-outline",
                },
                {
                    title: "Kompetensi",
                    desc: "Pengacara kami terus mengembangkan keahlian di berbagai bidang hukum modern.",
                    icon: "school-outline",
                },
                ].map((item, idx) => (
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