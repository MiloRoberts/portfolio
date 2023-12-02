function evaluateHand(chosenHand, htmlElement) {
    let handValue = 0;
    chosenHand.hand.forEach((theCard) => {
        switch (theCard.rank) {
            case "2":
                handValue += 2;
                break;
            case "3":
                handValue += 3;
                break;
            case "4":
                handValue += 4;
                break;
            case "5":
                handValue += 5;
                break;
            case "6":
                handValue += 6;
                break;
            case "7":
                handValue += 7;
                break;
            case "8":
                handValue += 8;
                break;
            case "9":
                handValue += 9;
                break;
            case "10":
            case "J":
            case "Q":
            case "K":
                handValue += 10;
                break;
            case "A":
                handValue += 11;
                break;
        }
        // console.log(theCard.rank);
        // console.log(handValue);
    });
    if (handValue > 21) {
        chosenHand.hand.forEach((theCard) => {
            if (theCard.rank == "A") {
                if (handValue > 21) {
                    handValue -= 10;
                }
            }
        });
    }
    document.getElementById(htmlElement).innerHTML = handValue;
    return handValue;
}

export default evaluateHand;