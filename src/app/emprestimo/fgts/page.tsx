import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import Carousel from "@/components/shared/carousel"
import { PersonalDataForm } from "./form"

export default function FgtsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000814] via-[#051923] to-slate-950">
      <Header />
      <PersonalDataForm />
      <Carousel />
      <Footer />
    </div>
  )
}