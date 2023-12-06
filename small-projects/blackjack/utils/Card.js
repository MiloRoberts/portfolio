import { suits, suitSymbols, ranks, rankSymbols } from './cardData.js';

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    getSuit() {
        return this.suit;
    }

    getRank() {
        return this.rank;
    }

    getCardImage() {
        return (
            suitSymbols[suits.indexOf(this.suit)] +
            rankSymbols[ranks.indexOf(this.rank)]
        );
    }

    // displayCard(chosenHand, index) {
    //   let toPrint = "";
    //   toPrint +=
    //     "<h1>" +
    //     suitSymbols[suits.indexOf(chosenHand.hand[index].suit)] +
    //     rankSymbols[ranks.indexOf(chosenHand.hand[index].rank)] +
    //     "</h1>";
    //   document.getElementById("dealer-hand").innerHTML += toPrint;
    // }
}

export default Card;