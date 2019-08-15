function getLongestWord(str) {
  var array = str.split(/[ ,;]+/);
  array.sort(function(first, second) {
    return second.replace(/[^a-z-]/gi, '').length - first.replace(/[^a-z-]/gi, '').length;
  });

  return array[0].replace(/[^a-z-]/gi, '');
}

function getSumAllNumbers(str) {
  var digit = /\d+/g;
  var sum = 0;
  var array = str.split(/[ ,;]+/);
  
  for (i = 0; i < array.length; i++) {
   if(!(isNaN(array[i]))){
      sum = Number(sum) + Number(array[i]);
      document.write(sum + " <br/>");
   }else {
    if(digit.test(array[i])){
      sum = Number(sum) + Number(array[i].match(digit));
      document.write(sum + " <br/>");
    }
  }
 return sum;
}