import Menu from "../interfaces/menu";

export default class menuEditDependente implements Menu {
    mostrar(): void {
        console.log(`****************************`)
        console.log(`| Por favor, selecione uma opção...`)
        console.log(`----------------------`)
        console.log(`| 1 - Editar nome`)
        console.log(`| 2 - Editar nome social`)
        console.log(`| 3 - Editar documentos`)
        console.log(`****************************`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}