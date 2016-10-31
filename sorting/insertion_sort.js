var insertionSort = function( a ) {
  for (var j=1; j < a.length; j++) {
    var i = j-1;
    while (i >= 0 && a[i] > a[i+1]) {
      a = swap( a, i+1, i );
      i--;
    }
  }
  return a;
};

var swap = function( a, i, j ) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
  return a;
};

module.exports = insertionSort;
