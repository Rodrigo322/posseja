import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Posse Já | Profissionais da região", template: "%s | Posse Já" },
  description: "Encontre profissionais de Posse, Goiás, e região pelo catálogo da Posse Já.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/">posse<span>já.</span></Link>
            <nav aria-label="Principal">
              <Link href="/#catalogo">Catálogo</Link>
              <Link href="/cadastro">Cadastro</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-inner">
            <Link className="brand" href="/">posse<span>já.</span></Link>
            <p>Posse-GO e região</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
