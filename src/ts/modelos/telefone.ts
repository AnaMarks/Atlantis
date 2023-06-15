export default class Telefone {
    private ddd: string
    private numero: string
    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }
    public get Ddd() { return this.ddd }
    public get Numero() { return this.numero }

    public set Ddd(ddd: string) { this.ddd = ddd }
    public set Numero(numero: string) { this.numero = numero }

    public toString(): string {
        return `(${this.ddd}) ${this.numero}`
    }

    // validar o ddd e o numero
    public static validar(ddd: string, numero: string): boolean {
        const regexDdd = new RegExp(/^(\d{2})$/)
// ^ - Indica o início da sequência.
// (\d{2}) - Representa dois dígitos numéricos. A sequência de dígitos está entre parênteses para formar um grupo de captura.
// $ - Indica o final da sequência.

        const regexNumero = new RegExp(/^(\d{8}|\d{9})$/)
// ^ - Indica o início da sequência.
// (\d{8}|\d{9}) - Representa oito ou nove dígitos numéricos. Essa parte da expressão regular usa o operador | para indicar uma alternativa, ou seja, aceita um padrão de oito dígitos ou um padrão de nove dígitos.
// $ - Indica o final da sequência.

        return regexDdd.test(ddd) && regexNumero.test(numero)

    }
}