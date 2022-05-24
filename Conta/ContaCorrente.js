//========== CRIANDO A CLASS CONTA CORRENTE ==========
import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{//criando a class para conta corrente e extends da Conta, onde tem os metodos e etc pricipais.

    static numeroDeContas = 0;//colocando o static para que esse atributo seja usado como um todo, nao so para uma conta especifica para contar
    //agencia;//atributos que as contas correntes iram ter
    //_cliente;//colocando mais um atributo para identificar o cliente (comentei agencia, cliente e saldo pq ja coloquei no construtor)
    //_saldo

    constructor(cliente, agencia ){//construtor para quando fro criar uma nova conta
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas +=1; //falo que: na ContaCorrente em geral. vai ter .numeroDeContas +=1 ou seja, sempre que usar esse construtor ira somar no geral +1 para esse atributo   
         
    }
    sacar(valor){//funcao sacar, vai ter (valor)
        let taxa = 1.1; //colocando uma funcao sacar diferente com taxa para conta corrente
        this._sacar(valor, taxa);//vindo la da class Conta, estou usando o _sacar que eh privado pq esta class herda la da Conta
        return;
    }
}