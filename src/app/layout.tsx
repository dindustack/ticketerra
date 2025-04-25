import localFont from "next/font/local";

import "./globals.css";
import { Toaster } from "sonner";

const uniform = localFont({
  src: [
    {
      path: "../../public/fonts/Uniform-Rounded-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Uniform-Rounded-Ultra.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Uniform-Rounded-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Uniform-Rounded-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Uniform-Rounded.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-uniform",
  display: "swap",
});

const wagner = localFont({
  src: [
    {
      path: "../../public/fonts/Wagner.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-wagner",
  display: "swap",
});

export const metadata = {
  title: "Ticketerra",
  description: "Ticket management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${uniform.variable} ${wagner.variable}`}>
      <body className="font-uniform antialiased bg-[#f9f5f2] min-h-screen overflow-x-hidden m-0 p-0">
        <main>{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
