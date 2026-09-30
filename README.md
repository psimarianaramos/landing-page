# Mariana Ramos — Psicóloga Clínica

Landing page estática para GitHub Pages.

## Conteúdo

- identidade visual inspirada no cartão profissional da Mariana;
- versão responsiva, com foco em navegação pelo celular;
- apresentação do trabalho clínico;
- explicação da abordagem Fenomenológico-Existencial, com aprofundamento opcional sobre presença, escolhas e contexto;
- fluxo de primeiro contato e atendimento on-line;
- FAQ;
- CTAs para WhatsApp e Instagram;
- página simples de privacidade;
- sem formulários, analytics ou cookies próprios nesta versão.

## Identidade e implementação

- HTML, CSS e JavaScript puro, sem instalação de dependências ou etapa de build.
- Fonte Barlow Condensed ExtraLight hospedada localmente em WOFF2 (aproximadamente 17 KB), com licença SIL Open Font License em `assets/fonts/`. O corpo do texto usa fontes do sistema.
- Ilustrações vetoriais em `assets/pardal.svg` e `assets/ramo.svg`; aquarela em `assets/aquarela.svg`.
- Navegação e conteúdo permanecem acessíveis sem JavaScript. Com JavaScript, o menu móvel pode ser fechado por Escape, por um link ou por clique fora dele.
- Perguntas e aprofundamento usam o elemento nativo `details`. O site respeita a preferência de movimento reduzido.
- Caminhos relativos compatíveis com a publicação em `/mari-site/` no GitHub Pages.

## Visualização local

Basta abrir `index.html` em um navegador. Para testar em um servidor local:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicação no GitHub Pages

No repositório, abra **Settings → Pages** e escolha a publicação a partir da branch `main`, diretório `/ (root)`.

A URL padrão será semelhante a:

`https://vituri.github.io/mari-site/`

## Próximos refinamentos

Antes da publicação final, revisar especialmente:

- texto da seção “Sobre mim”;
- lista de questões/demandas atendidas;
- FAQ e informações práticas;
- inclusão de fotografia profissional, se desejado;
- domínio personalizado;
- imagem Open Graph para compartilhamento no WhatsApp/Instagram.
