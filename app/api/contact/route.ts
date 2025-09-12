import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    // For now, we'll simulate successful submission
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // In a real application, you might want to:
    // - Send an email to your team
    // - Save to a database
    // - Send a confirmation email to the user

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 })
  }
}
