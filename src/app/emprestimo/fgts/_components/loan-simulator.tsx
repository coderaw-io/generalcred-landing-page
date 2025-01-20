"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { maskMoney } from "@/utils/mask-money"
import { AlertCircle, MinusIcon, PlusIcon } from "lucide-react"
import { useState } from "react"

export function LoanSimulator() {
  const [balance, setBalance] = useState(1000)

  const incrementBalance = () => setBalance((prev) => prev + 500)
  const decrementBalance = () => setBalance((prev) => Math.max(0, prev - 500))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d,]/g, "").replace(",", ".")
    const numericValue = parseFloat(rawValue) || 0
    setBalance(numericValue)
  }

  return (
    <div className="w-full max-w-lg p-4 space-y-6">
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mt-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-10 rounded-full"
              onClick={decrementBalance}
            >
              <MinusIcon className="size-4" />
            </Button>

            <div className="relative flex-1">
              <Input
                type="text"
                className="h-12"
                inputMode="numeric"
                value={maskMoney(balance.toFixed(2).replace(".", ""))}
                onChange={handleChange}
              />
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-10 rounded-full"
              onClick={incrementBalance}
            >
              <PlusIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <Card className="p-4 bg-gray-100 border-none">
        <div className="flex gap-2">
          <AlertCircle className="h-5 w-5 text-primary-gold flex-shrink-0" />
          <div>
            <p className="font-medium text-primary-gold">
              Simulação com valores aproximados
            </p>
            <p className="text-sm text-slate-950">
              Para saber as condições exatas de taxas e valores liberados para você clique {" "}
              no botão &quot;Ver Proposta&quot;.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

