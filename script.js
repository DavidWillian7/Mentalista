var numero = parseInt(Math.random() * 11);

function chutar(){
    let chute = parseInt(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");
    let aux;
    if(chute == numero){
        resultado.innerHTML = "Parabéns. Você acertou o número secreto!";
        aux = numero;
        numero = parseInt(Math.random() * 11);
        while(aux == numero){
            numero = parseInt(Math.random() * 11); 
        }
    }else if(chute < 0 || chute > 10){
        resultado.innerHTML = "Erro. Você deve digitar um número de 0 a 10!"
    }else if(chute < numero){
        resultado.innerHTML = "Você errou, seu chute é MENOR que o número secreto!";
    }else{
        resultado.innerHTML = "Você errou, seu chute é MAIOR que o número secreto!";
    }
}