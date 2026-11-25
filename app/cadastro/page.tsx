import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { makeWhatsAppLink } from "../../lib/whatsapp";

export const metadata: Metadata = { title: "Cadastrar meus serviços" };

export default async function SignUpPage() {
  await connection();
  const signupLink = makeWhatsAppLink(
    process.env.POSSE_JA_WHATSAPP,
    "Olá! Gostaria de cadastrar meus serviços gratuitamente no catálogo da Posse Já.",
  );

  return (
    <main className="container detail" id="conteudo" tabIndex={-1}>
      <Link className="back-link" href="/"><span aria-hidden="true">←</span> Voltar ao início</Link>
      <header className="detail-heading">
        <h1>Cadastrar meus serviços</h1>
        <p className="detail-lead">O cadastro no catálogo da Posse Já é gratuito e feito pelo WhatsApp oficial.</p>
      </header>

      <section className="detail-panel signup-panel">
        <h2>O que enviar</h2>
        <ul>
          <li>Seu nome profissional ou o nome da empresa</li>
          <li>Categoria e lista dos serviços que você oferece</li>
          <li>Sua cidade e a área de atendimento</li>
          <li>Telefone comercial e autorização para exibi-lo no perfil</li>
          <li>Fotos de trabalhos realizados, se quiser incluir um portfólio</li>
        </ul>
      </section>

      {signupLink ? (
        <a className="button button-lime" href={signupLink}>Cadastrar pelo WhatsApp <span aria-hidden="true">↗</span></a>
      ) : (
        <p className="notice">Cadastro ainda indisponível. O WhatsApp oficial da Posse Já ainda não foi configurado.</p>
      )}
    </main>
  );
}
