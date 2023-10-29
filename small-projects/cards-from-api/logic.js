import getGamesData from "./utils/getGamesData.js";
import setGameCards from "./utils/setGameCards.js";

const gamesContainer = document.querySelector(".games-container");
const url = "./api/games.json";
const searchBar = document.querySelector('.search-bar');

window.addEventListener("DOMContentLoaded", async () => {
  const data = await getGamesData(url);
  setGameCards(data, gamesContainer);
});

searchBar.addEventListener('keyup', async () => {
  const data = await getGamesData(url);
  const filteredData = data.filter(({ title }) => {
    return title.toLowerCase().includes(searchBar.value.toLowerCase());
  });
  setGameCards(filteredData, gamesContainer);
});
