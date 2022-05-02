import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card, Suit, Value } from '../component_classes/card';
import {CdkDrag, CdkDragMove, CdkDragStart, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.sass']
})
export class HandComponent implements OnInit, AfterViewInit {
  @ViewChild('play_holder', {static: true}) playHolderElement : ElementRef;

  cards : Card[]  = [Card.createCard(Suit.CLUBS, Value.FIVE), Card.createCard(Suit.CLUBS, Value.QUEEN),Card.createCard(Suit.HEARTS, Value.FIVE), Card.createCard(Suit.SPADES, Value.SIX)];
  play : Card[] = [Card.createCard(Suit.CLUBS, Value.FIVE)]
  playAreaHovered : Boolean = false;
  selectedcard : String | null;
  play_holderbottomLine : Number;

  constructor() { }
  ngAfterViewInit(): void {
    const coords = this.playHolderElement.nativeElement.getBoundingClientRect();
    this.play_holderbottomLine = coords.y + coords.height;
  }

  ngOnInit(): void {
    // this.cards = this.generateFullDeck();
    // this.pushrandomcards()
  }

  move(event: CdkDragMove) {
    // console.log(event)
    if (event.pointerPosition.y <= this.play_holderbottomLine && this.selectedcard) {
      this.popCard(this.selectedcard);
    }
  }

  dragged(e:CdkDragStart) {
    console.log(e.source.element.nativeElement.children[0].children[0].className)
    this.selectedcard = e.source.element.nativeElement.children[0].children[0].className
  }

  private pushrandomcards() : void {
    
    if (this.cards.length > 0) {
      this.cards = this.cards.slice(0, this.cards.length-1)
    }
    setTimeout(this.pushrandomcards.bind(this), 3000)

  }
  private popCard (id : String) {
    let index: number | null = null;
    this.cards.forEach((card, i) => {
      if (card.getId() == id) {
        index = i
      }
    })
    if (index != null) {
      let expelledCard = this.cards[index]
      this.play = [...this.play, expelledCard]
      this.cards = this.cards.filter(card => card != expelledCard)
    }
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