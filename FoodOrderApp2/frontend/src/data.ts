import { Food } from "./app/shared/models/food";
import { Tag } from "./app/shared/models/tag";

export  const sample_foods: Food[] = [
    {
        id:1,
        name:'MeatBall',
        price: 20,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food9.jpg',
        tags: ['FastFood', 'meatballs']
      },

      {
        id:2,
        name:'Burger',
        price: 30,
        cookTime: '20-30',
        favorite:false,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.0,
        imageUrl: 'assets/food1.jpg',
        tags: ['FastFood', 'Hamburger']
      },

      {
        id:3,
        name:'Chicken Lollipop',
        price: 50,
        cookTime: '30-60',
        favorite:true,
        origins: ['Australia', 'middle-east', 'china'],
        stars: 4.5,
        imageUrl: 'assets/food3.jpg',
        tags: ['FastFood', 'Chicken']
      },

      {
        id:4,
        name:'Chicken Biryani',
        price: 150,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.8,
        imageUrl: 'assets/food2.jpg',
        tags: ['FastFood', 'Chicken']
      },

      {
        id:5,
        name:'Grill Chicken',
        price: 200,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food4.jpg',
        tags: ['FastFood', 'Chicken']
      },

      {
        id:6,
        name:'Chicken Soup',
        price: 100,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food5.png',
        tags: ['FastFood', 'Soup']
      },

      {
        id:7,
        name:'French Fries',
        price: 80,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food6.jpg',
        tags: ['FastFood', 'Fry']
      },
      {
        id:8,
        name:'Chicken Tandoori',
        price: 300,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food7.jpg',
        tags: ['FastFood', 'Chicken']
      },

      {
        id:9,
        name:'IceCream',
        price: 20,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food8.jpg',
        tags: ['FastFood', 'Soup']
      },

      {
        id:10,
        name:'Mutton Paya',
        price: 60,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food10.jpg',
        tags: ['FastFood', 'Mutton']
      },

      {
        id:11,
        name:'Pizza',
        price: 20,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food11.jpg',
        tags: ['FastFood', 'Pizza']
      },

      {
        id:12,
        name:'Mutton Grill',
        price: 20,
        cookTime: '20-30',
        favorite:true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food12.jpg',
        tags: ['FastFood', 'Mutton']
      },
]

export const sample_tags:Tag[] = [
    {name: 'All', count: 14},
    {name: 'Chicken', count: 14},
    {name: 'Pizza', count: 14},
    {name: 'FastFood', count: 14},
    {name: 'Mutton', count: 14},
    {name: 'Hamburger', count: 14},
    {name: 'Fry', count: 14},
    {name: 'Soup', count: 14}
]