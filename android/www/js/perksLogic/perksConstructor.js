export async function createPerks() {
  const perksToFind = []; //Acá irían las perks a buscar cuando agreguemos el filtro.
  fetch("../www/JSON/perks.JSON")
    .then((r) => r.json())
    .then((data) => {
      const perkContainer = document.getElementById("tienda");
      data.forEach((p) => {
        const perkElement = document.createElement("button");
        perkElement.classList.add("perk");
        const imageElement =
          p.tipo === "CPS" ? "mano" : p.tipo === "CPC" ? "brazo" : "coin";
        perkElement.innerHTML = `
            <div class="perk-info">
                <div class="perk-name">${p.nombre}</div>
                <div class="perk-desc">
                    ${p.description}
                </div>
                </div>
                <div class="perk-number">
                <div class="perk-value">${p.costo}</div>
                <div class="perk-img ${imageElement}"></div>
                <div class="perk-cant">0000000000</div>
            </div>`;
        perkContainer.appendChild(perkElement);
      });
    });
}
