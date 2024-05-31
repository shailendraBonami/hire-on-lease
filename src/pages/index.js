import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import LetsConnect from "@/components/LetsConnect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      Hello
      <LetsConnect/>
      <Footer/>
    </main>
  );
}
