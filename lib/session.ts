import { User } from "@/types";

export async function getCurrentUser() {
  const res = await fetch('../api/user');

  const user = await res.json()

  return user as User;
}
