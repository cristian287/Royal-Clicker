import { player } from "../index.js";
import { createPerks } from "../perksLogic/perksConstructor.js";
export async function startGame(modo) {
  if (modo === "practica") {
  }
  player.toggleAutoClick();
  createPerks();
}
