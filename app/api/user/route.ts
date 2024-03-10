import { DB } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

// export const dynamic = "force-dynamic"; // defaults to auto

// Export to handle supported method GET
export async function GET(req: NextRequest) {

    const user = await DB.users.findFirst();

  return NextResponse.json(user);
};
