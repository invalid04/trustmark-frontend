import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prismadb';

export async function POST(req) {
  try {
    // Parse the body from the request
    const body = await req.json();
    const userForm = await prisma.userForm.create({
      data: body,
    });
    return NextResponse.json(userForm);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating user form', details: error.message  }, { status: 400 });
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  try {
    if (id) {
      const userForm = await prisma.userForm.findUnique({
        where: { id: parseInt(id, 10) },
      });
      if (!userForm) {
        return NextResponse.json({ error: 'User form not found', details: error.message  }, { status: 404 });
      }
      return NextResponse.json(userForm);
    } else {
      const userForms = await prisma.userForm.findMany();
      return NextResponse.json(userForms);
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching user forms', details: error.message  }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const id = body.id; // Assuming `id` is included in the body
    const userForm = await prisma.userForm.update({
      where: { id: parseInt(id, 10) },
      data: body,
    });
    return NextResponse.json(userForm);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating user form', details: error.message  }, { status: 400 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const userForm = await prisma.userForm.delete({
      where: { id: parseInt(id, 10) },
    });
    return NextResponse.json(userForm);
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting user form', details: error.message  }, { status: 400 });
  }
}
