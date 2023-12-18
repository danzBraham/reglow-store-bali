import check from "../assets/check.svg";
import gender from "../assets/gender.svg";
import telp from "../assets/telp.svg";

interface NavLink {
  key: string;
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: "beranda", href: "#beranda", label: "Beranda" },
  { key: "manfaat", href: "#manfaat", label: "Manfaat" },
  { key: "keunggulan", href: "#keunggulan", label: "Keunggulan" },
  { key: "bahan", href: "#bahan", label: "Bahan" },
  { key: "testimoni", href: "#testimoni", label: "Testimoni" },
  { key: "paket", href: "#paket", label: "Paket" },
];

interface Manfaat {
  no: number;
  manfaat: string;
}

export const MANFAAT: Manfaat[] = [
  { no: 1, manfaat: "Mengatasi masalah jerawat dan kemerahan" },
  { no: 2, manfaat: "Menyamarkan kekusaman kulit" },
  { no: 3, manfaat: "Menjaga kelembaban kulit" },
  { no: 4, manfaat: "Membuat kulit tampak lebih muda" },
  { no: 5, manfaat: "Produk yang cocok untuk kulit sensitif tanpa iritasi" },
];

interface Keunggulan {
  img: any;
  keunggulan: string;
  deskripsi: string;
}

export const KEUNGGULAN: Keunggulan[] = [
  {
    img: check,
    keunggulan: "Tersertifikasi BPOM",
    deskripsi:
      "Terjamin keamanannya dengan sertifikasi resmi BPOM. Keputusan bijak untuk kulit sehat dan terawat",
  },
  {
    img: gender,
    keunggulan: "Bisa untuk Pria dan Wanita",
    deskripsi:
      "Reglow hadir untuk pria dan wanita. Pengalaman kecantikan yang merata dan inklusif",
  },
  {
    img: telp,
    keunggulan: "Konsultasi Gratis",
    deskripsi:
      "Nikmati konsultasi gratis bersama tim kami untuk langkah terbaik menuju kulit yang sehat dan bersinar",
  },
];
