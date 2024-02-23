import { createPlayer } from "../utilityFunctions/createPlayer.js";
export async function startGame(modo) {
  if (modo === "practica") {
    const player = await createPlayer()
  }
}
