import { Carousel } from "@/widgets/carousel/ui/Carousel";
import { Navigation } from "@/widgets/navigation/ui/Navigation";
import { Footer } from "@/widgets/footer/ui/Footer";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Navigation />
      <Carousel />
      <Footer />
    </main>
  );
}
