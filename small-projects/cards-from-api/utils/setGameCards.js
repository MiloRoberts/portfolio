function setGameCards(games, enclosingContainer) {
  if (!games.length > 0) {
    enclosingContainer.innerHTML = "<h2 class='error-message'>No Games Found</h2>";
    return;
  }
  enclosingContainer.innerHTML = "";
  games.map((game) => {
    const {
      title,
      description,
      japaneseRequirement,
      images: { borderlessTitleScreen },
      platform,
      genres,
    } = game;
    const element = document.createElement("div");
    element.classList.add("game-container");
    element.innerHTML = `<div class="game-title-screen-container">
    <img
      class="game-title-screen top-justified"
      src="${borderlessTitleScreen}"
      alt="game title screen"
    />
  </div>
  <div class="hidden-game-content-container">
    <h3 class="game-description hidden-game-content">
      ${description}
    </h3>
    <h4 class="game-japanese-requirement">${japaneseRequirement}</h4>
  </div>
  <div class="empty-game-content-container"></div>
  <div class="unhidden-game-content-container">
    <h2 class="game-title unhidden-game-content">${title}</h2>
    <h3 class="game-platform unhidden-game-content">${platform.manufacturer} ${platform.name
      }</h3>
    <h4 class="game-genres unhidden-game-content">
      ${genres.join(", ")}
    </h4>
  </div>`;
    const titleScreen = element.querySelector(".game-title-screen");
    element.addEventListener("mouseenter", () => {
      titleScreen.classList.add("bottom-justified");
      titleScreen.classList.remove("top-justified");
    });
    element.addEventListener("mouseleave", () => {
      titleScreen.classList.add("top-justified");
      titleScreen.classList.remove("bottom-justified");
    });
    enclosingContainer.appendChild(element);
  });
}

export default setGameCards;
