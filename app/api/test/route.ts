import { NextRequest, NextResponse } from "next/server";
import { DB } from "@/app/db";

export async function GET() {
  const users = await DB.users.findMany();

  const data = JSON.stringify(users)

  return NextResponse.json(data);
};