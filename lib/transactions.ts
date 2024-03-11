import { Transaction } from "@/types";
import { getCurrentUser } from "./session";
import { transactions } from "@/prisma/transactions";

export async function getTransactions() {

  // ! Mock user authentication, implement user auth here
  const user = await getCurrentUser();
  const userId = user?.uuid ?? null;

  const res = await fetch("../api/accounts", {
    headers: {
        'Content-Type': 'application-json',
        'User-UUID': userId,
    }
  });

  const accountsData = await res.json();
  const accounts = accountsData.data;

  let transactions: Transaction[] = [];

  for (let account of accounts) {
    let res = await fetch(`../api/accounts/${account.uuid}/transactions`, {
        headers: {
            'Content-Type': 'application-json',
            'User-UUID': userId,
        }
    })
    let transactionsData = await res.json();

    transactions = [...transactions, ...transactionsData.data];
  }

  // console.log(transactions)

  return transactions;
}
