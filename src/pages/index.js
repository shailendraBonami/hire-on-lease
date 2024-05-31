import Footer from "@/components/Footer";
import LetsConnect from "@/components/LetsConnect";
import NavBar from "@/components/NavBar";

export default function Home({ data }) {
  console.log(data, "name");
  return (
    <main>
      <NavBar />
    </main>
  );
}

export async function getServerSideProps() {
  const data = { name: "Hello" };
  console.log("e");
  return { props: { data } };
}
