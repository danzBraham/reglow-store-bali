import { useState } from "react";
import { NAV_LINKS } from "../constants";
import logo from "../assets/logo.svg";
import whatsapp from "../assets/whatsapp.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsActive((currentState) => !currentState);
  };

  return (
    <header className="max-container w-full fixed bg-neutral-base/50 backdrop-blur-md">
      <nav
        className={`flex items-center py-4 justify-between px-5 lg:px-10 duration-300 ${
          isActive && "bg-main-base"
        }`}
      >
        <a href="/#beranda">
          <img src={logo.src} alt="Logo" className="w-[85px]" />
          <span className="sr-only">Go to Beranda</span>
        </a>
        <div
          className={`invisible opacity-0 duration-300 absolute lg:visible lg:static lg:opacity-100 left-0 right-0 min-h-fit rounded-b-xl py-10 w-full lg:w-fit top-[63px] bg-main-base px-5 lg:rounded-none lg:p-0 lg:bg-transparent ${
            isActive && "slide"
          }`}
        >
          <ul className="flex items-center justify-center gap-14 flex-col text-lg w-full text-medium lg:flex-row">
            {NAV_LINKS.map((link) => (
              <li key={link.key} onClick={handleClick}>
                <a href={link.href} className="links">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="w-full lg:w-fit">
              <a
                href="https://wa.me/6282135101372"
                target="_blank"
                className="flex gap-2 bg-accent-base py-3 px-5 w-full lg:w-fit items-center rounded-xl hover:bg-accent-300 lg:py-2 lg:bg-main-base lg:hover:bg-main-200"
              >
                <img
                  src={whatsapp.src}
                  alt="Whatsapp Logo"
                  className="w-[25px] absolute z-10 lg:static lg:z-0 lg:w-[20px]"
                />
                <p className="text-center w-full">Pesan</p>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="relative flex h-8 w-[35px] items-center justify-center lg:hidden"
          onClick={handleClick}
        >
          <button
            className={`absolute flex w-full flex-col items-end gap-2 ${
              isActive && "hamburger"
            }`}
          >
            <span className="block h-[3px] w-full origin-top-right rounded transition duration-300 ease-in-out bg-neutral-1000"></span>
            <span className="block h-[3px] w-full rounded transition duration-300 ease-in-out bg-neutral-1000"></span>
            <span className="block h-[3px] w-full origin-bottom-right rounded transition duration-300 ease-in-out bg-neutral-1000"></span>
          </button>
        </div>
      </nav>
      <div className="px-5 lg:px-10">
        <div className="mx-auto h-[3px] rounded-xl duration-300 bg-main-base w-full"></div>
      </div>
    </header>
  );
};

export default Header;
