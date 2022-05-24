//========== CRIANDO A CLASS CLIENTE ============

 export class Cliente{//criando class para o cliente  / colocar o export para usar em outro arq
    // nome;//atributos que todo cliente ira ter
    // _cpf; deixei comentado pq sempre que criar um construtor eh uma boa pratica declarar e inicializar os atributos direto de dentro do construtor

    constructor(nome, cpf, senha){
        this.nome = nome
        this._cpf = cpf
        this._senha = senha;
    }
    autenticar(){
        return true;
    }
  
    get cpf(){
        return this._cpf;//informando que posso visualizar o atributo privado _cpf usando apenas .cpf
    }   
}