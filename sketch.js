function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(245, 240, 230);

  let roxo = color(115, 70, 160);
  let amarelo = color(255, 200, 40);

  let transicao = map(mouseX, 0, width, 0, 1);
  transicao = constrain(transicao, 0, 1);

  let corDegrade = lerpColor(roxo, amarelo, transicao);

  // Degradê de tamanho
  let tamanho = map(mouseX, 0, width, 30, 90);
  tamanho = constrain(tamanho, 30, 90);

  // Condição 1: muda o espaçamento da composição
  let espacamento;

  if (mouseX < width / 2) {
    espacamento = 100;
  } else {
    espacamento = 100;
  }

  for (let x = 100; x <= 700; x += espacamento) {
    for (let y = 100; y <= 500; y += espacamento) {
      noStroke();
      fill(corDegrade);
      circle(x, y, tamanho);
    }
  }

  // Condição 2: clique do rato
  if (mouseIsPressed) {
    fill(255, 200, 40);
    stroke(115, 70, 160);
    strokeWeight(5);
    circle(mouseX, mouseY, 120);
  } else {
    noStroke();
  }
}