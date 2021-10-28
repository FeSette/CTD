// Calculadora - Nível I

function adicionar(x,y){ 
    return x + y;
};

function subtracao(x,y){
    return x - y;
};

function multiplicacao(x,y){
    return x * y;
};

function divisao(x,y){
    return x / y;
};

// Calculadora - Nível II

console.log('-------------- Teste de Operações / Calculadora --------------')
console.log('Adição: '+ adicionar(5,5));
console.log('Subtração: '+ subtracao(10,5));
console.log('Multiplicação: '+ multiplicacao(5,5));
console.log('Divisão: '+ divisao(10,5));

// Calculadora = Nível III - Funções Extras

function quadradoDoNumero(x){
    let quadrado =  multiplicacao(x,x);
    //let quadrado = Math.pow(x,2);
    return console.log('O quadrado do número '+x+' é: '+quadrado);
};

function mediaDeTresNumeros(x,y,z){
    let soma = x + y + z;
    let media = divisao(soma,3);
    return console.log('A média dos números '+x+', '+y+' e '+z+' é: '+media);
};

function calculaPorcentagem(x,y){
    let totalPorcentagem = multiplicacao(x,y)/100;
    return console.log(totalPorcentagem + ' é '+ y + '% de ' + x );
};

function geradorDePorcentagem(x,y){ 
    let porcentagem = multiplicacao(x,100)/y;
    return console.log(x + ' é '+ porcentagem + '% de ' + y );
};

console.log();
console.log('-------------- Funções Extras --------------');
quadradoDoNumero(3);
mediaDeTresNumeros(7,8,9);
calculaPorcentagem(300,15);
geradorDePorcentagem(2,200);