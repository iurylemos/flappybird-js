console.log("[Dev Iury] - Flappy Bird");

const sprites = new Image();
sprites.src = "./sprites.png";

const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

// [Passarinho]
const medidasPassarinho = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  desenha() {
    //Desenhando o passarinho

    contexto.drawImage(
      sprites,
      medidasPassarinho.spriteX, medidasPassarinho.spriteY, //sprite X e Y
      medidasPassarinho.largura, medidasPassarinho.altura, //Tamanho do recorte do desenho
      medidasPassarinho.x, medidasPassarinho.y, // É onde eu quero que fique dentro do quadro
      medidasPassarinho.largura, medidasPassarinho.altura,
    );
  },
}

// [Chão]
const medidasChao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    contexto.drawImage(
      sprites,
      medidasChao.spriteX, medidasChao.spriteY,
      medidasChao.largura, medidasChao.altura,
      medidasChao.x, medidasChao.y,
      medidasChao.largura, medidasChao.altura
    );

    contexto.drawImage(
      sprites,
      medidasChao.spriteX, medidasChao.spriteY,
      medidasChao.largura, medidasChao.altura,
      (medidasChao.x + medidasChao.largura), medidasChao.y,
      medidasChao.largura, medidasChao.altura
    );


  },
};

// [Plano de fundo]
const medidasPlanoFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    //Pintando o fundo
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
      sprites,
      medidasPlanoFundo.spriteX, medidasPlanoFundo.spriteY,
      medidasPlanoFundo.largura, medidasPlanoFundo.altura,
      medidasPlanoFundo.x, medidasPlanoFundo.y,
      medidasPlanoFundo.largura, medidasPlanoFundo.altura
    );

    contexto.drawImage(
      sprites,
      medidasPlanoFundo.spriteX, medidasPlanoFundo.spriteY,
      medidasPlanoFundo.largura, medidasPlanoFundo.altura,
      (medidasPlanoFundo.x + medidasPlanoFundo.largura), medidasPlanoFundo.y,
      medidasPlanoFundo.largura, medidasPlanoFundo.altura
    );
  },
};


//Auxilia a botar o quadro de forma mais inteligente possível. De forma infinita
function loop() {
  medidasPlanoFundo.desenha();
  medidasPassarinho.desenha();
  medidasChao.desenha();

  //Fazendo o passarinho cair
  medidasPassarinho.y = medidasPassarinho.y + 1;

  requestAnimationFrame(loop);
}

loop();