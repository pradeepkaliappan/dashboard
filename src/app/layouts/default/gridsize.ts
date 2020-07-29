//Entity for Grid Inbox.
export class Gridsize{
    id:number;
    product:string
    description:string
    orderedquantity:number
    uom:string
    analyticTags:string
    unitPrice:number
    taxes:number
    subtotal:number
    total:number
    date:string
    overalltotal:number
    constructor(id:number,product:string, description:string, 
        orderedquantity:number, uom:string,analyticTags:string,unitPrice:number,taxes:number,subtotal:number,total:number,date:string,
        overalltotal:number){
            this.id=id;
    this.product = product;
    this.description = description;
    this.orderedquantity = orderedquantity;
    this.uom = uom;
    this.analyticTags = analyticTags;
    this.unitPrice = unitPrice;
    this.taxes = taxes;
    this.subtotal = subtotal;
    this.total = total;
    this.date = date;
    this.overalltotal = overalltotal;
    }
    }