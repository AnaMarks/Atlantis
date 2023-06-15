import Impressor from "../interfaces/impressor";
import Telefone from "../modelos/telefone";

export default class ImpressorTelefone implements Impressor {
    private telefones: Telefone[]
    constructor(telefones: Telefone[]) {
        this.telefones = telefones
    }
    imprimir(): string {
        let impressao = `Telefones: \n`
        this.telefones.forEach(telefone => {
            impressao = impressao + `${telefone.Ddd} ${telefone.Numero}\n`
        })
        return impressao
    }
}