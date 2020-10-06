<img alt="Field" src="https://images.cdn2.stockunlimited.net/preview1300/soccer-banner-with-france-flag_1819372.jpg" />

<h3 align="center">
  Projeto teste - Squad Management Tool
</h3>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Como rodar o projeto</a>&nbsp;&nbsp;&nbsp;
</p>

<blockquote align="center">been there, done that!</blockquote>

<p align="center">
  <a> </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/IgorCastromann/venturus-1.0.0?color=2304D361">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/IgorCastromann/venturus-1.0.0?color=2304D361">
  <img alt="Made by Igor Castro" src="https://img.shields.io/badge/made%20by-Igor Castro-%20?color=2304D361">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/IgorCastromann/venturus-1.0.0?color=2304D361">
</p>


## 💻 Projeto 

Projeto-teste com intuito de demonstrar minhas habilidades, pensamentos, conhecimentos e explicar as decisões pelas quais fui seguindo:

projeto iniciado através do yarn create react-app <br>
tecnologias e metodologias usadas: <br>
    ReactJS,<br>
    styled components,<br>
    react-icons,<br>
    mobile first,<br>
    React-router-DOM,<br>
    React Hooks



<strong>observações sobre o projeto realizado: </strong><br>
  sei que existe diferença entre as cores do layout original para o que criei, nesse caso recomendaria que o projeto fosse apresentado pelo figma ou alguma ferramenta similar, na qual o desenvolvedor pudesse extrair exatamente a cor, margens, preenchimentos, detalhes e fontes que o projeto deveria ter, assim como acredito que no dia a dia seja de extrema importancia uma boa comunicação entre todos da equipe, desde designers, passando pelo front end, e indo até o back end/testers, assim criando uma sintonia na qual não só os clientes sairiam mais satisfeitos, como também geraria mais destaque à empresa também.


<strong>Passo a passo:</strong>
  fiz a remoção dos arquivos desnecessários para início de projeto, mantendo basicamente o App.js e index.js, aproveitei para por em pratica o que tenho visto no bootcamp GoStack da Rocketseat, que consiste em isolar os componentes(que estão na pasta components) comuns numa pasta para que possam ser aproveitados em diversas páginas (levando em conta a grande vantagem do ReactJS, que seria sobre o Single Page Application - SPA - que torna a aplicação bem mais leve ao usuário, evitando carregar várias vezes informações que não tem necessidade de serem recarregadas), e então fiz cada uma das páginas de forma diferente, na Dashboard eu isolei os componentes da própria Dashboard em subpastas, assim isolando mais o código (facilitando, ao meu ver, a manutenção e escalabilidade do projeto) e, na outra, com apenas um arquivo index.js e um styles.js dentro da sub pasta que indica a página(com intuito de demonstrar que possuo boa adaptação e capacidade para me adequar aos padrões da empresa).

<strong>Modelo página 1:</strong> Seguindo esse pensamento, criei uma pasta chamada 'pages' para colocar todas as páginas que vão conter no projeto, porém, usando uma tática de criar uma outra pasta dentro dela, com o nome da página( Dashboard, por exemplo) e criar sub pastas com cada componente que a página vai possuir, assim podendo deixar o código mais isolado (tentando aplicar o conceito de apenas uma função para cada arquivo) e também para já tornar mais fácil a localização em caso de manutenção ou alguma mudança. E, também, com cada sub pasta contendo um index.js (que retornaria o componente em si) e um styles.js (pois prefiro adotar o styled components para tornar ainda mais isolado/simples e menos verboso).

<strong>Modelo página 2:</strong> Similar ao primeiro, porém com apenas um index.js e um styles.js dentro da pasta da página.

  Foi criada, também, uma pasta global, com um arquivo styles.js no qual se refere a toda estilização global das páginas. Optei por não utilizar do flexbox na hora de posicionar os componentes/elementos em tela, pois ouvi de um amigo que isso é um dos problemas na hora de criar um site/app para web e mobile, então fiz colocando algumas divs/sections a mais, para dar o mesmo efeito e não precisar refatorar na hora de versionar para mobile.

  Adicionei ao logo antes do Squad Management Tool um Link que leva de volta a página Dashboard.

  Como a API que vocês recomendaram era paga, e para montar uma API tomaria um tempo que extrapolaria a deadline do projeto, optei por montar utilizando Hooks (useEffect e useState) apenas para demonstrar para o cliente como a página funcionaria, mesmo estando com dados fictícios, e trataria de resolver as pendências junto a minha equipe pra quando ele enviasse um feedback, já estarmos preparados para isso e para possíveis mudanças no projeto.

  A parte de 'Drag and drop' ficou comprometida pelo fato de eu não conseguir utilizar a API e não ter tido tempo de criar uma.

  Não entendi o intuito de colocar uma borda na seção de "top 5", talvez pra dizer quem foi o mais/menos selecionado de cada time? isso não ficou muito claro.


