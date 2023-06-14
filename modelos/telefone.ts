export default class Telefone {
    public ddd: string
    public numero: string

    public clonar(): Telefone {
        let clone = new Telefone()
        clone.ddd = this.ddd
        clone.numero = this.numero
        return clone
    }
}