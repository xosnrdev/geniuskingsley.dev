import localFont from "next/font/local";

export const almarena = localFont({
  src: [
    {
      path: "./almarena-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./almarena-light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./almarena-bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});
