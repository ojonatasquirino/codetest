const nome = prompt("Qual o seu nome? ");
const idade = parseInt(prompt("Quantos anos você tem?"));
const linguagem = prompt("Qual linguagem de programação você está estudando?");

// adicionando uma funcionalidade

if (idade < 12) {
  alert(
    "Uau! Que bom você já está estudando programação tão jovem! Você irá longe muito jovem se continuar se dedicando!"
  );
}

if (idade > 18) {
  alert("Continue estudando programação! Nunca é tarde para começar!");
}

let resposta = prompt(
  `Você gosta de estudar ${linguagem}? Responda com 1 para SIM ou 2 para NÃO!`
);

//  validação para garantir que a resposta seja 1 ou 2
while (resposta !== "1" && resposta !== "2") {
  alert("Por favor, responda com 1 para SIM ou 2 para NÃO!");
  resposta = prompt(
    `Você gosta de estudar ${linguagem}? Responda com 1 para SIM ou 2 para NÃO!`
  );
}

if (resposta === "1") {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
}

if (resposta === "2") {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
}

document.write(
  `Olá, ${nome}! Você tem ${idade} anos e já está aprendendo ${linguagem}! Parabéns!`
);
