import type { CatalogEntry } from "./catalog";

export type CatalogFilters = {
  query: string;
  category: string;
  city: string;
};

function normalize(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("pt-BR");
}

export function filterProfessionals<T extends CatalogEntry>(catalog: readonly T[], filters: CatalogFilters) {
  const query = normalize(filters.query.trim());

  return catalog.filter((professional) => {
    const searchableFields = [professional.name, ...professional.services];
    return (
      (!filters.category || professional.category === filters.category) &&
      (!filters.city || professional.city === filters.city) &&
      searchableFields.some((field) => normalize(field).includes(query))
    );
  });
}
