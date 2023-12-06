import evaluateHand from "./evaluateHand.js";

function determineWinner(playerHand, dealerHand) {
    if (evaluateHand(playerHand, "player-value") > 21) {
        alert("You go bust. Dealer wins.");
    } else if (evaluateHand(dealerHand, "dealer-value") > 21) {
        alert("Dealer goes bust. You win.");
    } else if (
        evaluateHand(dealerHand, "dealer-value") ==
        evaluateHand(playerHand, "player-value")
    ) {
        alert("The game is a tie.");
    } else if (
        evaluateHand(dealerHand, "dealer-value") >
        evaluateHand(playerHand, "player-value")
    ) {
        alert("The dealer wins.");
    } else if (
        evaluateHand(dealerHand, "dealer-value") <
        evaluateHand(playerHand, "player-value")
    ) {
        alert("You win.");
    }
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}

export default determineWinner;