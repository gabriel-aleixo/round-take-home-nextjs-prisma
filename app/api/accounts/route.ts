// export const dynamic = 'force-dynamic' // defaults to auto

import { NextApiRequest, NextApiResponse } from "next";
import { DB } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

// export const dynamic = "force-dynamic"; // defaults to auto

// Export to handle supported method GET
export async function GET(req: NextRequest) {

    const data = await DB.hello.findMany({
      where: { id: "1" },
    });

    const res = data;

  return NextResponse.json(res);
}
