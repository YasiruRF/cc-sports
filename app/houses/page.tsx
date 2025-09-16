import { Header } from "@/components/header";
import { HousesSection } from "../../components/houses-section";
import { Footer } from "@/components/footer";

export default async function HousesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="pt-20">
          {await HousesSection()}
        </div>
      </main>
      <Footer />
    </div>
  );
}
