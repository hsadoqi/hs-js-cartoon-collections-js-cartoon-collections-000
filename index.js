function dwarfRollCall(name){
  var x = [];
  for (let i = 0; i < name.length; i++){
    x.push(`${i+1}. ${name[i]} `)
  }
  return x.join("")
}

function summonCaptainPlanet(calls){
  var y =[];
  for (let i = 0; i < calls.length; i++){
   y.push(`${calls[i].toUpperCase()}!`)
  }
  return y
}

function longPlaneteerCalls(words){
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true
    } else {
    return false
  }
}
}

function findTheCheese(foods){
  var z = ['cheddar', 'gouda', 'camembert'];
  for (let i = 0; i < foods.length; i++){
    if (z.includes(foods[i])){
      return `${foods[i]}`
    }
    }
    return 'no cheese!'
}