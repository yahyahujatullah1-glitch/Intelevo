"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const business = formData.get("business") as string
  const message = formData.get("message") as string

  // Simulate form processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real implementation, you would send an email here
  // For now, we'll just return a success message
  console.log("Form submission:", { name, email, business, message })

  return {
    success: true,
    message: `Thank you ${name}! Your message has been received. We'll get back to you within 24 hours at ${email}.`,
  }
}
