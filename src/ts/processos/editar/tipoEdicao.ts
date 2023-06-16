import Processo from "../../abstracoes/processo";
import MenuTipoEdicao from "../../menus/menuTipoEdicao";
import EditarDependente from "./editarDependente";
import EditarTitular from "./editarTitular";

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
                this.processo = new EditarTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}