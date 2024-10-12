
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';



export async function POST(req) {
  try {
    const body = await req.json();
    const prisma = new PrismaClient();
    const { firstName, lastName, email } = body;

    // Save the new user profile in the database
    const newUserProfile = await prisma.userProfile.create({
      data: {
        firstName,
        lastName,
        email,
      },
    });

    return NextResponse.json({status:"success",data:newUserProfile})
  } catch (error) {
    return NextResponse.json({status:"fail",data:error.toString()})
  }
}

export async function GET(req,res){
    try{
        const prisma = new PrismaClient();
        const result = await prisma.userProfile.findMany()

        return NextResponse.json({status:"success",data:result})
    }catch(err){
        return NextResponse.json({status:"fail",data:err.toString()})
    }
}