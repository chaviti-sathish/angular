import { Food } from "./food";


export class CartItem{

    /*constructor(food:Food){
        this.food = food;
    }
    food!:Food;*/
    
    constructor(public food:Food){}
        quantity:number = 1;
        price: number  = this.food.price;
    
}