import { useEffect, useState } from 'react';
import hero1 from '/header1.jpg';
import hero2 from '/header2.jpg';
import hero3 from '/header3.jpg';
import hero4 from '/header4.jpg';


const images = [hero1, hero2, hero3, hero4];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 4000); // ganti gambar tiap 4 detik

    return () => clearInterval(interval); // bersihkan interval saat komponen unmount
  }, []);

  return (
    <section
    className="relative z-10 h-[80vh] bg-cover bg-center bg-no-repeat transition-all duration-1000"
    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    id="home"
  >
    {/* Gradien overlay kiri ke kanan */}
    <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 via-secondary/50 to-transparent" />
  
    {/* Konten di atas background */}
    <div className="relative z-20 flex h-full items-center container">
      <div className="text-white max-w-xl">
        <h1 className="text-4xl md:text-5xl  leading-tight mb-4">
          Our Independence <br /> Makes the Difference
        </h1>
        <p className="text-lg mb-6">
          Nationally Established. Internationally Recognized
        </p>
        <button className="bg-primary text-white font-semibold px-6 py-3 rounded shadow hover:bg-yellow-600 transition">
          Free Consultation
        </button>
      </div>
    </div>
  </section>
  
  );
};

export default Header;
