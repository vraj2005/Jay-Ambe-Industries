import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmails } from '@/lib/mail';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, organization, phoneNumber, emailAddress, message } = body;

    // Validate required fields
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return NextResponse.json(
        { success: false, error: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!phoneNumber || typeof phoneNumber !== 'string' || !phoneNumber.trim()) {
      return NextResponse.json(
        { success: false, error: 'Contact number is required.' },
        { status: 400 }
      );
    }

    if (!emailAddress || typeof emailAddress !== 'string' || !emailAddress.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Trigger emails
    const result = await sendContactEmails({
      fullName: fullName.trim(),
      organization: organization ? organization.trim() : undefined,
      phoneNumber: phoneNumber.trim(),
      emailAddress: emailAddress.trim(),
      message: message ? message.trim() : undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: result.simulated
          ? 'Enquiry recorded successfully (development mode). A confirmation will be emailed.'
          : 'Thank you! Your query has been received. A confirmation has been sent to your email.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[API /api/contact error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to process inquiry. Please try again or reach out on WhatsApp.',
      },
      { status: 500 }
    );
  }
}
