const Footer = () => {
    return (
      <>

        <div className="w-full h-48 lg:h-96 mb-2 mt-36">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7892.285838411072!2d115.26758909225468!3d-8.485481553141945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d5367e05a17%3A0xe3211f4061e3def0!2sNADIA%20art%20Shop!5e0!3m2!1sid!2sid!4v1731834336855!5m2!1sid!2sid&zoom=17"
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div> 


        <footer id="contact" className="bg-secondary text-gray-300 w-full pt-32 pb-14 ">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
              {/* Brand Section */}
              <div className="lg:w-1/4">
                <div className="flex items-center gap-3">
                  <img src="logo.png" alt="Logo" className="w-[40px]" />
                  <span className="text-xl font-bold font-serif text-white">Konsultan Hukum</span>
                  </div>
                <p className="text-sm">
                Setiap permasalahan hukum membutuhkan penanganan yang tepat dan bijaksana. Dapatkan pendampingan hukum yang terpercaya, profesional, dan berkomitmen penuh untuk menegakkan keadilan serta melindungi hak secara menyeluruh.
                </p>
                <div className="flex gap-4 mt-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </div>
              </div>
  
              {/* Links Section */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Tentang */}
                <div>
                  <h2 className="text-white font-semibold mb-2">Link Terkait</h2>
                  <ul className="text-sm space-y-1">
                    <li><a href="/#about" className="hover:underline">Home</a></li>
                    <li><a href="/#about" className="hover:underline">About</a></li>
                    <li><a href="/#team" className="hover:underline">Layanan</a></li>
                    <li><a href="/#testimoni" className="hover:underline">Contact</a></li>
                  </ul>
                </div>
  
                {/* Layanan */}
                <div>
                  <h2 className="text-white font-semibold mb-2">Layanan Hukum</h2>
                  <ul className="text-sm space-y-1">
                    <li><a href="/#layanan" className="hover:underline">Hukum Keluarga</a></li>
                    <li><a href="/#layanan" className="hover:underline">Hukum Perdata</a></li>
                    <li><a href="/#layanan" className="hover:underline">Hukum Pidana</a></li>
                    <li><a href="/#layanan" className="hover:underline">Sengketa Tanah</a></li>
                    <li><a href="/#layanan" className="hover:underline">Hukum Bisnis/Korporasi</a></li>
                  </ul>
                </div>
  
                {/* Informasi */}
                <div>
                  <h2 className="text-white font-semibold mb-2">Informasi</h2>
                  <ul className="text-sm space-y-1">
                    <li><a href="/blog" className="hover:underline">Artikel Hukum</a></li>
                    <li><a href="/faq" className="hover:underline">FAQ</a></li>
                  </ul>
                </div>
  
                {/* Kontak */}
                <div>
                  <h2 className="text-white font-semibold mb-2">Kontak Kami</h2>
                  <p className="text-sm">
                     Jalan Sekar Tunjung XIII No.10A Gatot Subroto Timur Denpasar Bali Indonesia
                  </p>
                  <p className="text-sm mt-2">
                    (+62) 821-5860-6679<br />
                    info@firmahukum.com
                  </p>
                </div>
              </div>
            </div>
  
            {/* Footer Bottom */}
            <div className="border-t border-gray-600 mt-10 pt-6 text-center">
              <p className="text-sm">
                &copy; 2025 Konsultan Hukum. Hak Cipta Dilindungi. |
                <a href="/privacy" className="hover:underline mx-1">Kebijakan Privasi</a> |
                <a href="/terms" className="hover:underline">Syarat & Ketentuan</a>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;
  