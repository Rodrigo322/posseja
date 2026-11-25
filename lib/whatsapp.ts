import type { Professional } from "./catalog";

export function makeWhatsAppLink(phone: string | undefined, message: string) {
  const number = phone?.trim();
  if (!number || !/^[1-9]\d{7,14}$/.test(number)) return null;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function quoteWhatsAppLink(professional: Professional) {
  const contact = professional.commercialContact;
  if (professional.fictional || contact?.authorized !== true) return null;

  return makeWhatsAppLink(
    contact.phone,
    `Olá, ${professional.name}! Vi seu perfil na Posse Já e gostaria de pedir um orçamento.`,
  );
}
