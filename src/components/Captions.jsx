import hero1 from '/hero.jpg';

const Captions = () => {
  return (
    <section
    className="relative h-[70vh] bg-no-repeat mt-32 bg-[position:60%_center] md:bg-[position:center]"
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
       
      </div>
      
    </div>
  </section>
  )
}

export default Captions