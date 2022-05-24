//Class abstrada que so serve para ser herdada e nunca instanciada

import {Cliente} from "../Cliente.js"

export class Conta{
  
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){//se alguma instancia receber = Conta faça ex: const contanormal = new Conta();
            throw new Error ("Você não pode instanciar um objeto do tipo Conta diretamente");//forçando um erro 
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;
    }
    set cliente(novoValor){//aqui estou dizendo que, FORA da class posso atribuir algum valor  chamando apenas por .cliente(valor que queira colocar) obs:aqui dentro da class tenho que usar o _cliente
        if(novoValor instanceof Cliente){//se o valor que queira colocar for uma class (instaceof Cliente) faça
        this._cliente = novoValor;//esse atributo privado _cliente vai recever = o valor que coloquei
        }
    }

    get cliente(){//get serva para deixar publico para conseguir ver o _cliente usando o .cliente
        return this._cliente;//retorna o _cliente 
    }

    
    get saldo(){//usando o get e o nome de saldo, deixo publico para conseguirem apenas ver o saldo
        return this._saldo;//retornando o valor de _saldo se alguem chamar so pelo .saldo
    }
   
    
    //este metodo especifico sacar eh abstrato, as outras class tem que sobreescrevelo

    sacar(valor){//funcao sacar, vai ter (valor)
        throw new Error("O método Sacar da class Conta é abstrato");//colocando o erro para se algum dev esquecer de sobreescrever esse metodo em outra class
    }
    _sacar(valor, taxa){
        valor = valor * taxa ;
        if (this._saldo >= valor) {//se o saldo deste conta  >= ao valor faça
            this._saldo -= valor;
            // return valor; esta função caberia o return para me avisar o valor, porem coloquei o console.log
            console.log(`\n Sacado R$${valor} da conta de: ${this.cliente.nome} resta na sua conta: R$${this.saldo},00`)
            return;//so o return ele pausa a funcao se caso ja feita e for verdade a condição
        } else {
            console.log(`\n Saldo INSUFICIENTE  para sacar R$${valor}, seu saldo atual é de: R$${this.saldo},00`);
        }
    }

    depositar(valor){
        if (valor > 0){
            this._saldo += valor;
            console.log(`\n Foi depositado um valor de R$${valor},00, na conta de: ${this.cliente.nome} seu saldo é de: R$${this.saldo},00`);
            return;
        }else{
            console.log(`ERROR, Verifique o valor digitado!!!!`);
        }
    }
//funcao de transferencia
    transferir(valor, conta){//transferir o valor para a conta
        this.sacar(valor);//usando esta funcao sacar que tem nessa class
        conta.depositar(valor);//usando a funcao .depositar , nao coloquei this pq nao vai ser na mesma conta
    }
}