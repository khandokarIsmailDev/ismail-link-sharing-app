import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url); // Extract query parameters
        const id = searchParams.get('id'); // Get 'id' from query params

        if (!id) {
            throw new Error('ID not provided');
        }

        const result = await prisma.userProfile.findUnique({
            where: { id: parseInt(id) }, // Convert id to integer if it's a number
        });

        return NextResponse.json({ status: "success", data: result });
    } catch (err) {
        return NextResponse.json({ status: "error", data: err.toString() });
    }
}
