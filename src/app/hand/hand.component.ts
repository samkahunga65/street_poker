import { Component, OnInit } from '@angular/core';
import { Card, Suit, Value } from '../component_classes/card';
import {CdkDragMove, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.sass']
})
export class HandComponent implements OnInit {
  cards : Card[]  = [Card.createCard(Suit.CLUBS, Value.FIVE), Card.createCard(Suit.CLUBS, Value.QUEEN),Card.createCard(Suit.HEARTS, Value.FIVE), Card.createCard(Suit.SPADES, Value.SIX)];
  play : Card[] = [Card.createCard(Suit.CLUBS, Value.FIVE)]
  playAreaHovered : Boolean = false;

  constructor() { }

  ngOnInit(): void {
    // this.cards = this.generateFullDeck();
    // this.pushrandomcards()
  }

  move(event: CdkDragMove) {
    console.log(event)
  }

  overed(e: any) {
    console.log("on")
  }

  private pushrandomcards() : void {
    
    if (this.cards.length > 0) {
      this.cards = this.cards.slice(0, this.cards.length-1)
    }
    setTimeout(this.pushrandomcards.bind(this), 3000)

  }

  private generateFullDeck() : Card[] {
    var deck : Card[] = [];
    const suits =  [Suit.CLUBS, Suit.DIAMONDS, Suit.HEARTS, Suit.SPADES]
    const values = [Value.ACE, Value.KING, Value.QUEEN, Value.JACK, Value.TWO, Value.THREE, Value.FOUR, Value.FIVE, Value.SIX, Value.SEVEN, Value.EIGHT, Value.NINE, Value.TEN]

    // dump cards
    suits.forEach((suit, indexS) => {
      values.forEach((value, indexV) => {
        deck.push(Card.createCard(suits[indexS], values[indexV]))
      })
    })

    // shuffle
    deck = this.shuffleDeck(deck);

    return deck;
  }

  private shuffleDeck(deck:Card[]): Card[] {
    var result = deck.sort( () => .5 - Math.random())
    
    return result;
  }


}
