let aliens = [];

class Alien {
  constructor(name, status, currentHealth, damage) {
    this.name = name;
    this._status = status;
    this.currentHealth = currentHealth;
    this.damage = damage;
  }

  bullsEye() {
    this.currentHealth >= this.damage
      ? (this.currentHealth -= this.damage)
      : (this.currentHealth = 0);
  }

  get isDead() {
    return this.currentHealth < 1 ? "dead" : "alive";
  }
}

const getInTheBin = () => {
  aliens.splice = [0, aliens.length];
  alienSpawn();
  renderSpawn();
};

const alienSpawn = () => {
  aliens[0] = new Alien("Queen Alien", "alive", 100, 9);
  for (let index = 1; index < 6; index++) {
    aliens[index] = new Alien("Warrior Alien", "alive", 80, 10);
  }
  for (let index = 6; index < 14; index++) {
    aliens[index] = new Alien("Facehugger", "alive", 45, 12);
  }
  return aliens;
};
alienSpawn();

const renderSpawn = () => {
  let target = document.getElementById("alien-container");
  target.innerHTML = "";
  for (let index = 0; index < aliens.length; index++) {
    target.insertAdjacentHTML(
      "beforeend",
      `<div id="aliens[index]") class="bobs"><p>${aliens[index].name}</p><p>${aliens[index].currentHealth}</p><p>${aliens[index].isDead}</p></div>`
    );
  }
};

renderSpawn();

const attack = () => {
  let random = Math.floor(Math.random() * aliens.length);
  if (aliens[0].currentHealth > 0) {
    if (aliens[random].currentHealth > 0) {
      aliens[random].bullsEye();
      checkWin();
      renderSpawn();
    } else {
      attack();
    }
  }
};

const checkWin = () => {
  if (aliens[0].currentHealth <= 0) {
    alert("Where is your office based and when shall I start?");
    getInTheBin();
    alienSpawn();
  }
};

document.getElementById("fire").addEventListener("click", attack);
document.getElementById("reset").addEventListener("click", getInTheBin);
