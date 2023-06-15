import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class CadastroTelefone extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados de telefone...')
        let numero = this.entrada.receberTexto('Qual o número do telefone?')
        let ddd = this.entrada.receberTexto('Qual o DDD?')
        let telefone = new Telefone(numero, ddd)
        this.cliente.Telefones.push(telefone)
    }

}