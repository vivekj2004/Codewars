function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(parseInt(available[ingredient] / recipe[ingredient] || 0), val)
  },Infinity);
}

let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available));

recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

console.log(cakes(recipe, available));

