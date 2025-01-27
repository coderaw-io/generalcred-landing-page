import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { SimulationData } from "./_components/simulation";

export default function FgtsSimulationsProposalPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="bg-slate-100 size-full overflow-hidden">
        <main className="pt-16 md:pt-20">
          <SimulationData />
        </main>
      </div>
      <Footer />
    </div>
  )
}