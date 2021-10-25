import { Component, OnInit } from '@angular/core';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  public totalItem : number =0;

  public totalItemWish: number =0;
isLoggedIn: boolean = false;

  constructor(private matSnackBar: MatSnackBar, private route: Router, private cartService:CartService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.cartService.getBooks()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    this.wishlistService.getBooks()
    .subscribe(res=>{
      this.totalItemWish = res.length;
    })
  }

  viewCartItems(){
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.clear();
  }

  isAdminLoggedIn(){
    if(localStorage.getItem("token")=== null)
    {
        this.matSnackBar.open('Please Login First','ok',{
          duration: 5000
        });
        
        this.route.navigateByUrl('login');
         
    }
  }

}
