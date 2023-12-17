import { $, component$, useSignal } from "@builder.io/qwik";
import { NAV_LINKS } from "../constants";
import logo from "../assets/logo.svg";
import whatsappWhite from "../assets/whatsapp-white.svg";
import WhatsappButton from "./WhatsappButton.tsx";

const Header = component$(() => {
  const isActive = useSignal(false);

  const setIsActive = $(() => {
    if (window.innerWidth > 1024) {
      return;
    }
    isActive.value = !isActive.value;
  });

  return (
    <header class="fixed z-50 w-full bg-neutral-base/50 backdrop-blur-md">
      <nav
        class={`max-container flex items-center justify-between px-5 py-2 duration-300 lg:px-10 lg:py-3 ${
          isActive.value && "bg-main-200"
        }`}
      >
        <a href="/#beranda">
          <img src={logo.src} alt="Logo" class="w-[85px]" />
          <span class="sr-only">Pergi ke Beranda</span>
        </a>
        <div
          class={`invisible absolute left-0 right-0 top-[63px] min-h-fit w-full rounded-b-xl bg-main-200 px-5 py-10 opacity-0 duration-300 lg:visible lg:static lg:w-fit lg:rounded-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
            isActive.value && "slide"
          }`}
        >
          <ul class="text-medium flex w-full flex-col items-center justify-center gap-10 text-lg lg:flex-row lg:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.key} onClick$={setIsActive}>
                <a href={link.href} class="links py-[2px]">
                  {link.label}
                </a>
              </li>
            ))}
            <li class="w-full lg:w-fit">
              <WhatsappButton
                label="Pesan"
                color="white"
                font="garamond"
                size="small"
              />
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
            <span class="block h-[3px] w-full origin-top-right rounded bg-neutral-1000 transition duration-300 ease-in-out"></span>
            <span class="block h-[3px] w-full rounded bg-neutral-1000 transition duration-300 ease-in-out"></span>
            <span class="block h-[3px] w-full origin-bottom-right rounded bg-neutral-1000 transition duration-300 ease-in-out"></span>
          </button>
        </div>
      </nav>
      <div class="px-5 lg:px-10">
        <div class="mx-auto h-[3px] w-full max-w-[1360px] rounded-xl bg-main-base duration-300"></div>
      </div>
    </header>
  );
});

export default Header;
