// Add your functions and code here


// var kittens = ["Jeff", "Matt"];
// console.log(kittens.concat("Tuna"));
// console.log(kittens.slice(0,1))
// console.log(kittens.splice(0,0,"Howard"))
// console.log(kittens);


var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  
  return kittens.push(name)
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

kittens = ["Milo", "Otis", "Garfield"];

destructivelyRemoveLastKitten(){
  return kittens.pop()
}

kittens = ["Milo", "Otis", "Garfield"];












