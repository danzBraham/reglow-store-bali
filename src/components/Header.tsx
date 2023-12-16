import { $, component$, useSignal } from "@builder.io/qwik";
import { NAV_LINKS } from "../constants";
import logo from "../assets/logo.svg";
import whatsappWhite from "../assets/whatsapp-white.svg";

const Header = component$(() => {
  const isActive = useSignal(false);

  const setIsActive = $(() => {
    if (window.innerWidth > 1024) {
      return;
    }
    isActive.value = !isActive.value;
  });

  return (
    <header class="w-full fixed bg-neutral-base/50 backdrop-blur-md z-50">
      <nav
        class={`max-container flex items-center py-2 lg:py-3 justify-between px-5 lg:px-10 duration-300 ${
          isActive.value && "bg-main-200"
        }`}
      >
        <a href="/#beranda">
          <img src={logo.src} alt="Logo" class="w-[85px]" />
          <span class="sr-only">Pergi ke Beranda</span>
        </a>
        <div
          class={`invisible opacity-0 duration-300 absolute lg:visible lg:static lg:opacity-100 left-0 right-0 min-h-fit rounded-b-xl py-10 w-full lg:w-fit top-[63px] bg-main-200 px-5 lg:rounded-none lg:p-0 lg:bg-transparent ${
            isActive.value && "slide"
          }`}
        >
          <ul class="flex items-center justify-center gap-10 flex-col text-lg w-full text-medium lg:flex-row lg:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.key} onClick$={setIsActive}>
                <a href={link.href} class="links py-[2px]">
                  {link.label}
                </a>
              </li>
            ))}
            <li class="w-full lg:w-fit">
              <a
                href="https://wa.me/6282135101372"
                target="_blank"
                class="flex gap-2 bg-accent-base py-3 px-5 w-full lg:w-fit items-center rounded-xl hover:bg-accent-300 lg:py-2"
              >
                <img
                  src={whatsappWhite.src}
                  alt="Whatsapp Logo"
                  class="w-[25px] absolute z-10 lg:static lg:z-0 lg:w-[20px]"
                />
                <p class="text-center w-full text-neutral-50">Pesan</p>
              </a>
            </li>
          </ul>
        </div>
        <div
          class="relative flex h-8 w-[35px] items-center justify-center lg:hidden"
          onClick$={setIsActive}
        >
          <button
            class={`absolute flex w-full flex-col items-end gap-2 ${
              isActive.value && "hamburger"
            }`}
          >
            <span class="block h-[3px] w-full origin-top-right rounded transition duration-300 ease-in-out bg-neutral-1000"></span>
            <span class="block h-[3px] w-full rounded transition duration-300 ease-in-out bg-neutral-1000"></span>
            <span class="block h-[3px] w-full origin-bottom-right rounded transition duration-300 ease-in-out bg-neutral-1000"></span>
          </button>
        </div>
      </nav>
      <div class="px-5 lg:px-10">
        <div class="mx-auto h-[3px] max-w-[1360px] rounded-xl duration-300 bg-main-base w-full"></div>
      </div>
    </header>
  );
});

export default Header;
