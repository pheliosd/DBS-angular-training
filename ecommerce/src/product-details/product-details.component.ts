import { Component} from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
  showToggler=true;
productDetails={
  name:"",
  price:0,
  quantity:0
}
handleToggler(){
  this.showToggler=!this. showToggler;
}

}
