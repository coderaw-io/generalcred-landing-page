export interface ContractResponse {
  id: number
  contract_number: string
  contract_value: string
  amount_charged: string
  installments: number
  active: string
  name: string
  onboarding_link: string
  refund_reason_id: any
  date_refund_reason: any
  customer_id: number
  payment_id: any
  payment_method: any
  status: string
  status_original: string
  customer: Customer
  bg_status: string
  cancel_payment: boolean
  nsu: any
  cpf_cnpj: string
  status_code: number
  lgpd_accepted: any
  status_pipeline: string
  status_bg_pipeline: string
  created_at: string
  updated_at: string
  store_name: string
  store_id: number
  sub_name: string
  mother_name: string
  father_name: string
  corban_name: string
  seller_name: string
  user_manager_name: string
  notifications: Notification[]
  corban_commission: string
  sub_commission: string
  store_commission: string
  seller_commission: string
  commission_payment_date: any
  signed_file_url: any
  ziped_file_url: any
  payment_date: any
  has_signed_ccb_file: boolean
  basic_interest: string
  bank_kind_i18n: any
  bank_kind: any
  contract_value_client: any
  contract_value_establishment: any
}

export interface Customer {
  id: number
  name: string
  email: string
  mobile: string
  mother_name: string
  father_name: string
  birth_date: string
  address: Address
  contacts: any[]
  cpf_cnpj: string
  blacklist: boolean
  bank_account: BankAccount
  rg: string
  emission_rg: any
  civil_state: any
  marital_status: string
  gender_customer: string
  reference_name: any
  reference_ddd: any
  reference_phone: any
  entity: Entity
}

export interface Address {
  id: number
  zip_code: string
  street: string
  number: string
  district: string
  complement: string
  active: string
  country: string
  city: string
  state: string
  lat: any
  tong: any
  created_at: string
  updated_at: string
  entity_id: number
  deleted_at: any
  imported_id: any
}

export interface BankAccount {
  imported_id: number
  number_bank: any
  name_bank: any
  number_account: any
  agency_account: any
  created_at: string
  updated_at: string
  entity_id: number
  agency_digit: any
  account_digit: any
  kind: number
  deleted_at: any
  pix: string
  kind_pix: string
  month: any
  kind_account: string
  status: any
}

export interface Entity {
  id: number
  cpf_cnpj: string
  name: string
  social_reason: any
  has_commission: any
  address: Address2
  bank_account: BankAccount2
  commissions: any[]
  contacts: any[]
  commission_bases: any[]
  kind: any
  commission_father: any
  commission_fgts: any
  fgts_has_commission: any
  fgts_commissions: any[]
  commission_bases_report: any[]
  has_cdc_commission: boolean
  has_secure: boolean
  has_uy3_create: boolean
  has_fgts_create: boolean
  has_cdc_create: boolean
  has_credit_create: boolean
  product: string
  product_cdc: string
  product_fgts: string
  periodicity: string
  periodicity_fgts: any
  periodicity_cdc: any
  blacklist: boolean
}

export interface Address2 {
  id: number
  zip_code: string
  street: string
  number: string
  district: string
  complement: string
  active: string
  country: string
  city: string
  state: string
  lat: any
  tong: any
  created_at: string
  updated_at: string
  entity_id: number
  deleted_at: any
  imported_id: any
}

export interface BankAccount2 {
  id: number
  number_bank: any
  name_bank: any
  number_account: any
  agency_account: any
  created_at: string
  updated_at: string
  entity_id: number
  agency_digit: any
  account_digit: any
  kind: number
  deleted_at: any
  pix: string
  kind_pix: string
  month: any
  kind_account: string
  status: any
}

export interface Notification {
  id: number
  payment_link: string
  notification_type: string
  active: string
  contract_id: number
  created_at: string
  updated_at: string
  deleted_at: any
  imported_id: any
  notification_count: number
}
