console.log('-------- Microondas Super Veloz --------');
console.log('Escolha sua opção de comida e seu tempo:');
console.log('1 - Pipoca (Padrão 10 segundos)\n2 - Macarrão (Padrão 8 segundos)\n3 - Carne (Padrão 15 segundos)\n4 - Feijão (Padrão 12 segundos)\n5 - Brigadeiro (Padrão 8 segundos)');
console.log('----------------------------------------\n');

function microondas(comida,tempo) {
    let x = comida;
    let y = tempo;
    switch (x) {
        case 1:
            if (y >= (3*10)){
                console.log('*** KAAAAAAABUUUUUUM *** (EXQUECE, O PAI TA ESTOURADO) ***\n')
            }        
            else if (y >= (2*10)) {
                console.log('Poxa vida, queimou! :(\n')
            }
            else if (y < 10) {
                console.log('Precisa de mais tempo para estourar esses milhos!\n')
            }            
            else {
                console.log('HUM! Pipoca quentinha, bom apetite!! <3\n')
            }
        break;

        case 2:
            if (y >= (3*8)){
                console.log('*** KAAAAAAABUUUUUUM *** (EXQUECE, O PAI TA ESTOURADO) ***\n')
            }        
            else if (y >= (2*8)) {
                console.log('Poxa vida, queimou! :(\n')
            }
            else if (y < 8) {
                console.log('Precisa de mais tempo para amolecer esse macarrão!\n')
            }            
            else {
                console.log('HUM! Macarrão no ponto prontinho, bom apetite!! <3\n')
            }
        break;

        case 3:
            if (y >= (3*15)){
                console.log('*** KAAAAAAABUUUUUUM *** (EXQUECE, O PAI TA ESTOURADO) ***\n')
            }        
            else if (y >= (2*15)) {
                console.log('Poxa vida, queimou! :(\n')
            }
            else if (y < 15) {
                console.log('Vai querer a carne crua mesmo? Bota mais tempo!\n')
            }            
            else {
                console.log('HUM! Macarrão no ponto prontinho, bom apetite!! <3\n')
            }
        break;
        
        case 4:
            if (y >= (3*12)){
                console.log('*** KAAAAAAABUUUUUUM *** (EXQUECE, O PAI TA ESTOURADO) ***\n')
            }        
            else if (y >= (2*12)) {
                console.log('Poxa vida, queimou! :(\n')
            }
            else if (y < 12) {
                console.log('Sério? Sou super, mas nem tanto! Bota mais tempo!\n')
            }            
            else {
                console.log('HUM! Feijão prontinho, bom apetite!! <3\n')
            }
        break;

        case 5:
            if (y >= (3*8)){
                console.log('*** KAAAAAAABUUUUUUM *** (EXQUECE, O PAI TA ESTOURADO) ***\n')
            }        
            else if (y >= (2*8)) {
                console.log('Poxa vida, queimou! :(\n')
            }
            else if (y < 8) {
                console.log('Assim não vai dar! Bota mais tempo!\n')
            }            
            else {
                console.log('HUM! chegou a hora! Brigadeiro pronto, bom apetite!! <3\n')
            }
        break;
        
        default:
            console.log('!!!! Prato Inexistente amigo :( !!!!\n')
            break;
    }
}

// microondas(Opção, Tempo)
microondas(5,8); 