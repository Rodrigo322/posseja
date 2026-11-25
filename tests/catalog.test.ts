import assert from "node:assert/strict";
import test from "node:test";
import { professionals } from "../lib/catalog";
import { filterProfessionals } from "../lib/filters";

test("combina busca por serviço, categoria e cidade", () => {
  const filters = { query: "  PINTURA residencial ", category: "Pintura", city: "Posse" };
  const matchingSlugs = filterProfessionals(professionals, filters).map(({ slug }) => slug);

  assert.deepEqual(matchingSlugs, ["marina-alves"]);
  assert.deepEqual(filterProfessionals(professionals, { ...filters, city: "Guarani de Goiás" }), []);
  assert.deepEqual(filterProfessionals(professionals, { ...filters, category: "Limpeza" }), []);
});

test("encontra nomes e serviços sem exigir acentos", () => {
  const filters = { query: "marina", category: "", city: "" };
  assert.deepEqual(filterProfessionals(professionals, filters).map(({ slug }) => slug), ["marina-alves"]);
  assert.deepEqual(filterProfessionals(professionals, { ...filters, query: "instalacoes eletricas" }).map(({ slug }) => slug), ["rafael-nunes"]);
});
