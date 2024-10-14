import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { id, link } = body;

    console.log("Received data:", { id, link });

    // Check if link is defined and is an array
    if (!Array.isArray(link) || link.length === 0) {
      return NextResponse.json({ error: 'Link must be an array with at least one link object.' }, { status: 400 });
    }

    // Initialize userProfile variable
    let userProfile;

    // If id is provided, check if the user profile exists
    if (id) {
      userProfile = await prisma.userProfile.findUnique({
        where: { id: parseInt(id) },
      });
    }

    // If the user profile does not exist or id is null, create an empty profile
    if (!userProfile) {
      userProfile = await prisma.userProfile.create({
        data: {
          firstName: '', // Default value
          lastName: '',  // Default value
          email: '',     // Default value
          imageProfile: '', // Default value
        },
      });
    }

    // Process each link in the array
    for (const linkItem of link) {
      // Check if linkItem has the required properties
      if (!linkItem.platform || !linkItem.link) {
        return NextResponse.json({ error: 'Each link object must contain platform and link properties.' }, { status: 400 });
      }

      // Check if a link with the same platform already exists
      const existingLink = await prisma.link.findFirst({
        where: {
          userProfile: { id: userProfile.id }, // Use the relation field
          platform: linkItem.platform,
        },
      });

      if (existingLink) {
        // If it exists, update the existing link
        await prisma.link.update({
          where: { id: existingLink.id },
          data: {
            link: linkItem.link, // Update the link for the existing platform
          },
        });
      } else {
        // If it doesn't exist, create a new link
        await prisma.link.create({
          data: {
            platform: linkItem.platform,
            link: linkItem.link,
            userProfile: { connect: { id: userProfile.id } }, // Connect the link to the user profile
          },
        });
      }
    }

    // Retrieve the full user profile details along with links
    const fullProfile = await prisma.userProfile.findUnique({
      where: { id: userProfile.id },
      include: { link: true }, // Include the links in the response
    });

    console.log("Updated profile with links:", fullProfile);

    // Return both the full user profile details and the updated links
    return NextResponse.json({ userProfile: fullProfile }, { status: 200 });
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
