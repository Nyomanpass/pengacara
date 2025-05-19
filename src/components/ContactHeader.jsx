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

      {/* Konten */}
      <div className="relative z-10 container h-full flex flex-col justify-center py-12">
        {/* Judul & Tombol */}
        <div>
          <h1 className="text-white text-3xl mt-16 md:text-5xl font-bold mb-4">
            Always Respect <span className="text-primary">Justice</span> <br /> of The Law
          </h1>
          <p className="text-gray-200 max-w-3xl py-5 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>

      </div>
    </section>
    <div className="container pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
            accumsan eros, sit amet auctor nunc. Nullam ac purus.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex items-center bg-primary text-white justify-center w-10 h-10 rounded-full">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">London Eye, London, UK</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex items-center bg-primary text-white justify-center w-10 h-10 rounded-full">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone Number</h4>
                <p className="text-gray-600">+123-456-7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex items-center bg-primary text-white justify-center w-10 h-10 rounded-full">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">E-Mail</h4>
                <p className="text-gray-600">mailto@subx.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-900 mb-2">Follow Us:</h4>
            <div className="flex space-x-4">
              {['logo-facebook', 'logo-twitter', 'logo-youtube', 'logo-instagram'].map((icon, idx) => (
                <div key={idx} className="flex items-center bg-primary text-white justify-center w-10 h-10 rounded-full">
                  <ion-icon name={icon}></ion-icon>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send message</h2>
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