"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("trasparent");
  const [textColor, setTextColor] = useState("text-main-color-rc");
  const [shadowColor, setShadowColor] = useState("0px 0px 0px 0px transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 60) {
        setColor("#000");
        setTextColor("text-white");
        setShadowColor("0px 0px 40px 5px rgba(199,229,14,0.7)");
      } else {
        setColor("transparent");
        setTextColor("text-main-color-rc");
        setShadowColor("0px 0px 0px 0px transparent");
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}`, boxShadow: `${shadowColor}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-main-color-rc">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Helipuerto
          </h1>
        </Link>
        <ul className="hidden lg:flex ">
          <li className="p-5 hover:text-second-color-hl ">
            <Link href="/">Home</Link>
          </li>
          <li className="p-5 hover:text-second-color-hl">
            <Link href="/about">Sobre Nosotros</Link>
          </li>
          <li className="p-5 hover:text-second-color-hl">
            <Link href="/services">Servicios</Link>
          </li>
          <li className="p-5 hover:text-second-color-hl">
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
        {/* mobile Button */}

        <div onClick={handleNav} className="lg:hidden block z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-second-color-hl">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-second-color-hl">
              <Link href="/gallery">Sobre Nosotros</Link>
            </li>
            <li className="p-4 text-4xl hover:text-second-color-hl">
              <Link href="/portfolio">Servicios</Link>
            </li>
            <li className="p-4 text-4xl hover:text-second-color-hl">
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
