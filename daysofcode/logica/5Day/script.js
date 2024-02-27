// arrays para cada categoria de alimentos
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

// loop principal para adicionar alimentos às listas de compras
while (true) {
  let pergunta = prompt(
    "Você deseja adicionar um alimento à sua lista de compras?"
  );

  // verif. se o usuário deseja adicionar um alimento
  if (pergunta.toLowerCase() === "sim") {
    let produto = prompt("Qual alimento você deseja inserir?");
    let categoria = prompt(
      "Qual categoria esse alimento se encaixa?"
    ).toLowerCase();

    // adiciona o alimento à lista correspondente com base na categoria
    switch (categoria) {
      case "frutas":
        frutas.push(produto);
        break;
      case "laticínios":
        laticinios.push(produto);
        break;
      case "congelados":
        congelados.push(produto);
        break;
      case "doces":
        doces.push(produto);
        break;
      default:
        alert("Categoria inválida, produto não adicionado");
    }
  }
  // verif. se o usuário não deseja mais adicionar alimentos
  else if (pergunta.toLowerCase() === "não") {
    break;
  }
  // Caso o usuário não digite uma resposta válida
  else {
    alert("Você não digitou uma resposta válida!");
  }
}
// exibe a lista de compras para o usuário
console.log("Lista de compras:");
console.log(`Frutas: ${frutas}`);
console.log(`Laticínios: ${laticinios}`);
console.log(`Congelados: ${congelados}`);
console.log(`Doces: ${doces}`);
