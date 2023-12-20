import { useState } from "react";
import { NAV_LINKS } from "../constants";
import logo from "../assets/logo.svg";
import WhatsappButton from "./WhatsappButton.tsx";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (window.innerWidth > 1024) {
      return;
    }
    setIsActive((currentState) => !currentState);
  };

  return (
    <header className="fixed z-50 w-full bg-neutral-base/50 backdrop-blur-xl backdrop-filter">
      <nav className="max-container flex items-center justify-between px-5 py-2 duration-300 lg:px-10 lg:py-3">
        <a href="/#beranda">
          <img src={logo.src} alt="Logo" className="w-[85px]" />
          <span className="sr-only">Pergi ke Beranda</span>
        </a>
        <div
          className={`invisible absolute left-0 right-0 top-[63px] min-h-fit w-full rounded-b-xl bg-neutral-base/50 px-5 py-10 opacity-0 backdrop-blur-xl backdrop-filter duration-300 lg:visible lg:static lg:w-fit lg:rounded-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
            isActive && "slide border-b-[3px] border-t-[3px] border-main-base"
          }`}
        >
          <ul className="text-medium flex w-full flex-col items-center justify-center gap-10 text-lg lg:flex-row lg:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.key} onClick={handleClick}>
                <a href={link.href} className="links py-[2px]">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="w-full lg:w-fit">
              <WhatsappButton label="Pesan" color="white" font="garamond" size="small" />
            </li>
          </ul>
        </div>
        <div
          className="relative flex h-8 w-[35px] items-center justify-center lg:hidden"
          onClick={handleClick}
        >
          <button
            className={`absolute flex w-full flex-col items-end gap-2 ${isActive && "hamburger"}`}
          >
            <span className="block h-[3px] w-full origin-top-right rounded bg-neutral-1000 transition duration-300 ease-in-out"></span>
            <span className="block h-[3px] w-full rounded bg-neutral-1000 transition duration-300 ease-in-out"></span>
            <span className="block h-[3px] w-full origin-bottom-right rounded bg-neutral-1000 transition duration-300 ease-in-out"></span>
          </button>
        </div>
      </nav>
      <div className="px-5 lg:px-10">
        <div
          className={`mx-auto h-[3px] w-full max-w-[1360px] rounded-xl ${
            isActive || "bg-main-base"
          }  duration-300`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
