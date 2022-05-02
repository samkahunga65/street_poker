export class Card {
    suit: Suit;
    value: Value;

    constructor (suit: Suit, value: Value) {
        this.suit = suit;
        this.value = value;
    }
    public static createCard (suit: Suit, value: Value): Card {
        return new Card(suit, value);
    }
    public getId ():String {
        return `${this.valueToId(this.value)}${this.suitToId(this.suit)}`;
    }
    public valueToId (x:Value):String {
        var str = '';
        switch (+x) {
            case Value.ACE: {
                str = "A"
                break
            }
            case Value.TWO: {
                str = "2"
                break
            }
            case Value.THREE: {
                str = "3"
                break
            }
            case Value.FOUR: {
                str = "4"
                break
            }
            case Value.FIVE: {
                str = "5"
                break
            }
            case Value.SIX: {
                str = "6"
                break
            }
            case Value.SEVEN: {
                str = "7"
                break
            }
            case Value.EIGHT: {
                str = "8"
                break
            }
            case Value.NINE: {
                str = "9"
                break
            }
            case Value.TEN: {
                str = "10"
                break
            }
            case Value.JACK: {
                str = "J"
                break
            }
            case Value.KING: {
                str = "K"
                break
            }
            case Value.QUEEN: {
                str = "Q"
                break
            }
            default: {
                break;
            }
        }
        return str;
    }
    public suitToId (y:Suit):String {
        var str = '';
        switch (+y) {
            case Suit.CLUBS: {
                str = '♣'
                break
            }
            case Suit.SPADES: {
                str = '♠'
                break
            }
            case Suit.HEARTS: {
                str = '♥'
                break
            }
            case Suit.DIAMONDS: {
                str = '♦'
                break
            }
            default: {
                break
            }
        }
        return str;
    }
}

export enum Value {
    KING,
    QUEEN,
    JACK,
    ACE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN
}

export enum Suit {
    HEARTS,
    DIAMONDS,
    CLUBS,
    SPADES
}