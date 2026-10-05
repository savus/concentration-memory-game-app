import { Card } from "./Card.js";
export class CardFactory {
    buildCardHTML = (data) => {
        const cardTemplate = `<div class="card${data.isDummyData ? "is-dummy" : ""}" data-face-position="down">
            <div class="card-inner">
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
            </div>
          </div>`;
        const cardElement = document.createElement("template");
        cardElement.innerHTML = cardTemplate;
        return cardElement;
    };
    createCard = (apiData, parentContainer, cardArray) => {
        const cardTemplate = this.buildCardHTML(apiData);
        const card = new Card(cardTemplate);
        parentContainer.append(cardTemplate.content);
        cardArray.push(card);
    };
}
//# sourceMappingURL=CardFactory.js.map