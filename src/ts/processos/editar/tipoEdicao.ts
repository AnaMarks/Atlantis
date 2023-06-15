import Processo from "../../abstracoes/processo";
import MenuTipoEdicao from "../../menus/menuTipoEdicao";
import EditarCliDependente from "./editarCliDependente";
import EditarCliente from "./editarCliente";

export default class TipoEdicao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEdicao()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new EditarCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarCliDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}