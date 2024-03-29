/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener("deviceready", onDeviceReady, false);
import clickerButtons from "../js/clickerStart/buttons.js";
import updateVisual from "../js/utilityFunctions/updateVisual.js";
import { vanishUnvanish } from "../js/utilityFunctions/vanishData.js";

export const player = {
  clicks: 0,
  clickPerClick: 1,
  autoClick: 0,
  acumulatedClicks: 0,
  tiendaAbierta: false,
  makeManualClick: function () {
    this.clicks = this.clickPerClick + this.clicks;
    this.acumulatedClicks = this.acumulatedClicks + this.clickPerClick;
  },
  makeAutoClick: function () {
    this.clicks = this.autoClick + this.clicks;
    this.acumulatedClicks = this.acumulatedClicks + this.autoClick;
    updateVisual();
  },
  autoClickIntervalId: null,
  toggleAutoClick: function () {
    if (!this.autoClickIntervalId) {
      this.autoClickIntervalId = setInterval(() => {
        this.makeAutoClick();
      }, 1000);
    } else {
      clearInterval(this.autoClickIntervalId);
      this.autoClickIntervalId = null;
    }
  },
  stopAutoClick: function () {
    clearInterval(this.autoClickIntervalId);
    this.autoClickIntervalId = null;
  },
  resetMe: function () {
    console.log("resetting");
    this.clicks = 0;
    this.clickPerClick = 1;
    this.autoClick = 0;
    this.acumulatedClicks = 0;
    this.tiendaAbierta = false;
    this.stopAutoClick();
  },
};

clickerButtons();

const mainButton = document.getElementById("mainButton");

mainButton.addEventListener("click", function eventClick() {
  player.makeManualClick();
  updateVisual();
  mainButton.removeEventListener("click", eventClick); //TEMPORAL. ACA VA EL BLOQUEO PARA QUE SE REPRODUZCA LA ANIMACION DEL BOTON
  setTimeout(() => {
    mainButton.addEventListener("click", eventClick); //TEMPORAL. ACA VA EL BLOQUEO PARA QUE SE REPRODUZCA LA ANIMACION DEL BOTON
  }, 0); //TEMPORAL. ACA VA EL LIMITE DE CLICKS QUE UNO PUEDE HACER
});

document
  .getElementById("game-one-tienda-button")
  .addEventListener("click", function () {
    if (player.tiendaAbierta) {
      vanishUnvanish("vanish", document.getElementById("tienda"));
      player.tiendaAbierta = false;
      return;
    }
    vanishUnvanish("unvanish", document.getElementById("tienda"));
    player.tiendaAbierta = true;
  });

function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}
