import { useState, useEffect } from "react";

export default function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY >= 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          headerActive ? "bg-white shadow-md" : ""
        }`}
      >
       <div className="text-sm py-4 px-4 text-white transition-colors duration-300 bg-secondary">
        <div className="container mx-auto flex justify-between gap-4">
          
          {/* Kontak Info */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center">
            <span className="hidden md:block">(+62) 821-5860-6679</span>
            <span className="hidden md:block">saliasmardy@yahoo.co.id</span>
            <span>Ni Nengah Saliani, SH, MH.</span>
          </div>        
        </div>
      </div>


        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={headerActive ? "logo.png" : "logo.png"} alt="Logo" className="md:w-[50px] w-[50px] duration-500" />
                <h1 className={`font-semibold text-xl ${headerActive ? "text-secondary" : "text-white"}`}>Konsultan Hukum</h1>
            </div>
            {/* Navbar */}
            <div
              className={`navbar z-30 absolute lg:static lg:w-auto duration-500 left-0 ${
                navbarActive ? "top-0" : "top-[-1000%]"
              } w-full px-[1rem] lg:px-0 py-4 lg:py-0 h-[55vh] lg:h-auto shadow-lg lg:shadow-none bg-white lg:bg-transparent`}
            >
              <div className="flex items-center gap-3 lg:hidden">
                <img src="logo.png" alt="" className="w-[50px]" />
                <h1 className={`font-semibold text-xl text-secondary`}>Konsultan Hukum</h1>
              </div>
              <ul className={`flex px-3 ${headerActive ? 'text-night' : 'lg:text-white'}  lg:px-0 flex-col lg:flex-row gap-7 mt-11 lg:mt-0`}>
                {[
                  { name: "Home", href: "/" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="duration-300 nav-link"
                  >
                    <a href={item.href} onClick={() => setNavbarActive(false)}>
                      {item.name}
                    </a>
                  </li>
                ))}
            
              </ul>
              {/* Tombol Close */}
              <div className="lg:hidden mt-1 absolute top-5 right-4">
              <ion-icon
                name="close"
                className="text-[2rem] md:text-4xl nav-close"
                onClick={() => setNavbarActive(false)}
                ></ion-icon>

              </div>
            </div>
            {/* Tombol Menu */}
            <div className={`${headerActive ? 'text-night' : 'text-white'} lg:hidden mt-1 duration-500`}>
              <ion-icon
                name="menu"
                className="text-[2rem] md:text-4xl nav-menu"
                onClick={() => setNavbarActive(true)}
              ></ion-icon>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
