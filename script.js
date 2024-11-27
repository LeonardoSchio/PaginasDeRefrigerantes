let lista = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let conta = lista.length;
let ativo = 0;

next.onclick = () => {
  let ativacaoAntiga = document.querySelector(".ativo");
  ativacaoAntiga.classList.remove("ativo");

  ativo = ativo >= conta - 1 ? 0 : ativo + 1;
  lista[ativo].classList.add("ativo");
};

prev.onclick = () => {
  let ativacaoAntiga = document.querySelector(".ativo");
  ativacaoAntiga.classList.remove("ativo");

  ativo = ativo <= 0 ? conta - 1 : ativo - 1;
  lista[ativo].classList.add("ativo");
};
