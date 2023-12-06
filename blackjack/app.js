import Deck from "./utils/Deck.js";
import Hand from "./utils/Hand.js";
import playBlackjack from './utils/playBlackJack.js';
import hit from './utils/hit.js';
import stand from './utils/stand.js';

const blackjackDeck = new Deck();
const playerHand = new Hand();
const dealerHand = new Hand();

const hitBtn = document.querySelector('#hit-btn');
const standBtn = document.querySelector('#stand-btn');

hitBtn.addEventListener('click', () => {
  hit(blackjackDeck, playerHand, dealerHand);
});

standBtn.addEventListener('click', () => {
  stand(blackjackDeck, playerHand, dealerHand);
});

playBlackjack(blackjackDeck, playerHand, dealerHand);

// class Purse {
//   constructor() {
//     this.money = 100;
//   }
//   loseMoney(value) {
//     this.money -= value;
//   }

//   winMoney(value) {
//     this.money += value;
//   }
// }

// const userPurse = new Purse();

// blackjackDeck.deck.forEach((element) => {
//   console.log(element);
// });

// console.log(
//   "In user's hand: " + playerHand.hand[0].rank + " " + playerHand.hand[0].suit
// );

// console.log(dealerHand.hand[0].getCardImage());