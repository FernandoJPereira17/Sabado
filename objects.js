
let carro = {

    cor: 'Cinza-BlackPian',
    placa: 'DC-100',
    ano: 2025,
    ligado: true,
    velocidade: 0,
    cavalo: 1.5,
    acoes: {

        acelerar: function () {
            if (this.ligado) {
                return 'Vrummm';
            }
            return 'Carro Desligado!';
        },
        freiar: function () {
            return 'Iiiiii';
        }
    }
};

//Método Bind() - faz a ligação entre um objeto com outro objeto...
let func = carro.acoes.acelerar.bind(carro);
// console.log(carro.acoes.freiar());
console.log(func());


