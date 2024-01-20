let numero = 10;
let contador = 0;
let total = 0;

while (contador <= numero){
    if(contador %2 === 0){
        total += contador;
    }
    contador++;
}
console.log(total);

let up = true;
let args = process.argv;
while(up){ 
    if(args.includes('stop')){
        break;
    }
}
