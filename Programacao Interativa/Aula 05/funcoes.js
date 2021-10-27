// Funções Simples
// Ex 1.
function convert(x) {
    return x * 2.5;
};

console.log(convert(21));

// Ex 2.
function site(string) {
    return  'http://www.' + string + '.com.br';
};

console.log(site('google'));

// Ex 3.
function afirmation(string) {
    return string + '!';
};

console.log(afirmation('google'));

// Ex 4.
function cachorro(x){
    return x * 7;
};

console.log(cachorro(10));

// Ex 5.
function salario(x) {
    return x / 160;
}

console.log(salario(16000));

// Ex 6.
function imc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
};

console.log(imc(70,1.70));

// Ex 7.
function maiusculo(string) {
    return string.toUpperCase();
};

console.log(maiusculo('gritando!'));

// Ex 8.
function tipoDado(dado) {
    return typeof dado;
};

console.log(tipoDado(123));

// Ex 9.
function raio(x) {
    return (2 * Math.PI * x).toFixed(2);
};

console.log(raio(5));
