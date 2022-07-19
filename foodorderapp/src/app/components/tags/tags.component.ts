import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(private foodservice:FoodService) { }

  @Input() foodPageTags?:string[];

  @Input() justifyContent:string = 'center'

  tags?:Tag[];

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.foodservice.getAllTags();
  }

}
