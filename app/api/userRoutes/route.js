/*
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from '../../lib/prismadb';

export async function POST(request) {
    const body = await request.json();

    const { email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            hashedPassword,
        },
    });

    return NextResponse.json(user);
}
*/
// app/api/user/[userId]/route.js

import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from '../../lib/prismadb';

export async function handler(request, { params }) {
  const { userId } = params; // Extract userId from the parameters if needed for GET, DELETE, PUT
  switch (request.method) {
    case 'POST':
      // Create a new user
      const body = await request.json();
      const { email, password } = body;
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await prisma.user.create({
        data: {
          email,
          hashedPassword,
        },
      });
      return NextResponse.json(user);
    
    case 'GET':
      // If a userId is provided, fetch a single user, otherwise fetch all users
      if (userId) {
        const user = await prisma.user.findUnique({
          where: {
            id: userId,
          },
        });
        if (!user) {
          return NextResponse.error({ status: 404 });
        }
        return NextResponse.json(user);
      } else {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
      }
    
    case 'PUT':
      // Update a user's information
      if (!userId) {
        return NextResponse.error({ status: 400, statusText: 'User ID must be provided for updates' });
      }
      const updateBody = await request.json();
      const { email: newEmail, password: newPassword } = updateBody;
      const hashedPasswordUpdated = await bcrypt.hash(newPassword, 12);
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          email: newEmail,
          hashedPassword: hashedPasswordUpdated,
        },
      });
      return NextResponse.json(updatedUser);
    
    case 'DELETE':
      // Delete a user
      if (!userId) {
        return NextResponse.error({ status: 400, statusText: 'User ID must be provided for deletion' });
      }
      await prisma.user.delete({
        where: { id: userId },
      });
      return NextResponse.json({ message: 'User deleted successfully' });
    
    default:
      return NextResponse.error({ status: 405, statusText: 'Method Not Allowed' });
  }
}

