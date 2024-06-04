import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import LetsConnect from "@/components/LetsConnect";
import NavBar from "@/components/NavBar";

export default function Home({ data }) {
  console.log(data, "name");
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#EFEBED] to-[#F3F2FB]">
      <NavBar />
      <Banner label="About Us" breadCrumbLabel="About" imageUrl="/assets/aboutBanner.svg" />
      {/* <LetsConnect/> */}
    </main>
  );
}

export async function getServerSideProps() {
  const data = { name: "Hello" };
  console.log("e");
  return { props: { data } };
}
