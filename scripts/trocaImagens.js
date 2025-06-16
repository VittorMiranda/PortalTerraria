
function iniciarTrocaImagem(idImagem, listaDeImagens, intervaloMs = 2000) {
    if (!document.getElementById(idImagem)) {
      console.warn(`Elemento com ID "${idImagem}" não encontrado.`);
      return;
    }
  
    if (!Array.isArray(listaDeImagens) || listaDeImagens.length === 0) {
      console.warn('Lista de imagens inválida ou vazia.');
      return;
    }
  
    const imagemElemento = document.getElementById(idImagem);
    let indiceAtual = 0;
  
    setInterval(() => {
      indiceAtual = (indiceAtual + 1) % listaDeImagens.length;
      imagemElemento.src = listaDeImagens[indiceAtual];
    }, intervaloMs);
};

const listaMusgos = ['./img/flora/Argon_Moss.png', './img/flora/Blue_Moss.png', './img/flora/Brown_Moss.png', 
    './img/flora/Green_Moss.png', './img/flora/Helium_Moss.png', './img/flora/Krypton_Moss.png', 
    './img/flora/Lava_Moss.png', './img/flora/Neon_Moss.png', './img/flora/Purple_Moss.png', 
    './img/flora/Red_Moss.png', './img/flora/Xenon_Moss.png' 
];

const listaGrama = ['./img/flora/Grass.png', './img/flora/Corrupt_grass.png', 
    './img/flora/Corrupt_Jungle_grass.png', './img/flora/Crimson_grass.png', 
    './img/flora/Crimson_Jungle_grass.png', './img/flora/Mushroom_grass.png', 
    './img/flora/Jungle_grass.png', './img/flora/Hallowed_grass.png', 
    './img/flora/Ash_grass.png'
];

iniciarTrocaImagem('musgo', listaMusgos, intervaloMs = 2000);
iniciarTrocaImagem('grama', listaGrama, intervaloMs = 2000);