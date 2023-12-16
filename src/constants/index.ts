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
