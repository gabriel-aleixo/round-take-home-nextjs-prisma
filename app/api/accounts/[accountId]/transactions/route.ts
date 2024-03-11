export const dynamic = 'force-dynamic' // defaults to auto
import { DB } from "@/app/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// ! Route must be protected using Auth service as per https://clerk.com/docs/references/nextjs/route-handlers

export async function GET(
  req: NextRequest,
  { params }: { params: { accountId: string } }
) {

  const headersList = headers();

  const userId = headersList.get("User-UUID");

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const accountId = params.accountId;

  try {
    const data = await DB.transactions.findMany({
      where: {
        accountId: accountId,
      },
      include: {
        balance: true,
        transactionAmount: true,
        transactionInformation: true,
        isoBankTransactionCode: true,
        proprietaryBankTransactionCode: true,
      },
    });

    // console.log(data);

    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return new Response("Internal server error", { status: 500 });
  }
}
