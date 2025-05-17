import { NextResponse } from "next/server";
import { projects } from "../../../Projects";

export async function GET() {
  return NextResponse.json(projects);
}
