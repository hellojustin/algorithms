var mergeSort = function( A, p, r ) {
  if ( p === undefined ) { p = 0; }
  if ( r === undefined ) { r = A.length - 1; }

  if ( p < r ) {
    var q = Math.ceil( (p + r) / 2 );
    mergeSort( A, p, q - 1 );
    mergeSort( A, q, r );
    merge( A, p, q, r );
  }
  return A;
};

var merge = function( A, p, q, r ) {
  var L = A.slice( p, q ),
      R = A.slice( q, r + 1 ),
      i = 0,
      j = 0;

  // Using Infinity as our sentinel does not allow us to compare strings.
  // L.push( Infinity );
  // R.push( Infinity );

  // Instead, we'll just stop picking from L & R when i or j goes out of bounds.
  for ( var k = p; k <= r; k++ ) {
    if ( L[i] <= R[j] || R[j] === undefined ) { A[k] = L[i++]; }
    else                                      { A[k] = R[j++]; }
  }
};

module.exports = mergeSort;
