var nome = "João";

if(nome =="João"){
    
    console.log("Olá");
    console.log("Meu nome é", nome);
}else{
    console.log("Pessoa não identificada");
}

switch (nome){
    case "valor 1":
        console.log("exemplo de switch");
        console.log("exemplo de switch 2 ");
        break;
        default:
    case "João":
        console.log("teste");  
        console.log("teste 2");
        break;
}

for (var i = 0; i<=10;i++){
    console.log("Número", i);
}

var valores = [1,2,3,4,5]
for( var numero in valores){
    console.log("número", numero);
}

var teste = true;
 var cont = 0;
 while (teste ==true){
    cont++;
    console.log("Olá mundo",cont);
    if(cont>=10) teste = false;
 }

 
var teste = true;
var cont = 0;
do{

    cont++;
    console.log("Olá mundo", cont);
    if (cont>=10) teste = false;

}while (teste == true);

 