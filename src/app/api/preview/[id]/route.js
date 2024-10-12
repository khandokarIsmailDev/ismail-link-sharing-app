import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params; // `id` comes from params in app directory
    const prisma = new PrismaClient();
    
    // Convert `id` to an integer
    const userId = parseInt(id, 10); // Base 10 to ensure correct parsing

    const result = await prisma.userProfile.findUnique({
      where: { id: userId }, // Use the integer id in the query
    });

    if (!result) {
      return NextResponse.json({ status: "fail", message: "User not found" });
    }

    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "fail", data: err.toString() });
  }
}
