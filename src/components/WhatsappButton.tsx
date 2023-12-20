import whatsappBlack from "../assets/whatsapp-black.svg";
import whatsappWhite from "../assets/whatsapp-white.svg";

interface WhatsappButtonProps {
  label: string;
  color: "white" | "black";
  font: "montserrat" | "garamond";
  size?: "small" | "default";
  width?: "fit" | "full";
}

const whatsappIcon = {
  white: whatsappWhite.src,
  black: whatsappBlack.src,
};

const WhatsappButton = ({
  label = "Pesan",
  color,
  font,
  size = "default",
  width = "fit",
}: WhatsappButtonProps) => {
  return (
    <a
      href="https://wa.me/6285829125631"
      target="_blank"
      className={`flex w-full items-center gap-3 rounded-xl px-5 py-3 text-lg  font-${font}
        ${width === "fit" ? "md:w-fit" : "md:w-full"}
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
        className={`absolute z-10 w-[25px] ${width === "fit" && "md:static"}  ${
          size === "small" && "lg:w-[20px]"
        }`}
      />
      <p className="w-full text-center">{label}</p>
    </a>
  );
};

export default WhatsappButton;
