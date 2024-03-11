import { DB } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

// ! Route must be protected using Auth service as per https://clerk.com/docs/references/nextjs/route-handlers

export async function GET(req: NextRequest) {

  const headersList = headers();

  const userId = headersList.get("User-UUID");

  // console.log(userId)

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

  // console.log(data)

  return NextResponse.json({ data });
}