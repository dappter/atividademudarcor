function BGchange(cor) {
  document.body.style.backgroundColor = cor;
  const h1 = document.querySelector("h1");

  if (cor.toLowerCase() === "black" || cor === "#000000") {
      h1.style.color = "white";
  } else if (cor.toLowerCase() === "white" || cor === "#FFFFFF") {
      h1.style.color = "black";
  } else {
      h1.style.color = ""; 
  }
}

const cor = prompt("Escreva o nome da cor:");
BGchange(cor);