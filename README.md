# Instituto Sementes do Amanhã

Site estático demonstrativo de uma ONG, feito para atividades acadêmicas de HTML5 semântico, formulários, design system e layout responsivo.

## Páginas

- `index.html`: apresentação da ONG e contato.
- `projetos.html`: projetos sociais, voluntariado e doações.
- `cadastro.html`: formulário de participação com validações nativas.

## Estrutura

```text
projeto-ong/
├── index.html
├── projetos.html
├── cadastro.html
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   └── estilos.css
    ├── js/
    │   ├── feedback.js
    │   └── menu.js
    └── images/
        ├── sementes-comunidade.webp
        ├── sementes-comunidade.jpg
        └── sementes-comunidade.png
```

O CSS compartilhado define cores, cinco tamanhos de texto, espaçamentos modulares e regras responsivas com Grid e Flexbox em cinco breakpoints: 1200, 1024, 700, 520 e 380 px. Até 700 px, o menu pode ser aberto pelo botão hambúrguer; o submenu de projetos usa o elemento nativo `details`. A página de projetos mostra badges e um alerta informativo. No cadastro, o envio válido exibe uma confirmação acessível em toast e modal nativo (`dialog`); os dados não são enviados a um servidor. O JavaScript atualiza o estado acessível do menu e controla a confirmação do formulário. A página inicial escolhe WebP e oferece PNG e JPEG como alternativas para a ilustração.

## Como visualizar

Abra `index.html` em um navegador. O projeto usa HTML, CSS e JavaScript simples, sem frameworks ou dependências de instalação.
