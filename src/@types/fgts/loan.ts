export interface FgtsBalanceRequest {
  cpf: string
  installments: number
  rate: number
}

export interface FgtsBalanceResponse {
  fgtsTables: FgtsTable[]
}

export interface FgtsTable {
  product_id: string
  table_name: string
  response: FgtsBalance
}

export interface FgtsBalance {
  id: string
  calculateByValueType: string
  requestedAmount: number
  initialValue: number
  liquidValue: number
  monthlyInterest: number
  yearlyInterest: number
  startDate: string
  dueDate: string
  comm: number
  efectiveCommissions: EfectiveCommission[]
  commTc: number
  commNonTc: number
  agentCommissions: AgentCommission[]
  finTax: number
  effectiveMonthlyCost: number
  effectiveYearlyCost: number
  registrationNumber: string
  termInMonths: number
  numberOfPayments: number
  paymentFixedCosts: number
  paymentScheduleItems: PaymentScheduleItem[]
}

export interface EfectiveCommission {
  commissionName: string
  commissionValueInCents: number
  commissionValueInCentsDisplay: string
}

export interface AgentCommission {
  name: string
  amount: number
  amountDisplay: string
  type: string
  baseValue: string
  chargeCommissionFrom: string
}

export interface PaymentScheduleItem {
  dueDate: string
  principalAmountInCents: number
  amortization: number
  interest: number
  financeTax: number
  payment: number
  addedFixedCosts: number
}
