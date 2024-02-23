import { vanishUnvanish } from "../utilityFunctions/vanishData.js";
import { backToMenu } from "./backToMenu.js";
import { startGame } from "./startGame.js";
export default async function clickerButtons() {
  document
    .getElementById("practiceMode")
    .addEventListener("click", function () {
      startPracticeGame();
    });
  function startPracticeGame() {
    vanishUnvanish("unvanish", document.getElementById("game-one-player"));
    vanishUnvanish("vanish", document.getElementById("main_menu"));
  }
  startGame("practica")
  backToMenu();
}
