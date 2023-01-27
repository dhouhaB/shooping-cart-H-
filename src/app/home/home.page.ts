import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


cart =[];
products=[];
cartItemCount:BehaviorSubject<number>;


  constructor(private cartService:CartService,private modalCtrl:ModalController) {}
ngOnInit(): void {


  this.products=this.cartService.getProducts();
  this.cart =this.cartService.getCart();
  this.cartItemCount = this.cartService.getCartItemCount();
  

}
addToCart(product)
{
this.cartService.addProduct(product);
}
async openCart()
{
  let modal= await this.modalCtrl.create({
    component:CartModalPage,
    cssClass:'cart-modal'
  });
  modal.present();
}














}
