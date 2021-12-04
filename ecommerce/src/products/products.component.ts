import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-products',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
  }
)
export class ProductsComponent{
  title="Products";
  total={
    quantity:0,
    totalPrice:0
  };
 products =[{
   id: 1,
   name:"ipone",
   price: 100000,
   quantityInOrder:0
 },
   {
     id:2,
     name:"Samsung",
     price: 20000,
     quantityInOrder:0
   },{
   id:3,
     name: "asus",
     price: 50000,
     quantityInOrder:0
   }];

  addToCArt(product:any){
   product.quantityInOrder +=1;
   // this.getTotal();
  }


  getTotal(){
   this.products.forEach(item=>{
     this.total.quantity+= item.quantityInOrder;
     this.total.totalPrice+= ( item.quantityInOrder * item.price );
   })
  }
}
