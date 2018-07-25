function dwarfRollCall(dwarves) {
  var y = [];
  for (let i = 0; i < dwarves.length; i++){
    y.push(`${(i+1)}. ${dwarves[i]} `)
  }
  return y.join("")
}

function summonCaptainPlanet(planeteerCalls){
  var x = [];
  for (let i = 0; i < planeteerCalls.length; i++){
    x.push(planeteerCalls[i].toUpperCase() + '!')
  }
  return x
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true
    }
  }
  return false;
}

function findTheCheese (foods) {
  var x = [ 'cheddar', 'gouda', 'camembert'];
  for (let i = 0; i < foods.length; i++){
    if (x.includes(foods[i])){
    return foods[i]
    }
  }
  return 'no cheese!'
}
