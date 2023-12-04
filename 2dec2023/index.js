var x = 0;
let y = 0;
const z = 0;

console.log("dette går! " + x, y, z);

function foo() {
  var a = 1;
  let b = 1;
  const c = 1;

  console.log("dette går!" + a, b, c, x, y, z);


  for(var i = 0; i < 1; i++) {
    var j = 2;
    let k = 2;
    const l = 2;

    console.log("dette går!" +  j, k, l, a, b, c, x, y, z);
  }

  console.log("dette går ikke! " + j, k);

}

foo();

