import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { professionals } from "../../../lib/catalog";
import { quoteWhatsAppLink } from "../../../lib/whatsapp";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return { title: professionals.find((professional) => professional.slug === slug)?.name };
}

export default async function ProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const professional = professionals.find((entry) => entry.slug === slug);
  if (!professional) notFound();

  await connection();
  const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "America/Sao_Paulo" }).format(new Date());
  const quoteLink = quoteWhatsAppLink(professional);

  return (
    <main className="container detail" id="conteudo" tabIndex={-1}>
      <Link className="back-link" href="/#catalogo"><span aria-hidden="true">←</span> Voltar ao catálogo</Link>
      <header className="detail-heading">
        <p className="category">{professional.category}</p>
        <h1>{professional.name}</h1>
        <p className="detail-lead">{professional.city} · GO</p>
        <p>{professional.description}</p>
        {professional.fictional && <p className="notice">Perfil fictício de demonstração.</p>}
        {professional.availabilityConfirmedOn === today && <p className="availability">Atende hoje</p>}
      </header>

      <div className="detail-grid">
        <section className="detail-panel">
          <h2>Serviços</h2>
          <ul>{professional.services.map((service) => <li key={service}>{service}</li>)}</ul>
        </section>
        <section className="detail-panel">
          <h2>Área de atendimento</h2>
          <ul>{professional.serviceArea.map((city) => <li key={city}>{city} · GO</li>)}</ul>
        </section>
      </div>

      {professional.portfolio && professional.portfolio.length > 0 && (
        <section className="portfolio">
          <h2>Portfólio</h2>
          <div className="portfolio-grid">
            {professional.portfolio.map((photo) => (
              <figure key={photo.src}>
                <Image src={photo.src} alt={photo.alt} width={900} height={600} sizes="(max-width: 650px) 100vw, 450px" />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {quoteLink && <a className="button button-lime" href={quoteLink}>Pedir orçamento pelo WhatsApp</a>}
    </main>
  );
}
