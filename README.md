# Portfólio — Willian Barone (Dados & BI)

Site estático, sem build. Três arquivos: `index.html`, `styles.css`, `main.js`.
Identidade visual: matriz **Nine Box** (âmbar = markup · teal = giro).

## Ver localmente

Abra a pasta e rode um servidor simples (o `file://` direto não carrega as fontes):

```bash
python -m http.server 8799
```

Depois acesse http://localhost:8799

## Publicar na Vercel

**Opção A — pelo site da Vercel (mais fácil, sem terminal):**
1. Suba esta pasta para um repositório no seu GitHub.
2. Na Vercel: **Add New → Project → Import** o repositório.
3. Framework Preset: **Other**. Build Command: *(vazio)*. Output Directory: `.`
4. Deploy. Pronto — a Vercel te dá uma URL `*.vercel.app`.

**Opção B — pelo Vercel CLI:**
```bash
npm i -g vercel
vercel login
vercel        # na raiz desta pasta; aceite os padrões (static)
vercel --prod
```

> Não é preciso token no chat. O `vercel login` autentica pelo navegador na sua conta.

## O que ainda falta preencher (próximos passos)

- [ ] Screenshots reais dos dashboards nos 3 cases (substituir os `[ screenshot ]`).
- [ ] Case **Nine Box** refeito com dados públicos/sintéticos + link para o dashboard publicado.
- [ ] Case **Comparativo de Estoque** idem.
- [ ] Link "Baixar CV" apontando para o PDF do currículo.
- [ ] (Opcional) Domínio personalizado na Vercel.

## Estrutura das imagens

Crie uma pasta `assets/` e referencie em `index.html` trocando o bloco
`.case__ph` por `<img src="assets/nine-box.png" alt="..." class="case__img" />`.
