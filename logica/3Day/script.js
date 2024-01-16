let area;
let aprenderStack;
let seguir;
let nomeDaPessoa = prompt("Qual o seu nome?");

// Fluxo de decisões • condicionais em JS

let respostaArea = prompt(
  "Você pretende seguir para a área de Front-End (1) ou seguir para a área de Back-End (2)?"
);

// Se a escolha for front-end

if (respostaArea == 1) {
  area = "Front-End";

  // Escolhendo Framework JS

  let respostaFramework = prompt(
    "Quer aprender React (1) ou aprender VueJS (2)?"
  );
  if (respostaFramework == 1) {
    aprenderStack = "React";
  } else if (respostaFramework == 2) {
    aprenderStack = "VueJS";
  }

  // Se a escolha for back-end
} else if (respostaArea == 2) {
  area = "Back-End";
  let respostaFramework = prompt("Quer aprender C# (1) ou aprender Java (2)?");
  if (respostaFramework == 1) {
    aprenderStack = "C#";
  } else if (respostaFramework == 2) {
    aprenderStack = "Java";
  }
}

// usuário escolhe se quer ser é especialista ou fullstack

let respostaEspecialista = prompt(
  "Continuar se especializando na área escolhida (1) ou seguir se desenvolvendo para se tornar Fullstack (2)?"
);

if (respostaEspecialista == 1) {
  seguir = "especializando na área escolhida!";
} else if (respostaEspecialista == 2) {
  seguir = "desenvolvendo para se tornar Fullstack!";
}

// exibindo mensagem final
alert(
  `Parabéns, ${nomeDaPessoa}! Você decidiu ser um desenvolvedor ${area} que quer aprender ${aprenderStack} e continuar se ${seguir}`
);

// sobre as tecnologias
let tecnologias = [];
while (true) {
  let respostaTecnologias = prompt(
    "Quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer?"
  );

  // adiciona a tecnologia ao array
  tecnologias.push(respostaTecnologias);

  // pergunta Pergunta se deseja adicionar mais tecnologias
  let tecnologiaAprendizado = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? (sim/não)"
  );

  // Verifica se a resposta é 'não' para encerrar o loop
  if (tecnologiaAprendizado.toLowerCase() !== "sim") {
    break;
  }
}
// lista array de tecnologias escolhidas pelo usuário
alert(
  `Você deseja se especializar ou conhecer as seguintes tecnologias: ${tecnologias.join(
    ", "
  )}`
);
