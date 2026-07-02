// import {
//   JetBrains_Mono,
//   Plus_Jakarta_Sans,
//   Space_Grotesk,
// } from "next/font/google";

// export const appSans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-app-sans",
// });

// export const appHeading = Space_Grotesk({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-app-heading",
// });

// export const appMono = JetBrains_Mono({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-app-mono",
// });

import { Roboto } from "next/font/google";

export const appSans = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-app-sans",
});

export const appHeading = appSans;
export const appMono = appSans;