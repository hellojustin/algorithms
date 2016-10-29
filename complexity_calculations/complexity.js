var Complexity = {

  log : function(n, base) {
    if (base == null) base = 2;
    return Math.log(n)/Math.log(base);
  }

}

module.exports = Complexity
