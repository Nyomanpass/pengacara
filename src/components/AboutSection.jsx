const AboutUsSection = () => {
    return (
      <section className="py-32 container bg-white" id="about">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          {/* Kiri - Teks utama */}
          <div className="md:col-span-1">
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
              We Are The Most Popular Law Firm With Various Law Services!
            </h2>
            <p className="text-sencondary mb-6">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum
            </p>
            <a href="/about" className="text-sencondary border border-primary px-4 py-3 rounded-md font-medium hover:bg-primary hover:text-white duration-300">
              Read More About us →
            </a>
          </div>
  
          {/* Tengah - Gambar */}
          <div className="md:col-span-1">
            <img
              src="about1.jpg" // ganti dengan path gambar kamu
              alt="Lawyer"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
  
          {/* Kanan - Kutipan */}
          <div className="md:col-span-1">
            <p className="text-gray-600 text-lg leading-relaxed italic mb-6">
              <span className="text-4xl font-serif text-gray-800">M</span>
              aecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero. Maecenas nec odio et ante tincidunt tempus. Donec vitae
              sapien libero.
            </p>
            <h4 className="text-gray-900 font-bold text-lg">Michel Jhon</h4>
            <p className="text-gray-500 text-sm mb-2">CEO of the company</p>
            <img src="/signature.png" alt="signature" className="w-32" />
          </div>
  
        </div>
      </section>
    );
  };
  
  export default AboutUsSection;
  