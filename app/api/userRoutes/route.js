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

// Assuming this file is app/api/user/[userId]/route.js
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prismadb'; // Adjust the import path as necessary

// Create a new user
export async function post(request) {
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

// Fetch a single user or all users
export async function get(request, { params }) {
    const { userId } = params;

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
}

// Update a user's information
export async function put(request, { params }) {
    const { userId } = params;
    const updateBody = await request.json();
    const { email, password } = updateBody;
    const hashedPassword = await bcrypt.hash(password, 12);

    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
            email,
            hashedPassword,
        },
    });

    return NextResponse.json(updatedUser);
}

// Delete a user
export async function del(request, { params }) {
    const { userId } = params;

    await prisma.user.delete({
        where: { id: userId },
    });

    return NextResponse.json({ message: 'User deleted successfully' });
}
