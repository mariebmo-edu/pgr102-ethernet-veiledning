var cat1 = {name: "Boo", age: 3, color: "black", weight: 3.5};
var cat2 = {name: "Einstein", age: 3, color: "gray", weight: 5.5};
var cat3 = {name: "Snuggles", age: 5, color: "white", weight: 4.5};
var cat4 = {name: "Kitty", age: 1, color: "orange", weight: 1.5};
var cat5 = {name: "Tiger", age: 3, color: "brown", weight: 2.5};
var cat6 = {name: "Smokey", age: 2, color: "black", weight: 5.5};
var cat7 = {name: "Oscar", age: 3, color: "gray", weight: 5.5};
var cat8 = {name: "Milo", age: 5, color: "white", weight: 5.5};

var catArray = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8];

//console.log(catArray);
//console.log(catArray.sort());
console.log(catArray.sort(sortByWeight));

function sortByWeight(a, b) {
    if(a.weight < b.weight){
        return -1;
    }
    if(a.weight > b.weight){
        return 1;
    }
}