var should    = require('chai').should(),
    randomQuickSort = require('../../sorting/random_quick_sort.js');

describe('#randomQuickSort', function() {

  it('should sort numeric arrays', function() {
    var unsorted = [5, 9, 1, 7, 6, 0, 3],
        sorted   = [0, 1, 3, 5, 6, 7, 9];
    randomQuickSort(unsorted).should.eql(sorted);
  });

  it('should sort alphabetic arrays', function() {
    var unsorted = ['banana', 'apple', 'tomato', 'carrot'],
        sorted   = ['apple', 'banana', 'carrot', 'tomato'];
    randomQuickSort(unsorted).should.eql(sorted);
  });

  it('should sort uniform-value arrays', function() {
    var unsorted = [1, 1, 1, 1, 1, 1, 1, 1, 1],
        sorted   = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    randomQuickSort(unsorted).should.eql(sorted);
  });

  it('should sort already-sorted arrays', function() {
    var unsorted = [1, 2, 3, 4, 5, 6, 7, 8],
        sorted   = [1, 2, 3, 4, 5, 6, 7, 8];
    randomQuickSort(unsorted).should.eql(sorted);
  });

  it('should sort reverse-sorted arrays', function() {
    var unsorted = [8, 7, 6, 5, 4, 3, 2, 1],
        sorted   = [1, 2, 3, 4, 5, 6, 7, 8];
    randomQuickSort(unsorted).should.eql(sorted);
  });

});
