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
import prisma from '@/app/lib/prismadb';

// Create a new user
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

// Fetch a single user or all users
export async function GET(req) {
    // Accessing the userId parameter from the query object
    const { userId } = req.query;

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify(user), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

// Update a user's information
export async function PUT(request, { params }) {
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
export async function DELETE(request, { params }) {
    const { userId } = params;

    await prisma.user.delete({
        where: { id: userId },
    });

    return NextResponse.json({ message: 'User deleted successfully' });
}
