let numeroSorteado = Math.floor(Math.random() * 10);
let chute;
let tentativasRestantes = 3;

// loop que controla as tentativas do usuário.
for (let i = 1; i <= 3; i++) {
  do {
    chute = prompt(
      `Tentativa ${i}: Entre 0 e 9, qual é o seu chute para o número sorteado? Você ainda tem ${
        tentativasRestantes - i
      } tentativas.`
    );

    // verif. se o chute é vazio, null ou não é um número de 1 dígito.

    if (chute === "" || chute === null || !/^(\d)$/.test(chute)) {
      alert("Por favor, insira apenas um número de 1 dígito.");
    }
  } while (chute === "" || chute === null || !/^(\d)$/.test(chute));

  // verif. se o chute do usuário é igual ao número sorteado e retorna uma reposta se sim ou não.

  if (parseInt(chute) === numeroSorteado) {
    alert(`Parabéns, você acertou o número! Era o ${chute}`);
    break;
  }
}

if (parseInt(chute) !== numeroSorteado) {
  alert(`Você errou! O número sorteado era ${numeroSorteado}.`);
}
