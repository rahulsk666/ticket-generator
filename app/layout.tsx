import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket Generator",
  description: "Generate ticket from form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} antialiased`}>
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <Image
            src={"pattern-lines.svg"}
            alt="pattern-lines"
            width={300}
            height={300}
            className="w-full h-fit top-0"
          />
          <Image
            src={"pattern-squiggly-line-top.svg"}
            alt="pattern-squiggly-line-top"
            width={300}
            height={300}
            className="w-[28%] h-[10%] md:h-[28%]  absolute top-1 right-3 md:top-9 md:right-6"
          />
          <Image
            src={"pattern-circle.svg"}
            alt="pattern-circle-1"
            width={300}
            height={300}
            className="w-[12%] h-[28%] md:h-[28%]  absolute top-1 left-3 md:-top-25 md:left-10"
          />
          <Image
            src={"pattern-circle.svg"}
            alt="pattern-circle-2"
            width={300}
            height={300}
            className="w-[20%] h-[20%] absolute right-28 bottom-59 md:right-38 lg:right-78"
          />
          <Image
            src={"pattern-squiggly-line-bottom-desktop.svg"}
            alt="pattern-squiggly-line-bottom-desktop"
            width={300}
            height={300}
            className="lg:bottom-0 lg:left-0 absolute lg:w-[60%] lg:block hidden"
          />
          <Image
            src={"pattern-squiggly-line-bottom-mobile-tablet.svg"}
            alt="pattern-squiggly-line-bottom-mobile-tablet"
            width={300}
            height={300}
            className="bottom-0 left-0 absolute w-[60%] lg:hidden"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
