import hero1 from '/iklan.webp';

const ContactHeader = () => {
  return (
    <>
        <section
      className="relative h-[70vh] bg-no-repeat bg-[position:60%_center] md:bg-[position:center]"
      style={{
        backgroundImage: `url(${hero1})`,
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay Hitam */}
      <div className="absolute inset-0 bg-secondary bg-opacity-60"></div>

      <div className="relative z-10 container h-full items-center flex py-12">
        <div className='max-w-4xl'>
          <h1 className="text-white text-3xl mt-16 md:text-5xl font-bold mb-4">
            Siap Mendampingi <span className="text-primary">Langkah Hukum</span> Anda
          </h1>
          <p className="text-gray-200 max-w-3xl py-5 mb-6">
            Dapatkan pendampingan yang jelas dan terpercaya untuk setiap kebutuhan <br></br> hukum yang sedang dihadapi.
          </p>
        </div>
      </div>

    </section>
    <div className="container pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Sekarang</h2>
        <p className="text-gray-600 mb-6">
          Siap membantu menjawab pertanyaan atau kebutuhan hukum yang ingin didiskusikan lebih lanjut.
        </p>


          <div className="space-y-6">
            <div className="flex items-start space-x-4">
             
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">Jalan Sekar Tunjung XIII No.10A Gatot Subroto Timur Denpasar Bali Indonesia</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              
              <div>
                <h4 className="font-semibold text-gray-900">Phone Number</h4>
                <p className="text-gray-600">(+62) 821-5860-6679</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              
              <div>
                <h4 className="font-semibold text-gray-900">E-Mail</h4>
                <p className="text-gray-600">saliasmardy@yahoo.co.id</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="E-mail address"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactHeader