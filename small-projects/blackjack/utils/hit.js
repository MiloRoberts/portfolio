import addToHand from "./addToHand.js";
import determineWinner from "./determineWinner.js";
import evaluateHand from "./evaluateHand.js";

function hit(blackjackDeck, playerHand, dealerHand) {
    playerHand.drawCard(blackjackDeck);
    addToHand("player-hand", playerHand, playerHand.hand.length - 1);
    if (evaluateHand(playerHand, "player-value") > 21) {
        // alert("You go bust. Dealer wins.");
        // setTimeout(() => {
        //     window.location.reload();
        // }, 1000);
        determineWinner(playerHand, dealerHand);
    }
}

export default hit;