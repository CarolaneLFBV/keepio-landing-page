import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn('RESEND_API_KEY not configured - email will not be sent')
    // In development, simulate success
    if (process.dev) {
      return { success: true, messageId: 'dev-mode' }
    }
    throw createError({
      statusCode: 500,
      message: 'Email service not configured',
    })
  }

  const resend = new Resend(apiKey)
  const body = await readBody(event)

  const { name, email, subject, message } = body

  // Basic validation
  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields',
    })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid email format',
    })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Keepio Contact <noreply@updates.keepio.fr>',
      to: ['contact@keepio.fr'],
      replyTo: email,
      subject: `[Keepio] ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6366F1, #818CF8); padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
          </div>
          <div style="background: #f9fafb; padding: 32px; border-radius: 0 0 16px 16px;">
            <div style="background: white; padding: 24px; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 16px; color: #6b7280; font-size: 14px;">
                <strong style="color: #374151;">From:</strong> ${name}
              </p>
              <p style="margin: 0 0 16px; color: #6b7280; font-size: 14px;">
                <strong style="color: #374151;">Email:</strong>
                <a href="mailto:${email}" style="color: #6366F1;">${email}</a>
              </p>
              <p style="margin: 0 0 16px; color: #6b7280; font-size: 14px;">
                <strong style="color: #374151;">Subject:</strong> ${subject}
              </p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      throw createError({
        statusCode: 500,
        message: 'Failed to send email',
      })
    }

    return { success: true, messageId: data?.id }
  } catch (err) {
    console.error('Error sending email:', err)
    throw createError({
      statusCode: 500,
      message: 'Failed to send email',
    })
  }
})
