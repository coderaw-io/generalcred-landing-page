import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ShieldCheckIcon } from "lucide-react"

export function Header() {
  return (
    <nav className="w-full bg-gradient-to-r from-[#000814] via-[#051923] to-slate-950">
      <div className="max-w-8xl w-full mx-auto flex items-center justify-between ">
        <Link href="/" className="w-32 flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Generalcred Logo"
            className="w-[80%]"
            width={400}
            height={400}
          />
        </Link>

        <div className="flex items-center space-x-12">
          <Link href="/">
            <Button type="button" variant="outline" className="py-4 px-6">
              Página inicial
            </Button>
          </Link>

          <div className="flex items-center space-x-2">
            <p className="text-white">
              Site seguro
            </p>
            <ShieldCheckIcon className="text-emerald-500 size-6" />
          </div>
        </div>
      </div>
    </nav>
  )
}

