import { vanishUnvanish } from "../utilityFunctions/vanishData.js";
import updateVisual from "../utilityFunctions/updateVisual.js";
export async function backToMenu(player) {
  document
    .getElementById("game-one-salir-button")
    .addEventListener("click", function () {
      //resetear stats
      vanishUnvanish("vanish", document.getElementById("game-one-player"));
      vanishUnvanish("unvanish", document.getElementById("main_menu"));
      vanishUnvanish("vanish",document.getElementById("tienda"));
      player.resetMe();
      updateVisual(player);
    });
}
