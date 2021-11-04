// ------------ ATRIBUIÇÃO ------------ //
// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40;
idade = 28;


// ------------ ARITMÉTICOS ------------ //
// Nos permitem fazer operações matemáticas

10 + 15; // => Soma
10 - 15; // => Subtração
10 * 15; // => Multiplicação
10 / 15; // => Divisão
15++;    // => Incremento de um em um: 15 + 1
15--;    // => Decremento de um em um: 15 - 1
15 % 5;  // => Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2;  // => Módulo. O resto obtido da divisão de 15 por 2: 1


// ------------ COMPARAÇÃO SIMPLES ------------ //
// Nos permitem fazer comparações de 2 valores, devolvendo verdadeiro ou falso
// Sempre usar o símbolo Maior > ou Menor < antes do Igual =

15 > 15;  // Maior que => false
15 >= 15; // Maior ou igual a => true
10 < 15;  // Menor que => true
10 <=15;  // Menor ou igual a => true
10 == 15; // Igualdade => false
10 != 15; // Desigualdade => true


// ------------ COMPARAÇÃO ESTRITA ------------ //
// Nos permitem comparar o valor e o tipo de dado também

10 === "10"; // Igualdade estrita => false
10 !== "15"; // Desigualdade estrita => true


// ------------ COMPARAÇÃO LÓGICA ------------ //
// Nos permitem combinar valores booleanos, trazendo resultado booleano também
// Existem 3 operadores na comparação lógica, e(and), ou(or), negação(not)

(10 > 15) && (10 != 20) => false;
(12 % 4 == 0) && (12 != 24) => true;
// AND(&&) => todos os valores devem ser TRUE(Verdadeiro) para que o resultado seja verdadeiro
(10 > 15) || (10 != 20) => true;
(12 % 5 == 0) || (12 != 12) => false;
// OR (||) => Ao menos um valor deve ser TRUE(Verdadeiro) para que o resultado seja verdadeiro
!false => true;
!(20 > 15) => false;
// NOT(!) => Nega a condição, se era FALSE(Falso), será TRUE(Verdadeiro) e vice-versa
