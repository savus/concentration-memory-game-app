import { Dataset_Face_Position } from "../constants.js";
import { Card } from "./Card.js";
export class CardFactory {
    buildCardHTML = (data) => {
        const card = document.createElement("div");
        const cardTemplate = `<div class="card-inner">
        <div class="card-front">
          <div class="card-header">
            <div class="name">${data.name}</div>
            <div class="img-container">
              <img src="${data.img}" alt="" />
              <div class="dummy-image">dummy</div>
            </div>
          </div>
          <div class="card-body">
            <div class="stats">Stats</div>
              <div class="stats-container">
                <div class="type">Type: ${data.type}</div>
                <div class="hp">HP: ${data.hp}</div>
                <div class="attack">Attack: ${data.attack}</div>
                <div class="defense">Defense: ${data.defense}</div>
                <div class="attack">special_attack: ${data.special_attack}</div>
                <div class="attack">special_defense: ${data.special_defense}</div>
                <div class="attack">Speed: ${data.speed}</div>
              </div>
            </div>
          </div>
        <div class="card-back">
          <div>back side face down</div>
        </div>
      </div>`;
        card.className = `card ${data.isDummyData ? "is-dummy" : ""}`;
        card.setAttribute(Dataset_Face_Position, "down");
        ``;
        card.insertAdjacentHTML("beforeend", cardTemplate);
        return card;
    };
    createCard = (apiData, id) => {
        const cardTemplate = this.buildCardHTML(apiData);
        const card = new Card(cardTemplate, apiData, id);
        return card;
    };
    createCardsAndAppend = (dataList, parentToAppend, arrayToPush) => {
        let id = 0;
        dataList.forEach((item) => {
            const card1 = this.createCard(item, id);
            const card2 = this.createCard(item, id + 1);
            id += 2;
            parentToAppend.append(card1.html);
            parentToAppend.append(card2.html);
            arrayToPush.push(card1);
            arrayToPush.push(card2);
        });
    };
}
//# sourceMappingURL=CardFactory.js.map