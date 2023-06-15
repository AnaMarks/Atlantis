import Processo from "../../abstracoes/processo";
import MenuTipoEdicao from "../../menus/menuTipoEdicao";
import DeletarCliDependente from "./deletarCliDependente";
import DeletarClienteTi from "./deletarClienteTi";

export default class TipoDelecao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEdicao()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new DeletarClienteTi()
                this.processo.processar()
                break
            case 2:
                this.processo = new DeletarCliDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}