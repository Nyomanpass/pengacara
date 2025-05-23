import hero1 from '/hero.jpg';

const AboutHeader = () => {
const items = [
  {
    icon: "ribbon", // ikon penghargaan, lebih bagus dari checkmark
    title: "Berpengalaman",
  },
  {
    icon: "shield-checkmark", // perlindungan dan kepercayaan
    title: "Komitmen pada Keadilan",
  },
  {
    icon: "chatbubbles", // tetap untuk konsultasi
    title: "Konsultasi Gratis",
  },
];


  return (
    <section
      className="relative h-[100vh] bg-no-repeat bg-[position:60%_center] md:bg-[position:center]"
      style={{
        backgroundImage: `url(${hero1})`,
        backgroundSize: 'cover',
      }}
      id="home"
    >
      {/* Overlay Hitam */}
      <div className="absolute inset-0 bg-secondary bg-opacity-70"></div>

      {/* Konten */}
      <div className="relative z-10 container h-full flex flex-col justify-center">
        {/* Judul & Tombol */}
        <div className='md:mt-0 mt-36'>
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Selalu Junjung <span className="text-primary">Keadilan</span> <br /> dalam Hukum
        </h1>
        <p className="text-gray-200 max-w-3xl py-5 mb-6">
          Setiap permasalahan hukum membutuhkan penanganan yang tepat dan bijaksana. 
          Dapatkan pendampingan hukum yang terpercaya, profesional, dan berkomitmen penuh untuk menegakkan keadilan serta melindungi hak secara menyeluruh.
        </p>

          <button className="bg-primary hover:bg-yellow-600 text-white px-5 py-2 rounded w-max">
            Free Consultation
          </button>
        </div>

        {/* Bagian Ikon */}
        <section className="w-full border-t md:absolute md:bottom-10 mt-10 md:mt-0 border-yellow-500/20 bg-transparent pt-10 px-4">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div key={index} className="flex gap-3 items-center text-white">
                <div className="border border-primary rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                  <ion-icon name={item.icon} class="text-primary text-2xl"></ion-icon>
                </div>
                <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </section>


      </div>
    </section>
  );
};

export default AboutHeader;
