const Footer = () => {
    return (
      <>

        <div className="w-full h-48 lg:h-96 mb-2 mt-36">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5288.050220896805!2d115.24974691161626!3d-8.638933195994966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f3be47b93ff%3A0xcae67651f9eb2d8a!2sKonsultan%20Hukum%20-%20Ni%20Nengah%20Saliani%20SH%2C%20MH!5e0!3m2!1sen!2sid!4v1748917235955!5m2!1sen!2sid"
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div> 

      

        <footer id="contact" className="bg-secondary text-gray-300 w-full pt-24 pb-14 ">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
              {/* Brand Section */}
              <div className="lg:w-1/4">
                <div className="flex items-center gap-3">
                  <img src="logo.png" alt="Logo" className="w-[40px]" />
                  <span className="text-xl font-bold font-serif text-white">Konsultan Hukum</span>
                  </div>
                <p className="text-sm">
             Setiap permasalahan hukum membutuhkan penanganan yang tepat dan bijaksana. 
          Dapatkan advice dan pendampingan hukum yang terpercaya, profesional, dan berkomitmen penuh untuk menegakkan keadilan serta melindungi hak clien secara menyeluruh.
                </p>
              </div>
  
              {/* Links Section */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Tentang */}
                <div>
                  <h2 className="text-white font-semibold mb-2">Link Terkait</h2>
                  <ul className="text-sm space-y-1">
                    <li><a href="/#about" className="hover:underline">Home</a></li>
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
                    saliasmardy@yahoo.co.id
                  </p>
                </div>
                <div>
                  <img class="w-36 md:w-60" src="/logoaai.png" alt="" />
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
  