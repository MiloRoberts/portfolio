class Hand {
    constructor() {
        this.hand = new Array();
    }

    drawCard(drawnDeck) {
        this.hand.push(drawnDeck.deck.pop());
    }
}

export default Hand;