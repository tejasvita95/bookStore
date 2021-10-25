import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/admin/Model/Book';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public item_qty: number = 0;
  public item: BookModule = new BookModule();
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.grandTotal);
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  incrementQty(item: any){
    item.quantity += 1;
    console.log(this.item_qty + 1);
    this.grandTotal = this.cartService.getTotalPrice();
    }
    
    //decrements item
    
    decrementQty(item: any){
    if(item.quantity-1 < 1){
      item.quantity = 1;
      console.log('item_1->' + item.quantity)
    }
    else{
      item.quantity -= 1;
      
    }
    this.grandTotal = this.cartService.getTotalPrice();
    }

}
