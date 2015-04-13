function plusOne(i) {
  console.trace();
  return i + 1;
}

function doSomething(i) {
  console.log("doing something!");
  var result = 100 * plusOne(i);
  return result;
}

function main() {
  var j = 6;
  for (i = 0; i < 10; i++) {
    if (i == 5) {
      j = 8;
    }
    console.log("Hello ", doSomething(i), j);
  }
}

main()
