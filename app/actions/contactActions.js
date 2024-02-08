'use server'

import prisma from "../lib/prismadb";

export async function createPost(data) {
    const firstName = data.get('firstName')
    const lastName = data.get('lastName')
    const email = data.get('email')
    const phoneNumber = data.get('phoneNumber')
    const message = data.get('message')

    await prisma.post.create({
        data: {
            firstName,
            lastName,
            email,
            phoneNumber,
            message,
        }
    });

    return { success: true }
}