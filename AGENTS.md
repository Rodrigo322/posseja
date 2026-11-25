# Posse Já — fluxo de trabalho

1. **Coordenador.** Crie uma branch por tarefa a partir da base correta. Quando houver trabalho simultâneo, use um worktree por tarefa.
2. **Implementador.** Só o implementador altera código e faz commits na branch da tarefa. Entregue o nome da branch, o SHA completo e os comandos executados.
3. **Testador.** Revise o diff contra a base e valide o SHA entregue. Testes temporários podem ser criados em ambiente isolado. Encaminhe ao implementador os testes de regressão que devem entrar no projeto.
4. **Publicador.** Receba a branch, o SHA aprovado e os resultados dos testes. Confira o SHA antes do push, abra ou atualize o PR e confirme que o commit na ponta da branch do PR tem o mesmo SHA aprovado.
5. Qualquer mudança no SHA exige nova validação. O merge é manual.
6. Relate cada verificação como **passou**, **falhou** ou **não executada**. Informe o motivo quando aplicável.

Mantenha as regras permanentes neste arquivo e os requisitos de produto nos prompts das tarefas. Na primeira tarefa que criar os scripts do projeto, configure o GitHub Actions para executar em PRs os checks aplicáveis de lint, tipos, testes e build, usando o gerenciador e o lockfile adotados pelo projeto.
