import { NextResponse } from 'next/server';

type JobApplicationPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  role?: string;
  yearsExperience?: number;
  portfolioUrl?: string | null;
  coverLetter?: string;
};

const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
const urlPattern = /^https?:\/\/.+/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as JobApplicationPayload;

    const fullName = body.fullName?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const phone = body.phone?.trim() ?? '';
    const role = body.role?.trim() ?? '';
    const yearsExperience = Number(body.yearsExperience);
    const portfolioUrl = body.portfolioUrl?.trim() ?? '';
    const coverLetter = body.coverLetter?.trim() ?? '';

    const invalidPortfolio =
      portfolioUrl.length > 0 && !urlPattern.test(portfolioUrl);

    if (
      fullName.length < 2 ||
      !emailPattern.test(email) ||
      phone.length < 8 ||
      role.length < 2 ||
      !Number.isFinite(yearsExperience) ||
      yearsExperience < 0 ||
      yearsExperience > 50 ||
      coverLetter.length < 40 ||
      invalidPortfolio
    ) {
      return NextResponse.json(
        {
          message:
            'Invalid application data. Please review all required fields.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: 'Application submitted successfully.',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        message: 'Unable to submit application at this time.',
      },
      { status: 500 }
    );
  }
}
