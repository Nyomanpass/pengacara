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
        <div
          className={`text-sm py-4 px-4 flex justify-between items-center text-white transition-colors duration-300 bg-secondary`}
        >
          <div className="container flex justify-between">
            <div className="flex gap-6">
              <span>Call Us: 548978478</span>
              <span>Email us: demo@example.com</span>
              <span>Pencara: Ni Nengah Saliani SM, MH.</span>
            </div>
            <div className="flex gap-4 text-base">
              {/* Ikon juga ikut berubah warna */}
              <ion-icon
                name="logo-facebook"
                class={"text-white"}
              ></ion-icon>
              <ion-icon
                name="logo-twitter"
                class={"text-white"}
              ></ion-icon>
              <ion-icon
                name="logo-linkedin"
                class={"text-white"}
              ></ion-icon>
            </div>
          </div>
        </div>

        <div className={`flex items-center justify-between container mx-auto px-4 duration-300 ${ headerActive ? "py-4 mt-0" : "py-0 mt-3"}`}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.webp" alt="Logo" className="w-[40px]" />
            <span className={`text-xl font-semibold transition-colors duration-300 ${
              headerActive ? "text-secondary" : "text-white"
            }`}>
              CARRERAS
            </span>
          </div>

          {/* Navigation */}
          <ul className={`hidden lg:flex gap-6 items-center font-medium transition-colors duration-300 ${
            headerActive ? "text-secondary" : "text-white"
          }`}>
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="hover:text-yellow-400">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>


          {/* Mobile toggle */}
          <div className="lg:hidden">
            <ion-icon
              name="menu"
              className={`text-3xl ${headerActive ? "text-yellow-600" : "text-gray-800"}`}
              onClick={() => setNavbarActive(true)}
            ></ion-icon>
          </div>
        </div>

        {/* Mobile menu */}
        {navbarActive && (
          <div className="lg:hidden bg-white shadow-lg rounded-xl py-4 px-6 absolute w-full left-0 top-full z-50">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map(({ name, href }, idx) => (
                <li key={idx}>
                  <a
                    href={href}
                    className="block py-2"
                    onClick={() => setNavbarActive(false)}
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="text-right">
                <ion-icon
                  name="close"
                  className="text-2xl"
                  onClick={() => setNavbarActive(false)}
                ></ion-icon>
              </li>
            </ul>
          </div>
        )}

      </header>
    </>
  );
}
