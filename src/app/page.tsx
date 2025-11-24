import { Navbar, Footer } from "@/components/layout";
import HomePageClient from "@/components/home/HomePageClient";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomePageClient />
      <Footer />
    </>
  );
}