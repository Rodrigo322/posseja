"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { CatalogEntry } from "../lib/catalog";
import { filterProfessionals } from "../lib/filters";

const emptyFilters = { query: "", category: "", city: "" };

export function Catalog({ entries }: { entries: readonly CatalogEntry[] }) {
  const categories = [...new Set(entries.map(({ category }) => category))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  const cities = [...new Set(entries.map(({ city }) => city))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  const searchInput = useRef<HTMLInputElement>(null);
  const [filters, setFilters] = useState(emptyFilters);
  const results = filterProfessionals(entries, filters);

  function resetFilters() {
    setFilters(emptyFilters);
    searchInput.current?.focus();
  }

  return (
    <section className="container catalog" id="catalogo" aria-labelledby="catalogo-titulo" tabIndex={-1}>
      <div className="catalog-heading">
        <h2 id="catalogo-titulo">Catálogo de profissionais</h2>
        <p>Os perfis abaixo são fictícios e servem para demonstrar o catálogo.</p>
      </div>

      <div className="filters" role="group" aria-label="Filtros do catálogo">
        <label>
          Nome ou serviço
          <input
            ref={searchInput}
            type="search"
            placeholder="Ex.: pintura residencial"
            value={filters.query}
            onChange={(event) => setFilters({ ...filters, query: event.target.value })}
          />
        </label>
        <label>
          Categoria
          <select value={filters.category} onChange={(event) => setFilters({ ...filters, category: event.target.value })}>
            <option value="">Todas as categorias</option>
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
        <label>
          Cidade
          <select value={filters.city} onChange={(event) => setFilters({ ...filters, city: event.target.value })}>
            <option value="">Todas as cidades</option>
            {cities.map((city) => <option key={city}>{city}</option>)}
          </select>
        </label>
      </div>

      <div className="result-bar">
        <p role="status">
          {results.length === 0
            ? "Nenhum profissional corresponde aos filtros."
            : `${results.length} ${results.length === 1 ? "profissional encontrado" : "profissionais encontrados"}`}
        </p>
        {Object.values(filters).some(Boolean) && (
          <button className="text-button" type="button" onClick={resetFilters}>Limpar filtros</button>
        )}
      </div>

      {results.length > 0 && (
        <ul className="card-grid">
          {results.map((professional) => (
            <li className="card" key={professional.slug}>
              <div className="card-top">
                <span className="initials" aria-hidden="true">
                  {professional.name.split(" ").slice(0, 2).map((part) => part[0]).join("")}
                </span>
                <span className="category">{professional.category}</span>
              </div>
              <h3>{professional.name}</h3>
              <p className="card-city">{professional.city} · GO</p>
              <p className="card-services">{professional.services.join(" · ")}</p>
              <Link className="profile-link" href={`/profissionais/${professional.slug}`}>
                <span>Ver perfil<span className="sr-only"> de {professional.name}</span></span>
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
