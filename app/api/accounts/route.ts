import { DB } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

// Mock user authentication
async function auth() {
  const user = await DB.users.findFirst();

  const userId = user?.uuid ?? null;

  return userId;
}

// ! Route must be protected using Auth service as per https://clerk.com/docs/references/nextjs/route-handlers

export async function GET() {

  const userId = await auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const data = await DB.accounts.findMany({
    where: {
      userId: {
        equals: userId,
      },
    },
    include: {
      accountNames: true,
      accountBalances: true,
      accountIdentifications: true,
    }
  });

  console.log(data)

  return NextResponse.json({ data });
}