import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, interest, message, to, subject } = body

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Replace with your email service provider (Resend, SendGrid, etc.)
    // Example with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const { data, error } = await resend.emails.send({
      from: 'Brown Paper <noreply@bpe.co.ke>',
      to: [to || 'info@bpe.co.ke'],
      subject: subject || `New Contact Form Submission: ${interest}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Email error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }
    */

    // For now, just log the data (replace with actual email sending)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      interest,
      message,
      to: to || 'info@bpe.co.ke',
      subject: subject || `New Contact Form Submission: ${interest}`,
    })

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Form submitted successfully. We\'ll get back to you soon!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}



