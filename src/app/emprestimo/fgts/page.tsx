import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
<<<<<<< HEAD
import Carousel from "@/components/shared/carousel"
import { PersonalDataForm } from "./form"
=======
import { PersonalDataForm } from "./_components/form"
>>>>>>> 806568b057158d029af20298d7d5396fce7b5a42

export default function FgtsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000814] via-[#051923] to-slate-950">
      <Header />
<<<<<<< HEAD
      <PersonalDataForm />
      <Carousel />
=======
      <main className="pt-12 md:pt-16">
        <PersonalDataForm />
      </main>
>>>>>>> 806568b057158d029af20298d7d5396fce7b5a42
      <Footer />
    </div>
  )
}