import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../component_classes/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input()
  card!: Card;
  cardId:String;

  constructor() {}
  

  ngOnInit(): void {
    this.cardId = this.card.getId();
  }

}
