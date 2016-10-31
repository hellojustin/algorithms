var randomQuickSort = function( A, p, r ) {
  if ( p == null ) p = 0;
  if ( r == null ) r = A.length-1;

  if ( p < r ) {
    var k = Math.round( scale( Math.random(), p, r ) );
        q = partition( A, p, r );
    randomQuickSort( A, p, q-1 );
    randomQuickSort( A, q+1, r );
  }

  return A;
}

/* A = the FULL array. We're sorting in-place.
 * p = the first index of the section that we're going to partition.
 * r = the last index of the secion that we're going to partition.
 */
var partition = function( A, p, r ) {
  var pivot = A[r],
      i     = p - 1;

  for ( var j = p; j < r; j++ )
    if ( A[j] <= pivot )
      swap( A, ++i, j );

  swap( A, ++i, r );
  return i;
}

var swap = function( A, i, j ) {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

var scale = function( x, low, high ) {
  return x * (high - low) + low;
}

module.exports = randomQuickSort;
