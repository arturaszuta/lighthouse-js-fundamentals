function range(start, end, step) {
  var answerArray = [];

  if(start == undefined || end == undefined || step == undefined || start > end || step == 0 || step < 0) {
    return answerArray;
  } else {
    for(var i = start; i <= end; i = i + step) {
    answerArray.push(i);
  }
  return answerArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 5, 3));