// O que esses códigos retornam?
// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.

// 1.
let numbers =[22, 33, 54, 66, 72];
console.log(numbers.length);

// 2.
let grupoDeAmigos = [ 
    ["Harry", "Ron", "Hermione"], 
    ["Spiderman", "Hulk", "Ironman"], 
    ["Penélope Glamour", "Pierre Nodoyuna","Patán"] 
];
console.log(grupoDeAmigos[1][0]);

// 3.
let str = 'una string qualquer';
let grupoDeAmigos2 = [ 
    [45, 89, 0], 
    ["Digital", "House", true], 
    ["string", "123","false", 54, true, str] 
];
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1]);

// 4. 
let imprimirInverso = [10, 20, 30];
imprimirInverso.reverse();
console.log(imprimirInverso);

// 4.2
let imprimirInverso2 = [10, 20, 30];
imprimirInverso2.reverse();
imprimirInverso2.reverse();
console.log(imprimirInverso2);
