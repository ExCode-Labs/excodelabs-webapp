import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (name.length < 2 || !emailPattern.test(email) || message.length < 10) {
      return NextResponse.json(
        {
          message:
            'Invalid input. Please provide a valid name, email, and message.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: 'Message received successfully.',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        message: 'Unable to process your request at this time.',
      },
      { status: 500 }
    );
  }
}
