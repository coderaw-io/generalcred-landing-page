export interface CreateCustomerRequest {
  customer: Customer
}

export interface Customer {
  birth_date: string
  email: string
  mobile: string
  rg: string
  gender_customer: string
  marital_status: string
  mother_name: string
  father_name: string
  entity_attributes: EntityAttributes
}

export interface EntityAttributes {
  name: string
  cpf_cnpj: string
  address_attributes: AddressAttributes
  bank_account_attributes: BankAccountAttributes
}

export interface AddressAttributes {
  zip_code: string
  street: string
  number: string
  district: string
  city: string
  state: string
  complement: string
}

export interface BankAccountAttributes {
  kind_pix: string
  pix: string
  kind_account: string
}

export interface SimulationResponse {
  simulation: Simulation
  message: string
  error: boolean
}

export interface Simulation {
  name: string
  interest_rate: string
  email: string
  cpf_cnpj: string
  phone: string
  phone_store: string
  phone_seller: string
  simulation_fgts: string
  simulation_json: string
  has_secure: boolean
  liquid_value: string
  released_amount: string
  value_client: string
  value_establishment: string
  card_limit: string
  value_installment: string
  installments: number
  birth_date: string
  id: number
  commission_paid: any
  trigger: any
  status: string
  customer_id: string
  seller_id: number
  created_at: string
  updated_at: string
  contract_id: any
  deleted_at: any
  value_iof: any
  date_credit: string
  date_first_installment: string
  cet_monthly: any
  cet_anual: any
  kind: string
  simulation_fgts_id: any
  id_simulation: any
  client_json: any
  parcels: string
  simulation_installments: any
  fgts_basic_interest_id: any
  tac: any
  tac_percent: any
  full_value: boolean
  tac_table_name: any
  fgts_commission_id: string
  kind_commission: string
  kind_bank: string
  via_api: boolean
}