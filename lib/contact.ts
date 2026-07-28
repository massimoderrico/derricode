export function buildContactMailto(name: string, email: string, message: string): string {
  const subject = `Derricode project enquiry from ${name}`
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
  return `mailto:hello@derricode.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
