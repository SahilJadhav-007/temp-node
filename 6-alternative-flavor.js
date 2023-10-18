module.exports.items = ['item1','item2'] //we can even directly export the array via using this syntax rather than firstly creating the const items = [item,item]

const person = {  // we can even directly export this by writing module.exports.person = {}
    name:'bob',
}

module.exports.singlePerson = person // another way of exporting an object