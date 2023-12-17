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
