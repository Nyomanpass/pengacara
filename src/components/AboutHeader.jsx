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
    >
      {/* Overlay Hitam */}
      <div className="absolute inset-0 bg-secondary bg-opacity-70"></div>

      {/* Konten */}
      <div className="relative z-10 container h-full flex flex-col justify-center py-12">
        {/* Judul & Tombol */}
        <div>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Always Respect <span className="text-primary">Justice</span> <br /> of The Law
          </h1>
          <p className="text-gray-200 max-w-3xl py-5 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <button className="bg-primary hover:bg-yellow-600 text-white px-5 py-2 rounded w-max">
            Free Consultation
          </button>
        </div>

        {/* Bagian Ikon */}
        <section className="w-full  border-t border-yellow-500/20 flex justify-center absolute bottom-10 pt-10 bg-transparent">
          <div className="w-full flex justify-between items-center px-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-3 items-center text-white">
                <div className="border border-primary rounded-full w-14 h-14 flex items-center justify-center">
                  <ion-icon name={item.icon} class="text-primary text-2xl"></ion-icon>
                </div>
                <p className="font-semibold text-sm text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </section>


      </div>
    </section>
  );
};

export default AboutHeader;
