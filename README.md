Projeto-teste com intuito de demonstrar minhas habilidades, pensamentos, conhecimentos e explicar as decisões pelas quais fui seguindo:


projeto iniciado através do yarn create react-app
tecnologias e metodologias usadas:
    ReactJS,
    styled components,
    react-icons,
    mobile first,
    React-router-DOM



sobre o projeto realizado:
sei que existe diferença entre as cores do layout original para o que criei, nesse caso recomendaria que o projeto fosse apresentado pelo figma ou alguma ferramenta similar, na qual
o desenvolvedor pudesse extrair exatamente a cor, margens, preenchimentos e fontes que o projeto deveria possuir, assim como acredito que no dia a dia seja de extrema importancia uma boa comunicação entre todos da equipe,
desde designers, passando pelo front end, e indo até o back end/testers, assim criando uma sintonia na qual não só os clientes sairiam mais satisfeitos mas como também geraria mais
destaque à empresa também.

fiz a remoção dos arquivos desnecessários para início de projeto, mantendo basicamente o App e index.js, logo após procurei montar através de 2 estruturas diferentes, uma delas sendo similar ao que tenho visto no bootcamp GoStack da Rocketseat, que consiste em isolar os componentes(que estão na pasta components) comuns numa pasta para que possam ser aproveitados em diversas páginas (levando em conta a grande vantagem do ReactJS, que seria sobre o Single Page Application - SPA - que torna a aplicação bem mais leve
ao usuário, evitando carregar várias vezes informações que não tem necessidade de serem recarregadas), e outra seguindo um modelo similar, porém com apenas um arquivo index.js e um styles.js dentro da sub pasta que indica a página(com intuito de demonstrar que possuo boa adaptação e capacidade pra me adequar aos padrões da empresa).

Modelo página 1: Seguindo esse pensamento, criei uma pasta chamada 'pages' para colocar todas as páginas que vão conter no projeto, porém, usando uma tática de criar uma outra pasta dentro dela, com o nome da página( Dashboard, por exemplo) e criar sub pastas com cada componente que a página vai possuir, assim podendo deixar o código mais isolado (tentando aplicar o conceito de apenas uma função para cada arquivo) e também pra já tornar mais fácil a localização em caso de manutenção ou alguma mudança. E, também, com cada sub pasta contendo um index.js (que retornaria o componente em si) e um styles.js (pois prefiro adotar o styled components para tornar ainda mais isolado/simples e menos verboso).

Modelo página 2: Similar ao primeiro, porém com apenas um index.js e um styles.js dentro da pasta da página.

Foi criada, também, uma pasta global, com um arquivo styles.js no qual se refere a toda estilização global das páginas.
Optei por não utilizar do flexbox na hora de posicionar os componentes/elementos em tela, pois ouvi de um amigo que isso é um dos problemas na hora de criar um site/app para web e mobile, então fiz colocando algumas divs/sections a mais, para dar o mesmo efeito e não precisar refatorar na hora de versionar para mobile.

Adicionei ao logo antes do Squad Management Tool um Link que leva de volta a página Dashboard.



