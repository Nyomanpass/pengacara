
const images = [
  'galery1.jpg',
  'galery11.jpg',
  'galery12.jpeg',
  'galery3.jpg',
  'header3.jpg',
];

const Galery = () => {
  return (
    <div className="bg-white py-32 pb-10 px-4">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Galeri Kegiatan</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dokumentasi berbagai aktivitas yang mencerminkan komitmen dalam memberikan layanan hukum secara profesional dan terpercaya.
        </p>



        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg break-inside-avoid">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galery;
