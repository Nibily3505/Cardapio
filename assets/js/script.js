
 let pedido= document.getElementById('pedido').innerHTML;




function insert(pedido){

    var produto= document.getElementById('pedido').innerHTML;
    document.getElementById('pedido').innerHTML= produto + pedido;

}

function price(preço){

    var dinheiro= document.getElementById('preco').innerHTML;
    document.getElementById('preco').innerHTML= dinheiro + preço;

}

function calcular(){

    var resultado= document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML= eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML="Error";
    }
}