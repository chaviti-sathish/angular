import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      'assets/images/food1.jpg',
      'assets/images/food2.jpg',
      'assets/images/food3.jpg',
      'assets/images/food4.jpg',
      'assets/images/food5.jpg',
      'assets/images/food6.jpg',
      'assets/images/food7.jpg',
      'assets/images/food8.jpg',
      'assets/images/food9.jpg',
      'assets/images/food10.jpg',
      'assets/images/food11.jpg',
      'assets/images/food12.jpg',
    ]
  }
}
