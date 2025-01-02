export class Item {
    code: number
    itemName: string
    qty: number

    constructor(code: number, itemName: string, qty: number) {
        this.code = code
        this.itemName = itemName
        this.qty = qty
    }
}