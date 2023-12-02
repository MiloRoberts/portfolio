import evaluateHand from "./evaluateHand.js";

function determineWinner(playerHand, dealerHand) {
    if (evaluateHand(dealerHand, "dealer-value") > 21) {
        alert("Dealer goes bust. You win.");
        window.location.reload();
    } else if (
        evaluateHand(dealerHand, "dealer-value") ==
        evaluateHand(playerHand, "player-value")
    ) {
        alert("The game is a tie.");
        window.location.reload();
    } else if (
        evaluateHand(dealerHand, "dealer-value") >
        evaluateHand(playerHand, "player-value")
    ) {
        alert("The dealer wins.");
        window.location.reload();
    } else if (
        evaluateHand(dealerHand, "dealer-value") <
        evaluateHand(playerHand, "player-value")
    ) {
        alert("You win.");
        window.location.reload();
    }
}

export default determineWinner;