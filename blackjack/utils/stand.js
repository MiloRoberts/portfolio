import addToHand from "./addToHand.js";
import evaluateHand from "./evaluateHand.js";
import determineWinner from './determineWinner.js';

function stand(blackjackDeck, playerHand, dealerHand) {
    dealerHand.drawCard(blackjackDeck);
    addToHand("dealer-hand", dealerHand, dealerHand.hand.length - 1);
    evaluateHand(dealerHand, "dealer-value");
    while (
        evaluateHand(dealerHand, "dealer-value") <=
        evaluateHand(playerHand, "player-value") &&
        evaluateHand(dealerHand, "dealer-value") < 17
    ) {
        dealerHand.drawCard(blackjackDeck);
        addToHand("dealer-hand", dealerHand, dealerHand.hand.length - 1);
    }
    setTimeout(() => {
        determineWinner(playerHand, dealerHand);
    }, 0);
}

export default stand;