function draw() {
  background(0);
  movimentaBolinha();
  verificaColisaoBorda();
  mostraBolinha();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente)
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
}


//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro/2; 
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;




//variáveis minha raquete
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;
let colidiu = false


//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let wRaqueteOponente = 10;
let hRaqueteOponente = 90;
let velocidadeYOponente;
let chanceDeErrar = 0;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


//sons do jogo
let raquetada
let ponto


function setup() {
  createCanvas(600, 400);
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro); 
}


function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
}



function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){velocidadeXBolinha *= -1} 
  
  if (yBolinha + raio > height || yBolinha - raio< 0) {velocidadeYBolinha *= -1}
  }


function mostraRaquete(x,y){
  rect(x,y,wRaquete,hRaquete);
}


function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){yRaquete -= 5}
  if (keyIsDown(DOWN_ARROW)){yRaquete += 5}
}


function verificaColisaoRaquete(x,y){
 colidiu =
collideRectCircle(x,y,wRaquete,hRaquete,xBolinha,yBolinha,raio);
 if (colidiu){velocidadeXBolinha *= -1}
}


function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - hRaquete / 2 - 40;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar 
 calculaChanceDeErrar()
}

 
function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}


function marcaPonto(){
  if (xBolinha > 590)
  {meusPontos += 1}
  if (xBolinha < 10)
  {pontosDoOponente +=1}
}


function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 50){
    chanceDeErrar = 70}
  } 
  else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 60){
    chanceDeErrar = 75}
  }
}



  
