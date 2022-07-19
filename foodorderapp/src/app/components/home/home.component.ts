import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = []
  constructor(private foodservice:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.foods = this.foodservice.getAll().filter(food => 
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else if(params['tag']){
        this.foods = this.foodservice.getAllFoodsByTag(params['tag'])
          }
      else{
        this.foods = this.foodservice.getAll();
      }
    }) 
  }

}
