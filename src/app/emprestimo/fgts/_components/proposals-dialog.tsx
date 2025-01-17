import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeftIcon, CircleCheckBigIcon } from "lucide-react"
import { LoanProposals } from "./loan-proposals"

interface ProposalsDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function ProposalsDialog({ isOpen, onOpenChange }: ProposalsDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-4xl p-0">
        <AlertDialogHeader className="px-6 pb-3 pt-1.5">
          <AlertDialogTitle className="sr-only">Propostas disponíveis</AlertDialogTitle>
        </AlertDialogHeader>
        <main className="px-3">
          <LoanProposals />
        </main>
        <Separator />
        <AlertDialogFooter className="pb-6 px-6 pt-3 gap-6">
          <AlertDialogCancel className="flex items-center gap-2 h-11 rounded-md text-slate-950 px-8 border-none hover:bg-border">
            <ArrowLeftIcon className="size-2/5" />
            Voltar
          </AlertDialogCancel>

          <Button type="button" size="lg" className="flex items-center gap-2">
            Contratar propostas
            <CircleCheckBigIcon />
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

