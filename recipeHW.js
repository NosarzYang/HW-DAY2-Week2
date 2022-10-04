let spaghettiPreCook = 400
let spaghettiPostCook = spaghettiPreCook * 1.8
let guanciale = 250
let eggYolk = 18
let numberOfEggYolks = 6
let fancyItalianCheese = 50
let blackPepper = 4
let salt = 1
let eggYolkWeight = eggYolk * numberOfEggYolks
console.log("weight of egg yolks is:", eggYolkWeight)
let step2 = fancyItalianCheese + eggYolkWeight
console.log("cheese and yolks mixed together weigh", step2)
let pepperAddedToCheeseAndEggs = blackPepper / 2
console.log(
  "amount of pepper I estimate to be used in mixture of cheese and egg yolks",
  pepperAddedToCheeseAndEggs
)
let aLadleOfFancyWaterForSauce = 118
let aLadleOfFancyWaterForGuanciale = aLadleOfFancyWaterForSauce / 4
console.log(
  "how much water for guanciale:this much:",
  aLadleOfFancyWaterForGuanciale
)
let guancialeAndAPartoOfFancyWaterForSauce =
  aLadleOfFancyWaterForSauce / 4 + guanciale

console.log(
  "2 spoons of ladle mass and meat mass made",
  guancialeAndAPartoOfFancyWaterForSauce
)
let stepWhereWeAddSpaghettiToMeat =
  guancialeAndAPartoOfFancyWaterForSauce + spaghettiPostCook
console.log(
  "spaghetti and mixture made the weight of",
  stepWhereWeAddSpaghettiToMeat
)
let SauceMeatAndSpaghettiTogether =
  spaghettiPostCook + guancialeAndAPartoOfFancyWaterForSauce + step2
console.log(
  "almost all ingredients besides remaigning pepper weigh",
  SauceMeatAndSpaghettiTogether
)
let totalWeightNotAccountingForEvaporation =
  SauceMeatAndSpaghettiTogether + (blackPepper - pepperAddedToCheeseAndEggs)
console.log("carbonara weighs:", totalWeightNotAccountingForEvaporation)
