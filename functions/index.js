


function add(a, b) {
  return a + b
}

console.log(add(2, 4));


setTimeout(function () {
  console.log(add(24, 4));
}, 2000);



function sub(c) {
  return add(5, 6) - c
}

console.log(sub(1));


