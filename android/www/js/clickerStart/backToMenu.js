import { vanishUnvanish } from "../utilityFunctions/vanishData.js";
export async function backToMenu() {
  document
    .getElementById("game-one-salir-button")
    .addEventListener("click", function backToMenu(){
    //resetear stats
    vanishUnvanish("vanish", document.getElementById("game-one-player"));
    vanishUnvanish("unvanish", document.getElementById("main_menu"));
    });
}
