"use client"

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { useLoanProposals } from "@/hooks/use-loan-proposals-store";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function FgtsLoanProposalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { formData, loanProposals } = useLoanProposals();
  
  const router = useRouter();

  useLayoutEffect(() => {
    if (!formData || !loanProposals) {
      localStorage.clear();
      router.push("/");
    }
  }, [formData, loanProposals, router])

  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="bg-slate-100 size-full overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
}
