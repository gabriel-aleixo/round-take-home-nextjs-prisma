import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface User {
  uuid: string;
  name: string;
  email: string;
}

interface AccountName {
  uuid: string;
  name: string;
  accountId: string;
}

interface AccountBalance {
  uuid: string;
  type: string;
  dateTime: string;
  amount: number;
  currency: string;
  creditLineIncluded: boolean;
  accountId: string;
}

interface AccountIdentification {
  uuid: string;
  type: string;
  identification: string;
  accountId: string;
}

export interface Account {
  uuid: string;
  id: string;
  userId: string;
  type: string;
  balance: number;
  currency: string;
  usageType: string;
  accountType: string;
  nickname: string;
  metaId: string;
  accountNames: AccountName[];
  accountBalances: AccountBalance[];
  accountIdentifications: AccountIdentification[];
}

export interface Transaction {
  uuid: string;
  id: string;
  date: Date;
  bookingDateTime: Date;
  valueDateTime: Date;
  status: string;
  amount: number;
  currency: string;
  transactionAmount?: TransactionAmount;
  reference: string;
  description: string;
  transactionInformation: TransactionInformation[];
  isoBankTransactionCode?: IsoBankTransactionCode;
  proprietaryBankTransactionCode?: ProprietaryBankTransactionCode;
  balance?: Balance;
  enrichment?: Enrichment;
  metaId: string;
  linkId: string;
  accountId: string;
}

interface TransactionInformation {
  uuid: string;
  text: string;
  transactionId: string;
}

interface TransactionAmount {
  uuid: string;
  amount: number;
  currency: string;
  transactionId: string;
}

interface IsoBankTransactionCode {
  uuid: string;
  transactionId: string;
  domainCodeId: string;
  familyCodeId: string;
  subFamilyCodeId: string;
}

interface DomainCode {
  uuid: string;
  code: string;
  name: string;
}

interface FamilyCode {
  uuid: string;
  code: string;
  name: string;
}

interface SubFamilyCode {
  uuid: string;
  code: string;
  name: string;
}

interface ProprietaryBankTransactionCode {
  uuid: string;
  code: string;
  issuer: string;
  transactionId: string;
}

interface Balance {
  uuid: string;
  type: string;
  amount: number;
  currency: string;
  transactionId: string;
}

interface Enrichment {
  uuid: string;
  transactionHashId: string;
  transactionId: string;
}

interface TransactionHash {
  uuid: string;
  hash: string;
}

interface Links {
  uuid: string;
  self: string;
}