import Card from "./Card.js";
import { suits, ranks } from './cardData.js';

class Deck {
    constructor() {
        this.deck = new Array();

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                let card = new Card(suits[i], ranks[j]);
                this.deck.push(card);
            }
        }
        this.shuffleDeck();
    }

    shuffleDeck() {
        for (let i = 0; i < this.deck.length; i++) {
            let temp = this.deck[i];
            let randomIndex = Math.floor(Math.random() * 51);
            this.deck[i] = this.deck[randomIndex];
            this.deck[randomIndex] = temp;
        }
    }
}

export default Deck;