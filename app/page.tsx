import Link from "next/link";
import { professionals } from "../lib/catalog";
import { Catalog } from "./catalog";

export default function HomePage() {
  const entries = professionals.map(({ slug, name, category, city, services }) => ({
    slug, name, category, city, services,
  }));

  return (
    <main id="conteudo" tabIndex={-1}>
      <section className="hero">
        <div className="container hero-inner">
          <p className="location"><span aria-hidden="true">●</span> Posse-GO e região</p>
          <h1>Encontre quem resolve<br className="desktop-break" /> <em>perto de você.</em></h1>
          <p className="hero-description">
            Da pintura ao reparo, encontre profissionais da região para o serviço que você precisa.
          </p>
          <div className="actions">
            <a className="button button-lime" href="#catalogo">Encontrar um profissional <span aria-hidden="true">↓</span></a>
            <Link className="button button-outline" href="/cadastro">Cadastrar meus serviços <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <Catalog entries={entries} />
    </main>
  );
}
