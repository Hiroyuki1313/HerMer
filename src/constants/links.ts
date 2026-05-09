export const CONTACT_LINKS = {
  WHATSAPP: "https://wa.me/526361325388",
  DEFAULT_MESSAGE: "Hola Héctor, vengo de la Landing Page y me gustaría conocer más sobre sus servicios.",
  DEMO_MESSAGE: "Hola Héctor, vengo de la Landing Page y me gustaría agendar una Demo de sus servicios.",
  AUDIT_MESSAGE: "Hola, me interesa agendar la Auditoría Gratuita para automatizar mi empresa."
};

export const getWhatsAppLink = (message?: string) => {
  const msg = message || CONTACT_LINKS.DEFAULT_MESSAGE;
  return `${CONTACT_LINKS.WHATSAPP}?text=${encodeURIComponent(msg)}`;
};
