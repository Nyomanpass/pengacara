const articles = [
    {
      category: "Design Inspiration",
      title: "How to make your interiors cooler and more stylish",
      excerpt: "Pellentesque etiam blandit in...",
      author: "Michaela Augus",
      date: "Friday, 1 April 2022",
      image: "blog2.jpg",
    },
    {
      category: "Tips and Trick",
      title: "Elements to add character to your space",
      excerpt: "Pellentesque etiam blandit in...",
      author: "Kim Gurameh",
      date: "Friday, 1 April 2022",
      image: "blog3.webp",
    },
    {
        category: "Tips and Trick",
        title: "Elements to add character to your space",
        excerpt: "Pellentesque etiam blandit in...",
        author: "Kim Gurameh",
        date: "Friday, 1 April 2022",
        image: "blog4.jpg",
      },
  ];
  
  export default function Blog() {
    return (
      <section className="py-24 container bg-white" id="article">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          The best furniture comes from Lalasia
        </h2>
        <p className="text-gray-600 mb-10">
          Pellentesque etiam blandit in tincidunt at donec.
        </p>
  
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main article on the left */}
          <div className="md:col-span-2 relative">
            <img
              src="blog1.jpg"
              alt="Main Article"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl text-white">
              <p className="text-sm">Tips and Trick</p>
              <h3 className="text-xl font-semibold">
                Create Cozy Dinning Room Vibes
              </h3>
              <p className="text-sm mt-2">
                Decorating with neutrals brings balance to the dining room...
              </p>
              <button className="mt-4 underline">Read More</button>
            </div>
  
           
          </div>
  
          {/* Article list on the right */}
          <div className="space-y-6">
            {articles.map((item, index) => (
              <div key={index} className="flex gap-4">
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
            ))}
          </div>
        </div>
      </section>
    );
  }
  