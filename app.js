// Module - Blocks of encapsulated codes (we only share what we want to other) (Every file in NODE is module)
 
// now if we wanna import those modules we shall use (require) key

// const names = require("./4-names") //put the location of module
// const hello = require("./5-utils")
// const data = require("./6-alternative-flavor")
// require("./7-mind-grenade")


// console.log(data.singlePerson)

// hello("Sahil")
// hello(names.Gay)
// hello(names.Nigga)


const _ = require("lodash");

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems)