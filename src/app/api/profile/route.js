import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { id, firstName, lastName, email, imageProfile } = body;

    console.log("Received data:", { id, firstName, lastName, email, imageProfile });

    let updatedProfile;

    if (id) {
      updatedProfile = await prisma.userProfile.update({
        where: { id: parseInt(id) },
        data: {
          firstName,
          lastName,
          email,
          imageProfile,
        },
      });
    } else {
      updatedProfile = await prisma.userProfile.create({
        data: {
          firstName,
          lastName,
          email,
          imageProfile,
        },
      });
    }

    console.log("Updated profile:", updatedProfile);

    return NextResponse.json({ data: updatedProfile }, { status: 200 });
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: error.message || 'Error updating profile' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
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