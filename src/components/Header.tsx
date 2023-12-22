import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import logo from "../assets/logo.svg";
import WhatsappButton from "./WhatsappButton.tsx";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    if (window.innerWidth > 1024) {
      return;
    }
    setIsActive((currentState) => !currentState);
  };

  useEffect(() => {
    window.document.documentElement.style.setProperty("scroll-padding", `25px`);
  }, []);

  return (
    <header className="fixed z-50 w-full bg-neutral-base/50 backdrop-blur-xl backdrop-filter">
      <nav
        className={`max-container flex items-center justify-between px-5 py-2 duration-300 xl:px-10 xl:py-3 ${
          isActive && "bg-main-200"
        }`}
      >
        <a href="/#beranda">
          <img src={logo.src} alt="Logo" className="w-[85px]" />
          <span className="sr-only">Pergi ke Beranda</span>
        </a>
        <div
          className={`invisible absolute left-0 right-0 top-[63px] z-40 min-h-dvh w-full rounded-b-xl bg-main-200 px-5 py-10 opacity-0 duration-300 xl:visible xl:static xl:min-h-fit xl:w-fit xl:rounded-none xl:bg-transparent xl:p-0 xl:opacity-100 ${
            isActive && "slide"
          }`}
        >
          <ul className="text-medium flex h-full w-full flex-col items-center justify-center gap-10 text-xl xl:flex-row xl:gap-12">
            {NAV_LINKS.map(({ key, href, label }) => (
              <li key={key} onClick={handleClick}>
                <a href={href} title={label} className="links py-[2px]">
                  {label}
                </a>
              </li>
            ))}
            <li className="flex w-full justify-center xl:w-fit">
              <WhatsappButton
                label="Pesan"
                color="white"
                font="garamond"
                size="small"
                width="fit"
              />
            </li>
          </ul>
        </div>
        <div
          className="relative flex h-8 w-[35px] items-center justify-center xl:hidden"
          onClick={handleClick}
        >
          <button
            aria-label="Toggle Menu"
            className={`absolute flex w-full flex-col items-end gap-2 ${isActive && "hamburger"}`}
          >
            <span className="block h-[3px] w-full origin-top-right rounded bg-neutral-1000 transition duration-300 ease-in-out"></span>
            <span className="block h-[3px] w-full rounded bg-neutral-1000 transition duration-300 ease-in-out"></span>
            <span className="block h-[3px] w-full origin-bottom-right rounded bg-neutral-1000 transition duration-300 ease-in-out"></span>
          </button>
        </div>
      </nav>
      <div className="px-5 xl:px-10">
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
