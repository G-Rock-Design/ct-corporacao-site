# CT Corporação

Site institucional em português, React + TypeScript + Vite. Componentes em `src/components`, seções em `src/sections`, dados e contatos em `src/content.ts`, tokens e estilos em `src/index.css`.

## Executar

```sh
npm ci
npm run dev
```

Use o endereço mostrado pelo Vite. Para produção: `npm run build`. Para conferir a compilação: `npm run preview`. Verificação estática: `npm run lint` (somente código do projeto, excluindo os sites de referência).

## Design e conteúdo

Referência: `ref/design_system.html`. Preservados Outfit para títulos, Inter para leitura, Oswald para o destaque fotográfico, fundos neutros, teal/azul, letras em contorno, botões em cápsula, raio de 24 px, bordas finas e ícones Lucide. O vermelho e o azul originais do logotipo foram preservados. A paleta explícita do sistema tem prioridade sobre as cores estimadas da marca.

Extensões: composição editorial em duas colunas, largura máxima de 1152 px, unidade de espaçamento de 8 px e adaptações em 640/900/1050/1400 px. Foco visível, menu com estado acessível, fechamento por Escape e mudança de largura, link para pular conteúdo, âncoras compensadas e respeito a movimento reduzido. Conteúdo permanece visível sem animações de entrada. Sem carregamentos assíncronos ou formulários que exijam estados de erro; imagens têm tamanho reservado e alt descritivo.

A foto real aparece na abertura e na estrutura; não há galeria porque existe apenas uma foto da academia. WebP de 640 e 1200 px com srcset; logo proporcional, sem redesenho, em WebP. Originais preservados em `public/fotos`. Não foram usadas fotografias dos sites de referência.

## Antes de publicar

- Validar WhatsApp (21) 99757-2052 e os horários extraídos da captura.
- Confirmar número e bairro: relato indica Parque Uruguaiana; captura indica 507, Jardim Primavera. A interface usa apenas avenida, cidade e UF. Não há marcador de mapa.
- Confirmar funcionamento aos domingos e feriados.
- Enviar logotipo em arquivo de melhor qualidade, preferencialmente com fundo transparente.
- Enviar mais fotos originais do salão e, se desejado, fotos dos donos com identificação e autorização confirmadas.
- Informar domínio para configurar canonical, og:url e imagem social com URL absoluta. Título, descrição e metadados sociais textuais já estão preparados.
- Avaliações, preços e nomes dos donos foram omitidos por ausência de informações verificadas.

A prévia é local; o site não foi publicado.

## Verificações realizadas

- Compilação TypeScript/Vite e lint aprovados.
- Inspeção visual no navegador em 320, 390, 768 e 1440 px; sem overflow horizontal nas medições.
- Menu móvel: abrir, Escape (retorna foco ao botão), selecionar seção (fecha e transfere foco).
- Um H1, todas as âncoras resolvidas, imagens carregadas, nenhum link vazio ou botão dentro de link, nenhum erro de console.
- Destinos e mensagem dos links de WhatsApp conferidos; nenhum envio de mensagem realizado. A titularidade do número depende da validação do responsável.
- Contrastes dos pares principais calculados: cinza sobre grafite 8,3:1; teal escuro sobre branco 5,2:1; texto cinza sobre branco 6,2:1; teal claro sobre grafite 10:1 (aproximados).
- Movimento reduzido e cores forçadas têm tratamento CSS; não foi realizada auditoria com leitor de tela nem teste em aparelhos físicos.
