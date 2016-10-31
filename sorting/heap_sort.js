var parent = function( i ) { return Math.floor( i / 2 ); };
var left = function( i ) { return i * 2 + 1; };
var right = function( i ) { return i * 2 + 2; };

var maxHeapify = function( A, i, heapSize ) {
  var l = left( i ),
      r = right( i ),
      largest;

  if ( l < heapSize && A[l] > A[i] )       { largest = l; }
  else                                     { largest = i; }
  if ( r < heapSize && A[r] > A[largest] ) { largest = r; }

  if ( largest !== i ) {
    swap( A, i, largest );
    maxHeapify( A, largest, heapSize );
  }

  return A;
};

var buildMaxHeap = function( A ) {
  var heapSize = A.length;
  for ( var i = Math.floor( A.length/2 ); i >= 0; i-- ) {
    A = maxHeapify( A, i, heapSize );
  }
  return A;
};

var swap = function( a, i, j ) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
  return a;
};

var heapSort = function( A ) {
  var heapSize = A.length-1;

  buildMaxHeap( A );

  for ( var i = heapSize; i > 0; i-- ) {
    swap( A, 0, i );
    maxHeapify( A, 0, heapSize-- );
  }
  return A;
};

module.exports = heapSort;
