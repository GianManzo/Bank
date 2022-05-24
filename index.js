//IMPORTANTE: com o node.js para usar o arq como module, usar import e etc.. é necessário conf no terminal:
//npm init 
// nome projeto:-- 
// descrição... 
// o arqu que vai começar iniciando... 
// cmd de teste.. /
// repositorio no git... 
// keywords 
// author 
//licese geralmente deixa padrao (aperta enter) 
//depois do enter vai criar o .json
//vai la no .json, coloca a virgula na ultima linha escrita e add "type": "module"

import {Cliente} from "./Cliente.js"//importando a minha class, aqui eu informo onde ela esta entre{}o nome exato dela from "caminho".js
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 123456789);
const gerente = new Gerente("Ricardo", 5000, 19098726734);

diretor.cadastrarSenha(123456);
gerente.cadastrarSenha(123);

const diretorLogado = SistemaAutenticacao.login(diretor, 123456);

const gerenteLogado = SistemaAutenticacao.login(gerente, 1232);


const cliente1 = new Cliente("Ricardo", 11122233309, 123);//atribuindo as classes criadas para os novos clientes / class sempre em arq separados
//na linha acima ()coloquei o nome e o cpf pq criei o metodo construtor la na class Cliente

const login = SistemaAutenticacao.login(cliente1, 123);
console.log(login)


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);//atribuindo a class criada para a conta corrente de ricardo
//estou atribuindo o nome, cpf, pois criei o metodo construtor la na class Cliente


contaCorrenteRicardo.depositar(300);
contaCorrenteRicardo.sacar(150);
console.log(contaCorrenteRicardo);


const cliente2 = new Cliente("Alice", 88822233309);//estou atribuindo o nome, cpf, pois criei o metodo construtor la na class Cliente

const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);//coloquei no () o valor incial, agencia e cliente, pois criei o construtor la na class Conta

//o .cliente posso usar fora da class, pq la na class ContaCorrente, eu "meio que blindei" o atributo para usar esse nome e para seu valor ser somente atribuido se for uma class

contaCorrenteAlice.depositar(500);
contaCorrenteAlice.sacar(150);
console.log(contaCorrenteAlice)

contaCorrenteRicardo.transferir(20, contaCorrenteAlice);//usando a funcao transferir
console.log(cliente2)//dessa maneira com o get consigo acessar o atributo privado _cliente, pois para usar fora da class permiti o .cliente
console.log(ContaCorrente.numeroDeContas);//numero de contas

const contaPoupanca = new ContaPoupanca(100, cliente1 , 1001);
console.log(contaPoupanca);

const contaSalario = new ContaSalario(cliente1);

