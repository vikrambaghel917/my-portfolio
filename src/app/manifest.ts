import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vikram Baghel Portfolio",
    short_name: "Vikram Baghel",
    description:
      "Portfolio of Vikram Baghel, full stack developer building websites, web apps, mobile apps, and backend systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#060b14",
    theme_color: "#0ea5e9",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
