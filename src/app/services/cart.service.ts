import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product{
  id:number;
  name:string;
  price:number;
  amount:number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  data:Product[]=[
    {id:0,name:"Pizza",price:8.99,amount:1},
     {id:1,name:"Spagetti",price:18.99,amount:13},
      {id:2,name:"Chawarma",price:81.99,amount:4},
       {id:3,name:"Poulet",price:85.99,amount:1},

  ];
  private cart=[];
  private cartItemCount = new BehaviorSubject(0);

getProducts()
{
  return this.data;

}
getCart(){
  return this.cart;
}
getCartItemCount()
{
  return this.cartItemCount;
}
addProduct(product){
  let added  =false;
  for(let p of this.cart)
  {
    if(p.id === product.id)
    {
      p.amount +=1;
      added = true;
      break;
    }
  }
  if(!added)
  {
    this.cart.push(product);

  }
  this.cartItemCount.next(this.cartItemCount.value + 1);
}

decreaseProduct(product){
  for(let [index, p] of this.cart.entries())
  {
    if(p.id === product.id)
    {
      p.amount -=1;
      if(p.amount ==0)
      {
        this.cart.splice(index, 1);
      }
    }
  }
  this.cartItemCount.next(this.cartItemCount.value -1);

}
removeProduct(product)
{
  for(let[index,p] of this.cart.entries())
  {
    if (p.id===product.id)
    {
      this.cartItemCount.next(this.cartItemCount.value-p.amount);
      this.cart.splice(index,1);
    }
  
}}





  constructor() { }
}
