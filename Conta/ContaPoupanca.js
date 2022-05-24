import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
    super(saldoInicial, cliente, agencia);//super esta se referenciando a classe mae, no caso a conta

    }
    

    sacar(valor){//funcao sacar, vai ter (valor)
        let taxa = 1.02; //colocando uma funcao sacar diferente com taxa para conta corrente
        this._sacar(valor, taxa);//vindo la da class Conta, estou usando o _sacar que eh privado pq esta class herda la da Conta
        return;
    }
} 