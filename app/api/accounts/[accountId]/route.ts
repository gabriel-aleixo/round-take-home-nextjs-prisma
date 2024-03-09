export const dynamic = 'force-dynamic' // defaults to auto
import { DB } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

// Mock user authentication
async function auth() {
  const user = await DB.users.findFirst();

  const userId = user?.uuid ?? null;

  return userId;
}

// ! Route must be protected using Auth service as per https://clerk.com/docs/references/nextjs/route-handlers

export async function GET(
  req: NextRequest,
  { params }: { params: { accountId: string } }
) {
  const userId = await auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const accountId = params.accountId;

  try {
    const data = await DB.accounts.findUnique({
      where: {
        uuid: accountId,
      },
      include: {
        accountNames: true,
        accountBalances: true,
        accountIdentifications: true,
      },
    });

    console.log(data);

    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return new Response("Internal server error", { status: 500 });
  }
}
