import check from "../assets/check.svg";
import gender from "../assets/gender.svg";
import telp from "../assets/telp.svg";

import centella from "../assets/centella.png";
import niacinamide from "../assets/niacinamide.png";
import aloe from "../assets/aloe.png";
import cucumicus from "../assets/cucumicus.png";
import vitamin from "../assets/vitamin.png";

import testimoni1 from "../assets/testimoni-1.jpeg";
import testimoni2 from "../assets/testimoni-2.jpeg";
import testimoni3 from "../assets/testimoni-3.jpeg";
import testimoni4 from "../assets/testimoni-4.jpeg";
import testimoni5 from "../assets/testimoni-5.jpeg";
import testimoni6 from "../assets/testimoni-6.jpeg";
import testimoni7 from "../assets/testimoni-7.jpeg";
import testimoni8 from "../assets/testimoni-8.jpeg";
import testimoni9 from "../assets/testimoni-9.jpeg";
import testimoni10 from "../assets/testimoni-10.jpeg";

import paketGlowing from "../assets/paket-glowing-skin.png";
import paketKorean from "../assets/paket-korean-glass.png";
import paketFull from "../assets/paket-full-booster.png";

import dayCream from "../assets/produk-day-cream.png";
import toner from "../assets/produk-toner.png";
import facialWash from "../assets/produk-facial-wash.png";
import serum from "../assets/produk-serum.png";
import nightCream from "../assets/produk-night-cream.png";
import mask from "../assets/produk-mask.png";

import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
interface NavLink {
  key: string;
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: "beranda", href: "/#beranda", label: "Beranda" },
  { key: "manfaat", href: "/#manfaat", label: "Manfaat" },
  { key: "keunggulan", href: "/#keunggulan", label: "Keunggulan" },
  { key: "bahan", href: "/#bahan", label: "Bahan" },
  { key: "testimoni", href: "/#testimoni", label: "Testimoni" },
  { key: "paket", href: "/#paket", label: "Paket" },
  { key: "produk", href: "/#produk", label: "Produk" },
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
    deskripsi: "Reglow hadir untuk pria dan wanita. Pengalaman kecantikan yang merata dan inklusif",
  },
  {
    img: telp,
    keunggulan: "Konsultasi Gratis",
    deskripsi:
      "Nikmati konsultasi gratis bersama tim kami untuk langkah terbaik menuju kulit yang sehat dan bersinar",
  },
];

interface Bahan {
  img: any;
  namaBahan: string;
}

export const BAHAN: Bahan[] = [
  { img: centella, namaBahan: "Centella Asiatica" },
  { img: niacinamide, namaBahan: "Niacinamide" },
  { img: aloe, namaBahan: "Aloe Vera Extract" },
  { img: cucumicus, namaBahan: "Cucumicus Sativus" },
  { img: vitamin, namaBahan: "Vitamin E" },
];

interface Testimoni {
  img: any;
  alt: string;
}

export const TESTIMONI: Testimoni[] = [
  { img: testimoni1.src, alt: "testimoni-1" },
  { img: testimoni2.src, alt: "testimoni-2" },
  { img: testimoni3.src, alt: "testimoni-3" },
  { img: testimoni4.src, alt: "testimoni-4" },
  { img: testimoni5.src, alt: "testimoni-5" },
  { img: testimoni6.src, alt: "testimoni-6" },
  { img: testimoni7.src, alt: "testimoni-7" },
  { img: testimoni8.src, alt: "testimoni-8" },
  { img: testimoni9.src, alt: "testimoni-9" },
  { img: testimoni10.src, alt: "testimoni-10" },
];

interface Paket {
  img: any;
  namaPaket: string;
  harga: string;
  produks: string[];
}

export const PAKET: Paket[] = [
  {
    img: paketGlowing,
    namaPaket: "Paket Glowing Skin Treatment",
    harga: "Rp265.000",
    produks: ["Day Cream", "2 in 1 Toner", "Facial Wash"],
  },
  {
    img: paketKorean,
    namaPaket: "Paket Korean Glass Skin",
    harga: "Rp355.000",
    produks: ["Day Cream", "2 in 1 Toner", "Facial Wash", "Whitening Serum"],
  },
  {
    img: paketFull,
    namaPaket: "Paket Full Booster Skin",
    harga: "Rp443.000",
    produks: ["Day Cream", "2 in 1 Toner", "Facial Wash", "Whitening Serum", "Night Cream"],
  },
];

interface Produk {
  img: any;
  produk: string;
  harga: string;
}

export const PRODUK: Produk[] = [
  { img: dayCream, produk: "Day Cream", harga: "Rp90.000" },
  { img: toner, produk: "2 in 1 Toner", harga: "Rp90.000" },
  { img: facialWash, produk: "Facial Wash", harga: "Rp85.000" },
  { img: serum, produk: "Whitening Serum", harga: "Rp90.000" },
  { img: nightCream, produk: "Night Cream", harga: "Rp88.000" },
  { img: mask, produk: "Sheet Mask", harga: "Rp19.000" },
];

interface Sosmed {
  img: any;
  alt: string;
  link: string;
}

export const SOSMED: Sosmed[] = [
  {
    img: instagram,
    alt: "Instagram Reglow Store Bali",
    link: "https://www.instagram.com/reglow.store.bali/",
  },
  { img: tiktok, alt: "Tiktok Reglow Store Bali", link: "https://www.tiktok.com/@reglowstorebali" },
];
