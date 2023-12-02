import addToHand from "./addToHand.js";

function showDealerHand(blackjackDeck, dealerHand) {
    dealerHand.drawCard(blackjackDeck);
    addToHand("dealer-hand", dealerHand, dealerHand.hand.length - 1);
}

export default showDealerHand;