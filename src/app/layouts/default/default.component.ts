import { Component, OnInit,Inject,SimpleChanges } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import {DefaultService} from './default.service';
import {Default} from './default';
import {Gridsize} from './gridsize';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  providers:[DefaultService]
})

//class for form-view
export class DefaultComponent implements OnInit {

  private gridsizes :Gridsize[];
  private gridsizeobject:Gridsize;
  constructor(public dialog: MatDialog,
    private defaultService:DefaultService) { 
    

  }
  productttttt:string;
  customername:string;
  validitydate:string;
  payment:string;
  price:number;
  defaultEntity:Default;
  gridObj:Gridsize;
  id:number;
  gridoveralltotal:number;
  lengthvar:number;
  totalval:number;
  //totalval=15000;


  ngOnInit() {
    

    this.customername='Customer1';
    this.validitydate='07-14-2020';
    this.payment='Paytm';
    this.price=1000;
    this.totalval=0;
    this.getAllGridsizes();
    this.gettotal();
  }
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['gridsizes']) {
      this.gettotal();
    }
}
  getAllGridsizes() {
    this.defaultService.findAll().then(
      gridsizes => {
    this.gridsizes = gridsizes;
    this.lengthvar = gridsizes.length;
    },
    
    err => {
    console.log(err);
    }
   );
  }
  


   gettotal() {
    this.defaultService.getTotalValue().then(
      temp=>{
        this.totalval=temp;
      });
    }
    
    filterdate(){
    this.defaultService.filterdategrid(this.validitydate).then(
      gridsizes => {
    this.gridsizes = gridsizes;
    },
    err => {
    console.log(err);
    }
    );
    }
    saveGridRows( id:number){
      let product = (<HTMLInputElement>document.getElementById('product')).value;
      // var p = document.getElementById('product');
      // p.value = product;
      let description = '';
      let orderedquantity = '0';
      let uom = '';
      let analyticTags = '';
      let unitPrice = '0';
      let taxes = '0';
      let subtotal = '0';
      let total = '0';
      let date = '';
      let overalltotal = 0;
      let gridsizevar = new Gridsize(
        id,product,description,Number(orderedquantity),uom,analyticTags,Number(unitPrice),Number(taxes),Number(subtotal),Number(total),date,Number(overalltotal));
      this.defaultService.saveGridRow(gridsizevar).then(
        gridsizes => {
      this.gridsizes = gridsizes;
      },
      err => {
      console.log(err);
      }
      );
this.productttttt = product;
      }

    
    createGridRow() {
      let id =this.id+1;
      let product = '';
      let description = '';
      let orderedquantity = '0';
      let uom = '';
      let analyticTags = '';
      let unitPrice = '0';
      let taxes = '0';
      let subtotal = '0';
      let total = '0';
      let date = '';
      let overalltotal = 0;
      let gridsizevar = (new Gridsize(id,product,description,Number(orderedquantity),uom,analyticTags,Number(unitPrice),Number(taxes),Number(subtotal),Number(total),date,Number(overalltotal)));
      this.defaultService.createGridRow(gridsizevar).then(
        gridsizes => {
      this.gridsizes = gridsizes;
      this.gridoveralltotal = this.gridsizes[0].overalltotal;
      },
      err => {
      console.log(err);
      }
      );
      this.gettotal();
      }
  onClickSend(){
    window.location.href="https://www.google.com/gmail/";
  }
 
  myFunction(){
    alert("This document is being printed");
  }
  OnCustomers(event:any){
    this.customername=event.target.value;
    this.defaultEntity.customername = event.target.value;
  }
  OnDate(event:any){
    this.validitydate=event.target.value;
    this.defaultEntity.validitydate = event.target.value;
  }
  OnPayment(event:any){
    this.payment=event.target.value;
    this.defaultEntity.payment = event.target.value;
  }
  savePatients(){
    this.defaultEntity = new Default(this.customername,this.validitydate,this.payment,this.price);
    this.defaultService.createEmployee(this.defaultEntity);
  }
  OnPrice(event:any){
    this.price=event.target.value;
    this.defaultEntity.price = event.target.value;
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
    cust:this.customername,
    pust:this.price,
    vast:this.validitydate,
    past:this.payment,
};  
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, dialogConfig);
   this.savePatients();
}
 

}
@Component({
  selector: 'app-default',
  templateUrl: './dialog.overview.example.html',
})

//Class for Dialog for showing selected user inputs
export class DialogOverviewExampleDialog {

  customername:string;
  validitydate:string;
  payment:string;
  price:string;
  //defaultEntity:Default;
  defaultComponent:DefaultComponent;

  constructor(

    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        this.customername=data.cust;
        this.validitydate=data.vast;
        this.payment=data.past;
        this.price=data.pust;
     }
     
     save() {
      this.dialogRef.close();
  }
    

  close() {
      this.dialogRef.close();
  }

}
