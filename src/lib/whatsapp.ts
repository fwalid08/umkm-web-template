/**
 * WhatsApp integration utility
 * Formats international phone number and encodes message for wa.me link
 */
export function generateWhatsAppLink(phoneNumber: string, message: string): string {
  // Strip any non-digit characters
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  
  // If starts with 08..., convert to 628...
  const formattedNumber = cleanNumber.startsWith('0') 
    ? '62' + cleanNumber.slice(1) 
    : cleanNumber;

  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
}

/**
 * Open WhatsApp directly in a new tab or app
 */
export function openWhatsApp(phoneNumber: string, message: string): void {
  const link = generateWhatsAppLink(phoneNumber, message);
  window.open(link, '_blank', 'noopener,noreferrer');
}
