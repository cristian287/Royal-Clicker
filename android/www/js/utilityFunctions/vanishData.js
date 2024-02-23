export async function vanishUnvanish(action, element) {
  if (action === "unvanish") {
    element.classList.remove("none");
    return;
  }
  element.classList.add("none");
}
