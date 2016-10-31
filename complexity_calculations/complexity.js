var Complexity = {

  log : function(n, base) {
    if (base === undefined) { base = 2; }
    return Math.log(n)/Math.log(base);
  }

};

module.exports = Complexity;
