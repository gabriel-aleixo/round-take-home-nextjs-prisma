import { Account } from "@/types";
import { getCurrentUser } from "./session";

export async function getAccounts() {

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

  return accounts as Account[];
}
