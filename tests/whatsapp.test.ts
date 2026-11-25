import assert from "node:assert/strict";
import test from "node:test";
import { professionals } from "../lib/catalog";
import { makeWhatsAppLink, quoteWhatsAppLink } from "../lib/whatsapp";

const phone = "5500000000000";

test("gera um link com mensagem codificada e número internacional", () => {
  const message = "Olá! Preciso de um orçamento & visita.";
  assert.equal(
    makeWhatsAppLink(phone, message),
    "https://wa.me/5500000000000?text=Ol%C3%A1!%20Preciso%20de%20um%20or%C3%A7amento%20%26%20visita.",
  );
});

test("ignora configurações ausentes ou inválidas", () => {
  assert.equal(makeWhatsAppLink(undefined, "Olá"), null);
  assert.equal(makeWhatsAppLink("  ", "Olá"), null);
  assert.equal(makeWhatsAppLink("5500000000000?text=outra", "Olá"), null);
});

test("só permite orçamento para perfil real com contato autorizado", () => {
  const commercialContact = { phone, authorized: true };
  const fictional = { ...professionals[0], commercialContact };
  const real = { ...fictional, fictional: false };
  assert.equal(quoteWhatsAppLink(fictional), null);
  assert.equal(quoteWhatsAppLink({ ...real, commercialContact: { ...commercialContact, authorized: false } }), null);
  assert.equal(quoteWhatsAppLink({ ...real, commercialContact: undefined }), null);

  const link = quoteWhatsAppLink(real);
  assert.ok(link);
  assert.match(new URL(link).searchParams.get("text") ?? "", /Olá, Marina Alves!.*orçamento/);
});
