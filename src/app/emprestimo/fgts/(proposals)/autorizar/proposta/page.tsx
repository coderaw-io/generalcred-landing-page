import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { AuthorizationSection } from "./_components/authorization-section";

export default function FgtsRegisterProposalPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="bg-slate-100 size-full overflow-hidden">
        <main className="w-full py-6 mt-12 sm:py-10 md:py-12 lg:py-16 lg:max-w-8xl lg:mx-auto lg:w-full xl:mt-20">
          <AuthorizationSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}