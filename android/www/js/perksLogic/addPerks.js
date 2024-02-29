import { player } from "../index.js";
import updateVisual from "../utilityFunctions/updateVisual.js";
export async function addPerks(type, quantity, price) {
  if (player.clicks < price) {
    return;
  }
  player.clicks -= price;
  function addCPS() {
    player.autoClick += quantity;
  }
  function addCPC() {
    player.clickPerClick += quantity;
  }
  function special() {}
  const allTypes = {
    CPS: addCPS,
    CPC: addCPC,
    special: special,
  };
  allTypes[type]();
  updateVisual();
}
