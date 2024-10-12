import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const prisma = new PrismaClient
        const result = await prisma.userProfile.findUnique(
            {
                where:id
            }
        )

        return NextResponse.json({status:"success",data:result})
    }catch(err){
        return NextResponse.json({status:"faile",data:err.toString()})
    }
}