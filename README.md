# Mariana Ramos — site profissional

Landing page estática em português para apresentar o trabalho de Mariana Ramos, psicóloga clínica (CRP 06/189237), e facilitar o contato pelo WhatsApp.

## Executar localmente

Na raiz do repositório:

```sh
python3 -m http.server 8000
```

Acesse `http://localhost:8000`. O site utiliza HTML, CSS e JavaScript, sem instalação de dependências ou etapa de build.

## Estrutura

- `index.html`: apresentação, motivos para buscar terapia, sobre Mariana, atendimento, abordagem, dúvidas e contato.
- `styles.css`: identidade visual, fontes locais e layouts responsivos.
- `script.js`: menu móvel e ano do rodapé.
- `privacy.html` e `404.html`: páginas auxiliares.
- `assets/`: ilustrações, fotografia, fontes e imagem de compartilhamento.

## Imagens e fontes

O site carrega `pardal.webp` e `ramo.webp`, derivados das ilustrações originais em SVG. A fotografia fornecida em `foto.jpeg` tem versões responsivas em `mariana-480.webp` e `mariana-768.webp`, com carregamento adiado fora da primeira seção. Os originais permanecem disponíveis para futuras edições.

`favicon.png` e `favicon.ico` são versões pequenas do passarinho. `compartilhamento.jpg` é a imagem de prévia com 1200 × 630 pixels.

A família Barlow Condensed é servida localmente: o arquivo existente usa peso 275, e os títulos e a apresentação do serviço usam a versão regular, peso 400. A fonte regular foi obtida do [repositório oficial Google Fonts](https://github.com/google/fonts/tree/main/ofl/barlowcondensed). A licença está em `assets/fonts/OFL-BarlowCondensed.txt`.

## Conteúdo profissional

Formação e trajetória só devem ser acrescentadas com dados confirmados pela Mariana. A duração e a frequência dos encontros também precisam de confirmação antes de incluir números específicos. Os comentários em `index.html` indicam esses pontos.

## Publicação e compartilhamento

O conteúdo pode ser publicado pela raiz do repositório no GitHub Pages. Todos os caminhos de arquivos são relativos, para funcionar também em uma subpasta.

Quando o endereço público for definido, atualize `og:image` e `twitter:image` em `index.html` para a URL absoluta de `assets/compartilhamento.jpg`. Acrescente também `og:url` e o link `rel="canonical"` com o endereço oficial da página. O domínio não está presumido no código.

Após publicar, confira se a imagem de compartilhamento responde diretamente no endereço público e se os links de WhatsApp e Instagram estão corretos.
