export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
        this._senha;
    }
    autenticar(senha){//criando metodo para autenticar (a senha)
        if (senha == this._senha){//se a senha que digitou for == a senha criada la do .cadastraSenha, faça
            console.log("Login efetuado");
        }else{
            console.log("Login ou senha incorreto");
        }
        return;
    }
    cadastrarSenha(senha){//para cadastrar a senha no index, tem que chamar esta funcao
        this._senha = senha;
    }
}