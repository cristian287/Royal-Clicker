import { player } from "../index.js";
export default async function updateVisual() {
  document.getElementById(
    "game-one-click-infoClicks-auto"
  ).textContent = `Clicks por segundo: ${player.autoClick}`;
  document.getElementById(
    "clickPerClick"
  ).textContent = `multiplicador de clicks manuales: ${player.clickPerClick}`;
  document.getElementById(
    "totalClicks"
  ).textContent = `clicks totales : ${player.clicks}`;
  document.getElementById(
    "mainButton-clicks"
  ).textContent = ` ${player.acumulatedClicks}`;
}
