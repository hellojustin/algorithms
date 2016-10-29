var should     = require('chai').should(),
    complexity = require('../../complexity_calculations/complexity');

describe( 'complexity', function () {

  describe ( '#log', function() {

    it( 'assumes base 2 when no base is passed', function() {
      complexity.log(7).should.equal(complexity.log(7, 2));
    });

    it( 'calculates the correct base 2 logs', function() {
      complexity.log(  0 ).should.equal( -Infinity );
      complexity.log(  1 ).should.equal( 0 );
      complexity.log(  2 ).should.equal( 1 );
      complexity.log(  3 ).should.equal( 1.5849625007211563 );
      complexity.log( 10 ).should.equal( 3.3219280948873626 );
    });

    it( 'calculates the correct logs for other base values', function() {
      complexity.log(  0,  3 ).should.equal( -Infinity );
      complexity.log(  0,  6 ).should.equal( -Infinity );
      complexity.log(  1, 12 ).should.equal( 0 );
      complexity.log(  1, 15 ).should.equal( 0 );
      complexity.log(  2,  7 ).should.equal( 0.3562071871080222 );
      complexity.log(  3,  8 ).should.equal( 0.5283208335737188 );
      complexity.log( 10, 99 ).should.equal( 0.5010935880000178 );
    });

  });

});
