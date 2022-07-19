import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!: Food;

  constructor(private foodservice:FoodService, private activatedRoute:ActivatedRoute, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe(params => {
      if(params['id']){
        this.food = this.foodservice.getFoodById(params['id']);
      }
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cartpage');

  }

}
