let h1 = document.querySelector('.h1Numero'); //00:00:00
let intervalo;

second = 0;
minutes = 0;
horas = 0;


//como colocar o zero a esquerda?

function zeroEsquerda(digito) { // esse digito eu passo as minhas variaveis second, minutes e horas
    if(digito < 10) {
        return '0' + digito
    }else {
        return digito
    }
}

function iniciar() {
     intervalo = setInterval(contador, 1000); // vai ficar executando a minha função a cada 1 segundo.
}

function pausar() {
    //para pausar uso o clearInterval que é para parar a minha função de setInterval

    clearInterval(intervalo); // aqui dentro passo o meu setInterval criado acima na função de iniciar.
}

function parar() {
    // para parar eu uso o clearInterval dnv e coloco os valores 0 na minha variavel seconds, minutes, horas.
    
    clearInterval(intervalo)
    h1.innerHTML = '00:00:00'
    second =0;
    minutes = 0;
    horas= 0;
}

function contador() {
    second++;

    //tenho que verificar quando chegar a 60 segundos para acrescentar nos minutos.

    if(second == 60) {
        minutes++
        second = 0; // tenho que verificar quando os minutos chegar a 60 para acrescentar na minha hora.
        if(minutes == 60) {
            horas++
            minutes=0;
            second=0;
        }
    }

    h1.innerHTML = zeroEsquerda(horas) +':'+ zeroEsquerda(minutes) + ':' +zeroEsquerda(second);
}