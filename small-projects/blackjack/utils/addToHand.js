function addToHand(element, chosenHand, index) {
    let toPrint = "";
    toPrint += "<h1>" + chosenHand.hand[index].getCardImage() + "</h1>";
    document.getElementById(element).innerHTML += toPrint;
}

export default addToHand;