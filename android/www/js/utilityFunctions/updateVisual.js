import { player } from "../index.js";
export default async function updateVisual() {
  document.getElementById(
    "game-one-click-infoClicks-auto"
  ).textContent = `Clicks por segundo: ${player.autoClick}`;
  document.getElementById(
    "clickPerClick"
  ).textContent = `clicks manuales X ${player.clickPerClick}`;
  document.getElementById(
    "totalClicks"
  ).textContent = `clicks totales : ${player.acumulatedClicks}`;
  document.getElementById(
    "mainButton-clicks"
  ).textContent = ` ${player.clicks}`;
}
