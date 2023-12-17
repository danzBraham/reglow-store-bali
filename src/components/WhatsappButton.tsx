import { component$ } from "@builder.io/qwik";
import whatsappBlack from "../assets/whatsapp-black.svg";
import whatsappWhite from "../assets/whatsapp-white.svg";

interface Props {
  label: string;
  color: "white" | "black";
  font: "montserrat" | "garamond";
  size?: "small" | "default";
}

const whatsappIcon = {
  white: whatsappWhite.src,
  black: whatsappBlack.src,
};

const WhatsappButton = component$<Props>(
  ({ label = "Pesan", color, font, size = "default" }) => {
    return (
      <a
        href="https://wa.me/6285829125631"
        target="_blank"
        class={`flex w-full items-center gap-3 rounded-xl px-5 py-3 text-lg md:w-fit font-${font}
        ${size === "small" && "lg:py-2"}
        ${
          color === "white"
            ? "bg-accent-base text-neutral-base hover:bg-accent-300"
            : "bg-main-base hover:bg-main-200"
        }`}
      >
        <img
          src={whatsappIcon[color]}
          alt="Whatsapp Logo"
          class={`absolute z-10 w-[25px] md:static ${
            size === "small" && "lg:w-[20px]"
          }`}
        />
        <p class="w-full text-center">{label}</p>
      </a>
    );
  },
);

export default WhatsappButton;
