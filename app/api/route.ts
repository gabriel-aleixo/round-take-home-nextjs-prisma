// export const dynamic = 'force-dynamic' // defaults to auto

import { DB } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

// export const dynamic = "force-dynamic"; // defaults to auto

// Export to handle supported method GET
export async function GET(req: NextRequest) {

    const data = await DB.hello.findUnique({
      where: { uuid: "1" },
    });

    const res = data?.message;

  return NextResponse.json(res);
};

// TODO handle methods that are not allowed
// TODO only allow API requests from authenticated users (use server session?)