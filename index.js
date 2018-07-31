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
<<<<<<< HEAD
  return x
=======
    return x
>>>>>>> a02fe9c2298e979d5355687e108ab4ce4a9be933
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
<<<<<<< HEAD
    if (words[i].length > 4){
<<<<<<< HEAD
      return true
=======
=======
    if (word[i].length > 4){
>>>>>>> a02fe9c2298e979d5355687e108ab4ce4a9be933
      return true;
>>>>>>> 25147c8067005521f394e8c4129d3c81bffb5246
    }
  }
  return false;
}

function findTheCheese (foods) {
<<<<<<< HEAD
  var x = [ 'cheddar', 'gouda', 'camembert'];
  for (let i = 0; i < foods.length; i++){
    if (x.includes(foods[i])){
    return foods[i]
    }
=======
  x = [ 'cheddar', 'gouda', 'camembert'];
  for (let i = 0; i < foods.length; i++){
    if (x.includes(word[i]));
    return word[i]
>>>>>>> a02fe9c2298e979d5355687e108ab4ce4a9be933
  }
  return 'no cheese!'
}
