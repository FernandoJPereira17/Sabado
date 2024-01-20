// let operacao = 'soma';

// switch (operacao) {

//     case 'soma':
//     case 'somar':
//         console.log(1 + 1);
//         break;

//     case 'subtrair':
//         console.log(2 - 1);
//         break;

//     case 'subtrair':
//         console.log(2 - 1);
//         break;

//     case 'multi':
//         console.log(2 * 5);
//         break;

//     case 'divisao':
//         console.log(6 / 2);
//         break;

//     default:
//         console.log("operação inválida!");
//         break;
// }

//Não incluir else, caso contrário faça a lógica em if ao invés de else...
// if (typeof operacao != 'string'){
//     console.log("Operação Inválida");
//     return;
// }

// if (operacao === 'soma' || operacao === 'somar') {
//     console.log("Operação igual a 0");
// } else if (operacao === 'subtrair') {
//     console.log(2 - 1);
// }
// // } else {
//     console.log("Operação Inválida");
// }

function calculadora(operacao){
    let operacoesValidas = ['somar', 'subtrair', 'multi', 'divisao'];

    // if (typeof operacao != 'string' || !operacoesValidas.includes(operacao)){
    //     return "Operação Inválida!";
    // }    
    if (!operacoesValidas.includes(operacao)){
        return "Operação Inválida!";
    }
    if (operacao === 'soma' || operacao === 'somar'){
        return 1+1;
    }
    if (operacao === 'subtrair'){
        return 10-5;
    }
    if (operacao === 'multi'){
        return 2*4;
    }
    if (operacao === 'divisao'){
        return 2/4;
    }

    return false;
}
let resultado = calculadora('teste');
console.log(resultado);

