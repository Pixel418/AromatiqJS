
// autoInstance could be used as a function or as a constructor
function autoInstance( elements ) {
  // But a function could not return an instantiation of himself without make an infinite loop
  return new autoInstance.prototype.init( elements );
}

// Definition of the autoInstance object
autoInstance.prototype = {
  init: function() {

    // initialization code

  },
  someMethod: function(){
  }
}

// Simulate that a autoInstance.prototype.init object is like a autoInstance object
autoInstance.prototype.constructor = autoInstance;
autoInstance.prototype.init.prototype = autoInstance.prototype;