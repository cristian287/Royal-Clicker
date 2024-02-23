import {vanishUnvanish} from "../utilityFunctions/vanishData.js"
export default async function clickerButtons() {
  document
    .getElementById("practiceMode")
    .addEventListener("click", function () {
      startPracticeGame();
    });
  function startPracticeGame() {
    vanishUnvanish("unvanish", document.getElementById("game"));
    vanishUnvanish(
      "vanish",
      document.getElementById("main_menu")
    );
  }
};
