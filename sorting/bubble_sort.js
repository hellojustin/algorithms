var bubbleSort = function( a ) {
  for ( var i = 0; i < a.length; i++ )
    for ( var j = a.length-1; j > i; j-- )
      if ( a[j] < a[j-1] )
        a = swap( a, j, j-1 );
  return a;
}

var swap = function( a, i, j ) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
  return a;
}

module.exports = bubbleSort;
