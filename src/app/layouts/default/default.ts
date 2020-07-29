//Entity for Data above Grid.
export class Default{
    customername:string;
    validitydate:string;
    payment:string;
    price:number;
    constructor(customername:string,validitydate:string,payment:string,price:number){
        this.customername=customername;
        this.validitydate= validitydate;
        this.payment=payment;
        this.price=price;
    }
}