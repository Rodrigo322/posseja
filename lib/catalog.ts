export type Professional = {
  slug: string;
  name: string;
  category: string;
  city: string;
  serviceArea: readonly string[];
  services: readonly string[];
  description: string;
  fictional: boolean;
  availabilityConfirmedOn?: string;
  commercialContact?: { phone: string; authorized: boolean };
  portfolio?: readonly { src: string; alt: string; caption: string }[];
};

export type CatalogEntry = Pick<Professional, "slug" | "name" | "category" | "city" | "services">;

export const professionals: readonly Professional[] = [
  {
    slug: "marina-alves",
    name: "Marina Alves",
    category: "Pintura",
    city: "Posse",
    serviceArea: ["Posse", "Guarani de Goiás"],
    services: ["Pintura residencial", "Pintura de fachadas", "Aplicação de textura"],
    description: "Pintura de interiores e exteriores, da preparação das paredes ao acabamento.",
    fictional: true,
    portfolio: [
      {
        src: "/portfolio/fachada.webp",
        alt: "Varanda de uma casa térrea com fachada branca e verde-clara",
        caption: "Pintura de fachada · imagem ilustrativa",
      },
    ],
  },
  {
    slug: "rafael-nunes",
    name: "Rafael Nunes",
    category: "Elétrica",
    city: "Posse",
    serviceArea: ["Posse", "Iaciara"],
    services: ["Instalações elétricas", "Troca de tomadas", "Iluminação"],
    description: "Instalação e manutenção elétrica para residências e pequenos comércios.",
    fictional: true,
  },
  {
    slug: "carla-mendes",
    name: "Carla Mendes",
    category: "Limpeza",
    city: "Guarani de Goiás",
    serviceArea: ["Guarani de Goiás", "Posse"],
    services: ["Limpeza residencial", "Limpeza pós-obra", "Organização de ambientes"],
    description: "Limpeza e organização de casas, apartamentos e pequenos comércios.",
    fictional: true,
  },
  {
    slug: "diego-rocha",
    name: "Diego Rocha",
    category: "Hidráulica",
    city: "Iaciara",
    serviceArea: ["Iaciara", "Posse"],
    services: ["Reparo de vazamentos", "Troca de torneiras", "Instalações hidráulicas"],
    description: "Manutenção hidráulica e pequenos reparos em casas e comércios.",
    fictional: true,
  },
  {
    slug: "ana-costa",
    name: "Ana Costa",
    category: "Beleza",
    city: "Posse",
    serviceArea: ["Posse"],
    services: ["Manicure", "Pedicure", "Esmaltação"],
    description: "Cuidados com as unhas e atendimento com hora marcada.",
    fictional: true,
  },
  {
    slug: "lucas-reis",
    name: "Lucas Reis",
    category: "Pintura",
    city: "Iaciara",
    serviceArea: ["Iaciara"],
    services: ["Pintura residencial", "Pintura de portões", "Retoques"],
    description: "Pintura e retoques para renovar paredes, portas e portões.",
    fictional: true,
  },
];
