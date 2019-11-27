let aliens =[];

class Alien {
  constructor(name, status, currentHealth, damage){
    this.name = name
    this._status = status
    this.currentHealth = currentHealth
    this.damage = damage
  }

  bullsEye () {
    this.currentHealth >= this.damage ? this.currentHealth -= this.damage : this.currentHealth = 0
  }

  get isDead () {
    return this.currentHealth < 1 ? "dead AF" : "alive AF"
  }
}

function getInTheBin () {
  aliens.splice = [0,aliens.length];
}

function alienSpawn () {
  aliens[0] = new Alien ("Mother Ship", "alive", 100, 9);
  for (let index = 1; index < 6; index++){
    aliens[index] = new Alien ("Defence", "alive", 80, 10)};
  for (let index = 6; index < 14; index++){
    aliens[index] = new Alien ("Attack", "alive", 45, 12)};
  return aliens
};
alienSpawn(); 

function renderSpawn(){
  let target = document.getElementById("alien-container")
  target.innerHTML = ""
  for(let index = 0; index < aliens.length; index++){
    target.insertAdjacentHTML("beforeend", `<div id="aliens[index]") class="bobs"><p>${aliens[index].name}</p><p>${aliens[index].currentHealth}</p><p>${aliens[index].isDead}</p></div>`)
  }
 }

 renderSpawn();

let random = Math.floor(Math.random()*14)
function attack() {
  if (aliens[0].currentHealth > 0) {
    aliens[0].bullsEye();
    random = Math.floor(Math.random()*14);
    checkWin();
    renderSpawn();
  }
};

function checkWin () {
  if (aliens[0].currentHealth <= 0) {
    alert("winner winner chicken dinner")
    getInTheBin();
    alienSpawn();
  }
}
 
document.getElementById("fire").addEventListener("click", attack);
document.getElementById("reset").addEventListener("click", getInTheBin);