<strong> Since the project is half in portuguese and half in english, here is this section of  README with both languages. </strong>


Test-project to show my skills, way of thinking and explain my decisions along the way.

Project created with yarn create react-app.<br>
Methodologies and technologies used in this project:<br>
ReactJS,<br>
styled components,<br>
react- icons,<br>
mobile first,<br>
React-router-DOM,<br>
React Hooks

<strong>observation about the project:</strong> <br>
I know there is a difference between the original layout and mine, in this case, I would recommend a version of the project in Figma or something similar, so this way the developer can extract the exact color, margins, paddings, details and fonts, Thus I believe that the comunication with all the team should be precise, from the designers, front end, into back end/testers, creating a syntony that not only the clients would be more satisfied with the product, but also the growth of the company by itself.

<strong>Step by step:</strong> <br>
I removed the unnecessary files from the yarn create react-app, keeping basically the app.js and index.js, from the learnings of the bootcamp tha I am on at the moment, I isolated the common components that are used in both pages, so with just one time creating we can use in both pages( using the strongest point of ReactJS, wich is the Single Page Application - SPA to make the site flow lighter, loading only the necessary informations when changing pages/updatind something). So I did a different method on each page, first of all,  in Dashboard, I isolated the components in folders and subfolders, the folder contains the Dashboard by itself, while the subfolders contains each component inside the Dashboard( my teams section, for example), and the second page with just one folder and two files( index.js and styles.js)

<strong>Page 1 model</strong>: Subfolders inside a folder that represents the page by itself, isolating the code to be easier to locate/maintain a specific code. Each of those subfolders contains two files (index.js and styles.js), the styles is in .js because I did the CSS using the styled components.

<strong>Page 2 model</strong>: Almost the same as the first, but with no subfolders(just to prove that I am capable of adapting myself to any pattern).

Using styled components, I build an global folder, with an styles.js inside containing the stylization of the body, :root, etc. All the stylization that are for all the project pages, and I chose to not use the flex box because of the issues converting the web page to mobile(that is the reason of a couple more divs inside the code).


Added a Link back to the dashboard on the Venturus logo (header).

The recommended API was not free, adding the fact that creating a new API would take so long and would compromise the deadline of the project, I chose to build, using (useEffect and useState) some constants to replace the dinamic value but in a way that the client could surf through the site and see how would be the result, so in the right moment I would gather with my team to discuss ways of solving this problem, so by the time he send us a feedback, we would be ready to implement this and modify/add wherever he wants us to.

the 'drag and drop' section was compromised because of the API.

I did not get why there was a clickable section in top 5, so I just did to look like the layout on the test.


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React.JS](https://reactjs.org/)


## 🛰 Como rodar o projeto
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com).
Além disto é bom ter um editor para trabalhar com o código como _VSCode_

## Rodando o Projeto
```bash
$ git clone https://github.com/IgorCastromann/venturus-1.0.0

# Acesse a pasta do projeto no seu terminal/cmd
$ cd venturus-1.0.0

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start


# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```



## :mailbox_with_mail: Get in touch!


<a href="https://www.linkedin.com/in/igor-castro-27470672/" target="_blank" >
  <img alt="Linkedin - Igor Castro" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:castromann@live.com" target="_blank" >
  <img alt="Email - Igor Castro" width="35rem" height="25rem" src="https://img2.gratispng.com/20180401/cwe/kisspng-outlook-com-microsoft-outlook-logo-microsoft-offic-outlook-5ac078594dd532.5951870815225631613188.jpg">
</a> 

---

Made with the spirit of a 🐻 by Igor Castro.









