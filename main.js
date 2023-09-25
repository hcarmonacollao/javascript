let contador = 0;
let rest = 0;
function resto(num,divisor){
    return num % divisor;
}
let numero = parseInt(prompt('Ingrese un N° entero:'));
if (numero >=0){
    for(let i=1; i<=numero; i++ ){
        rest = resto (numero,i);
        if (rest==0){
            contador=contador+1;
        }
    }
    if (contador>2){
        alert(numero +' no es un n° Primo');
    }else{
        alert(numero + ' es un n° primo');
    }
}else{
    alert('Ingrese números enteros y positivos')
}
