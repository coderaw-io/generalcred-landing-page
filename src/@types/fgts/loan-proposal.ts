export interface GetFgtsBalanceRequest {
  name: string,
  cpf: string,
  phonenumber: string,
  email: string
}

export type FgtsBalance = FgtsBalanceResponse[]

export interface FgtsBalanceResponse {
  product_id: string
  table_name: string
  response: Balance
}

export interface Balance {
  id: string
  calculateByValueType: string
  requestedAmount: string
  initialValue: string
  liquidValue: string
  monthlyInterest: string
  yearlyInterest: string
  startDate: string
  dueDate: string
  comm: string
  efectiveCommissions: EfectiveCommission[]
  commTc: string
  commNonTc: string
  agentCommissions: AgentCommission[]
  finTax: string
  effectiveMonthlyCost: string
  effectiveYearlyCost: string
  registrationNumber: string
  termInMonths: string
  numberOfPayments: string
  paymentFixedCosts: string
  paymentScheduleItems: PaymentScheduleItem[]
}

export interface EfectiveCommission {
  commissionName: string
  commissionValueInCents: string
  commissionValueInCentsDisplay: string
}

export interface AgentCommission {
  name: string
  amount: string
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
