# Fristaden Falun - Protótipo React

**Português (Brasil)** | [English](README.md)

Protótipo React/TypeScript de site para uma comunidade de igreja, exportado originalmente do Google AI Studio. Este é o repositório público `Fristaden-Falun`, não o projeto separado `fristaden-falun-full-site`.

**Documentação revisada:** 01/10/2026. Nenhum deploy público atual deste repositório foi confirmado nesta atualização.

## Objetivo e planejamento

O código reúne informações da igreja, eventos, sermões, contribuições, voluntariado, missões e comunidade. O README anterior tinha apenas instruções de configuração do AI Studio; não reconstruímos pesquisas de design ou decisões originais de planejamento. O histórico git é o registro das alterações de implementação.

## Arquitetura

```text
Navegador -> componentes React e navegação por hash
         -> serviço Gemini para ideias de sermão e texto de boas-vindas
Build    -> Vite + TypeScript
```

`App.tsx` mapeia hashes para início, planejamento de visita, crenças, contribuições, voluntariado, missões, comunidade e páginas de detalhe. O app acompanha mudanças do hash, rola até seções e direciona o foco para o conteúdo principal após mudar de página. Os componentes ficam em `components/`.

De `package.json`: React 19, TypeScript 5.8, Vite 6 e `@google/genai`. O serviço Gemini pede JSON estruturado ao modelo `gemini-2.5-flash` para esboços de sermão e texto de email de boas-vindas. Gerar texto não comprova que um email seja entregue.

## Design e snapshots

O layout usa estilos church-white e church-gray, cabeçalho e rodapé compartilhados e área principal com controle de foco. Nenhuma execução visual nova deste protótipo foi feita nesta atualização. Novos snapshots devem usar dados fictícios de visitantes, nomes de arquivo datados e `docs/assets/`; nenhum embed de imagem não verificado foi adicionado.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Outros scripts: `npm run build` e `npm run preview`. Os comandos foram lidos do pacote, não executados nesta revisão de documentação.

## Segurança e privacidade

**Não publique com chave real do Gemini na configuração atual do frontend.** `vite.config.ts` substitui `process.env.API_KEY` e `process.env.GEMINI_API_KEY` pelo valor do ambiente durante o build, enquanto `services/geminiService.ts` chama Gemini no cliente. Se uma chave real entrar no bundle publicado, visitantes podem recuperá-la. Guardar em `.env.local` não torna o frontend compilado secreto.

Antes de publicar IA, mova as chamadas com chave para um serviço no servidor, reveja limites de uso e custos e confirme que nenhum segredo é enviado ao navegador. Esta atualização não muda a arquitetura, define chaves ou faz chamadas de API. Nomes de visitantes e detalhes de visita usados no gerador também precisam de revisão de privacidade antes de uso real.

## Testes

| Verificação | Evidência nesta atualização |
| --- | --- |
| Revisão de código | Rotas do app, scripts, substituição de chave no Vite e serviço Gemini lidos em 01/10/2026 |
| Testes automatizados | Sem script de teste no pacote; nenhum teste executado |
| Build e execução | Não executados |
| Responsividade e acessibilidade | Foco analisado só no código; sem auditoria renderizada |

Antes de reutilizar, teste navegação e hashes desconhecidos, telas pequenas, foco por teclado, falhas da API e limites de privacidade. A revisão de documentação não torna o protótipo pronto para produção.

## Créditos e licença

Exportação original do AI Studio e código do protótipo preservados. Nenhum `LICENSE` foi encontrado na raiz durante a revisão. Esta atualização não aplica licença nova a dependências, imagens ou conteúdo de terceiros; seus termos continuam valendo.

## Próximos passos

- [ ] Confirmar o papel deste repositório em relação ao projeto full-site separado.
- [ ] Remover segredos no cliente antes de uso público de IA.
- [ ] Rever dados de visitantes e texto de IA antes de usar.
- [ ] Executar build e testes funcionais com dados seguros.
- [ ] Adicionar screenshots datados em `docs/assets/`.
