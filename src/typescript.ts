//Tipos Primitivos
let numero : number = 150.20;
let nome : string = "Allan";
let booleano : boolean = true;
let qualquer : any = "qualquer coisa";
qualquer = 10;
qualquer = true;

//Arrays
const lista: number[] = [];
lista.push(13, 14, 15, 0.22, -12.22);

//Tupla
const tupla: [number, string, boolean] = [1, "Allan", true];

//Alias (Tipos personalizados)
type Transacao = {
    tipoTransacao: TipoTransacao,
    data : Date,
    valor: number
};

// Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}