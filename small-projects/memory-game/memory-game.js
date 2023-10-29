$(document).ready(function () {
  const cards = [
    "./images/carrot.png",
    "./images/carrot.png",
    "./images/cherry.jpg",
    "./images/cherry.jpg",
    "./images/eggplant.jpg",
    "./images/eggplant.jpg",
    "./images/grape.png",
    "./images/grape.png",
    "./images/kiwi.png",
    "./images/kiwi.png",
    "./images/lemon.jpg",
    "./images/lemon.jpg",
    "./images/tomato.jpg",
    "./images/tomato.jpg",
    "./images/watermelon.jpg",
    "./images/watermelon.jpg",
  ];

  function mixCards() {
    for (let i = 0; i <= 15; i++) {
      let tempCard = cards[i];
      let randomIndex = Math.floor(Math.random() * 16);
      cards[i] = cards[randomIndex];
      cards[randomIndex] = tempCard;
      $("#currentScore>span").text(correctPairs);
    }

    for (let i = 0; i <= 15; i++) {
      $("#card" + i + ">img").attr({
        src: cards[i],
      });
    }

    $(".card>img").delay(10000).fadeTo(300, 0);
  }

  $("#memoryCards>div").addClass("card");

  $(".card").attr({
    style: "border: 3px, solid, black",
    style: "margin-bottom: 3px",
  });

  $(".card").css({
    display: "inline-block",
    border: "3px solid black",
    paddingTop: "11px",
    height: "75px",
    width: "75px",
  });

  $(".card>img").css({
    height: "70%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  });

  $("#gameStart").click(function () {
    mixCards();
  });

  let revealedCards = 0;
  let currentCard = "";
  let correctPairs = 0;
  let highScore = 0;

  $(".card>img").click(function () {
    $(this).fadeTo(300, 1);
    revealedCards++;
    if (revealedCards == 2) {
      if ($(this).attr("src") == currentCard) {
        correctPairs++;
        $("#currentScore>span").text(correctPairs);
      } else {
        $(".card>img").fadeTo(100, 1);
        correctPairs = 0;
        alert("Sorry. Try Again.");
      }
      currentCard = "";
      revealedCards = 0;
    } else {
      currentCard = $(this).attr("src");
    }
    if (correctPairs == 8) {
      alert("You win! Congratulations!");
    }
    if (correctPairs > highScore) {
      highScore = correctPairs;
      $("#highScore>span").text(highScore);
    }
  });

  $("#gameStart").mouseover(function () {
    $("#gameStart>span").even().css({
      color: "red",
    });
    $("#gameStart>span").odd().css({
      color: "green",
    });
  });

  $("#gameStart").mouseout(function () {
    $("#gameStart>span").css({
      color: "black",
    });
  });
});
