let cheese = 0;

let cheeseElem = document.getElementById("cheese");
let pickaxePriceElem = document.getElementById("pickaxe-price");
let cheesegraterPriceElem = document.getElementById("cheesegrater-price");
let roverPriceElem = document.getElementById("rover-price");
let alienPriceElem = document.getElementById("alien-price");

let pickaxeQuantityElem = document.getElementById("pickaxe-quantity");
let cheesegraterQuantityElem = document.getElementById("cheesegrater-quantity");
let roverQuantityElem = document.getElementById("rover-quantity");
let alienQuantityElem = document.getElementById("alien-quantity");

let clickUpgrades = {
  pickaxes: {
    price: 5,
    quantity: 0,
    multiplier: 1,
  },

  cheesegraters: {
    price: 10,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  rovers: {
    price: 50,
    quantity: 0,
    multiplier: 5
  },

  aliens: {
    price: 100,
    quantity: 0,
    multiplier: 20
  }
};

/**
 * var upgradeManager = {
 *   picks: {
 *     elem: pickaxeElem,
 *     quantity
 *   }
 * }
 */

function update() {

  // for(var key in upgradeManager){
  //   var item = upgradeManager[key]
  //   item.elem.innerText = item.price
  // }

  cheeseElem.textContent = cheese.toString();
  pickaxePriceElem.textContent = clickUpgrades.pickaxes.price.toString();
  cheesegraterPriceElem.textContent = clickUpgrades.cheesegraters.price.toString();
  roverPriceElem.textContent = automaticUpgrades.rovers.price.toString();
  alienPriceElem.textContent = automaticUpgrades.aliens.price.toString();
  
  pickaxeQuantityElem.textContent = clickUpgrades.pickaxes.quantity.toString();
  cheesegraterQuantityElem.textContent = clickUpgrades.cheesegraters.quantity.toString();
  roverQuantityElem.textContent = automaticUpgrades.rovers.quantity.toString();
  alienQuantityElem.textContent = automaticUpgrades.aliens.quantity.toString();
};

function mine() {
  cheese += (clickUpgrades.pickaxes.multiplier * clickUpgrades.pickaxes.quantity) + (clickUpgrades.cheesegraters.multiplier * clickUpgrades.cheesegraters.quantity) + 1;
  console.log(cheese)
  update()
};


function buyPickaxe() {
  if (cheese >= clickUpgrades.pickaxes.price) {
    clickUpgrades.pickaxes.quantity++;
    cheese -= clickUpgrades.pickaxes.price;
    clickUpgrades.pickaxes.price += 10;
    console.log("pickaxe purchased");
    update();
  } else {
    console.log("too broke for pickaxes!")
  }
};

function buyCheesegrater() {
  if (cheese >= clickUpgrades.cheesegraters.price) {
    clickUpgrades.cheesegraters.quantity++;
    cheese -= clickUpgrades.cheesegraters.price;
    clickUpgrades.cheesegraters.price += 10;
    update();
    console.log("cheesegrater purchased");
  } else {
    console.log("too broke for cheesegraters!")
  }
};

function buyRover() {
  if (cheese >= automaticUpgrades.rovers.price) {
    automaticUpgrades.rovers.quantity++;
    cheese -= automaticUpgrades.rovers.price;
    automaticUpgrades.rovers.price += 10;
    update();
    console.log("rover purchased");
  } else {
    console.log("too broke for rovers!")
  }
};

function buyAlien() {
  if (cheese >= automaticUpgrades.aliens.price) {
    automaticUpgrades.aliens.quantity++;
    cheese -= automaticUpgrades.aliens.price;
    automaticUpgrades.aliens.price += 10;
    update();
    console.log("alien purchased");
  } else {
    console.log("too broke for aliens!")
  }
};

function collectAutoUpgrades() {
  for (let upgradeType in automaticUpgrades) {
    if (automaticUpgrades.hasOwnProperty(upgradeType)) {
      cheese += (automaticUpgrades[upgradeType].quantity * automaticUpgrades[upgradeType].multiplier)
    }
  };
  update();
};

let collectionInterval

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
};

startInterval();