const articles = [
    {
      category: "Politics",
      title: "PAW Disel Astawa Dinilai Langkahi Prosedur Partai",
      excerpt: "Wayan Disel Astawa menggugat PAW oleh PDIP Bali karena dinilai tak sesuai mekanisme...",
      author: "NusaBali",
      date: "Friday, 29 January 2016",
      image: "blog2.jpg",
      link:"https://www.nusabali.com/index.php/berita/4147/di-paw-disel-sebut-langkahi-mkp"
    },
    {
      category: "Politics",
      title: "Dua Saksi Adi Wiryatama Diperiksa Penyidik",
      excerpt: "Kuasa hukum Adi Wiryatama menghadirkan dua saksi terkait dugaan fitnah di Facebook...",
      author: "Nyoman Suarna",
      date: "Monday, 13 May 2019",
      image: "blog3.webp",
      link:"https://baliexpress.jawapos.com/bali/671143644/dua-saksi-adi-wiryatama-diperiksa-penyidik"
    },
    {
      category: "Politics",
      title: "Dihujat Lewat FB, Adi Wiryatama Lapor ke Polda Bali",
      excerpt: "Ketua DPRD Bali, Adi Wiryatama, melaporkan dua akun Facebook ke Polda Bali atas dugaan...",
      author: "NusaBali",
      date: "Wednesday, 8 May 2019",
      image: "blog4.jpg",
      link:"https://www.nusabali.com/berita/51774/dihujat-lewat-fb-adi-wiryatama-pun-lapor-ke-polda-bali"
      },
  ];
  
  export default function Blog() {
    return (
      <section className="py-24 container bg-white" id="article">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main article on the left */}
          <div className="md:col-span-2 relative">
            <img
              src="blog1.jpg"
              alt="Main Article"
              className="w-full md:h-full h-[300px] object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl text-white">
              <p className="text-sm">Politics</p>
              <h3 className="text-xl font-semibold">
              Lima Pengacara Dampingi Eka Wiryastuti di Persidangan
              </h3>
              <p className="text-sm mt-2">
              Didampingi lima pengacara dalam sidang kasus dugaan suap Dana Insentif Daerah (DID) di Pengadilan Tipikor Denpasar.
              </p>
              <a href="https://bali.tribunnews.com/2022/06/10/lima-pengacara-dampingi-eka-wiryastuti-di-persidangan" target="_blank" className="mt-4 underline">Selengkapnya</a>
            </div>
  
           
          </div>
  
          {/* Article list on the right */}
          <div className="space-y-6">
            {articles.map((item, index) => (
              <a href={item.link} key={index} target="_blank" className="mt-7 inline-block">
                <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{item.category}</p>
                    <h4 className="text-md font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{item.excerpt}</p>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    <span className="font-medium text-gray-800">
                      By {item.author}
                    </span>{" "}
                    · {item.date}
                  </p>
                </div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  