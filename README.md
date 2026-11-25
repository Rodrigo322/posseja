# Posse Já

Catálogo mobile de profissionais de Posse-GO e região. Os perfis e a foto de portfólio são exemplos fictícios.

Requer Node.js 22 e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000.

Para habilitar o cadastro, copie `.env.example` para `.env.local` e preencha `POSSE_JA_WHATSAPP` com o número oficial autorizado, incluindo código do país e DDD, somente com dígitos. Reinicie o servidor após configurar. Sem um número válido, o cadastro informa que está indisponível.

Os perfis estão em `lib/catalog.ts`. As opções de cidade filtram pela cidade do perfil, enquanto a área de atendimento detalha as localidades cobertas. Um perfil real precisa de telefone comercial e autorização explícita de exibição para oferecer orçamento pelo WhatsApp. A confirmação de disponibilidade usa uma data `AAAA-MM-DD` e vale apenas para esse dia em Goiás.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```
