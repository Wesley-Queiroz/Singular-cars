var balls = document.querySelector('.balls');
var qtd = document.querySelectorAll('.slides .image');
var atual = 0;
var imagem = document.getElementById('atual');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var rolar = true;

for (let i = 0; i < qtd.length; i++) {
  var div = document.createElement('div');
  div.id = i;
  balls.appendChild(div);
}

document.getElementById('0').classList.add('imgAtual');

var posicao = document.querySelectorAll('.balls div');

for (let i = 0; i < posicao.length; i++) {
  posicao[i].addEventListener('click', () => {
    atual = posicao[i].id;
    rolar = false;

    slide();
  });
}

prev.addEventListener('click', () => {
  atual--;
  rolar = false;

  slide();
});

next.addEventListener('click', () => {
  atual++;
  rolar = false;

  slide();
});

function slide() {
  if (atual >= qtd.length) {
    atual = 0;
  } else if (atual < 0) {
    atual = qtd.length;
  }

  document.querySelector('.imgAtual').classList.remove('imgAtual');
  imagem.style.marginLeft = -1024 * atual + 'px';
  document.getElementById(atual).classList.add('imgAtual');
}

setInterval(() => {
  if (rolar) {
    atual++;
    slide();
  } else {
    rolar = true;
  }
}, 4000);

// modal
function openModal(namemodal) {
  let modal = document.getElementById(namemodal);

  if (typeof modal == 'undefined' || modal == null) {
    return;
  } //se o valor acima for true então ele retorna, pq vai dar erro

  modal.style.display = 'Block'; //se acima for false, então ele executa
}

function closeModal(namemodal) {
  let modal = document.getElementById(namemodal);

  if (typeof modal == 'undefined' || modal == null) {
    return;
  }
  modal.style.display = 'none';
}
