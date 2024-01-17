<h1 align='center'>  7DaysOfCode • Lógica  </h1>

<div align='center'>

![js](https://img.shields.io/badge/JavaScript-0D1117?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

</div>

# explicando o desafio

Nesse desafio foi trabalhado as estruturas de controle de fluxo, condicionais e loops em JavaScript, com o uso do <strong>Do While</strong> e do <strong>While</strong>.

## uso de Loop em JavaScritp

 <blockquote>  Em JavaScript, <strong>loops </strong>são estruturas de controle de fluxo que permitem a repetição de um bloco de código enquanto uma condição especificada for verdadeira. Existem diferentes tipos de loops em JavaScript, sendo os mais comuns o  <strong>for </strong>, o  <strong>while </strong> e o  <strong>do-while </strong>.
 </blockquote>

 ## for 

O loop for é frequentemente utilizado quando você sabe antecipadamente quantas vezes deseja que o bloco de código seja executado. Ele possui três partes principais dentro dos parênteses:

1. Inicialização: Geralmente usado para inicializar uma variável de controle.

2. Condição de Continuação: A execução do loop continua enquanto esta condição for verdadeira.

3. Expressão de Iteração: Geralmente usado para incrementar ou decrementar a variável de controle.

Exemplo:

```
for (let i = 0; i < 5; i++) {
    console.log(i); // Imprime números de 0 a 4
}
```

## while 

O loop while é útil quando você não sabe antecipadamente quantas vezes o bloco de código será executado, e a condição é verificada antes da execução do bloco.

Exemplo:
```
let contador = 0;

while (contador < 5) {
    console.log(contador); // Imprime números de 0 a 4
    contador++;
}
```


## do-while 

Semelhante ao while, mas a condição é verificada após a execução do bloco de código. Isso garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa desde o início.

Exemplo:
```
let contador = 0;

do {
    console.log(contador); // Imprime números de 0 a 4
    contador++;
} while (contador < 5);

```

Os loops são fundamentais para a programação, pois permitem automatizar tarefas repetitivas e simplificar o código. No entanto, é importante ter cuidado para evitar loops infinitos, onde a condição nunca se torna falsa, o que poderia causar travamento ou lentidão na execução do programa.
