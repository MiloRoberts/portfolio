import addToHand from './addToHand.js';
import evaluateHand from './evaluateHand.js';

function playBlackjack(blackjackDeck, playerHand, dealerHand) {
    dealerHand.drawCard(blackjackDeck);
    addToHand("dealer-hand", dealerHand, dealerHand.hand.length - 1);
    evaluateHand(dealerHand, "dealer-value");
    for (let i = 2; i > 0; i--) {
        playerHand.drawCard(blackjackDeck);
        addToHand("player-hand", playerHand, playerHand.hand.length - 1);
    }
    evaluateHand(playerHand, "player-value");
}

export default playBlackjack;