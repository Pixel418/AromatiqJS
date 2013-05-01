;(function (root, factory) {
  var plugin = factory();

  // The wrapper will be used without jQuery
  // to validate that elements is an array of HTML elements
  function wrapper(elements) {
    if (!elements) {
      elements = [];
    } else if (elements.nodeType) {
      elements = [elements];
    }
    var options = Array.prototype.slice.call(arguments, 1);
    return plugin.apply(root, [elements].concat(options));
  }

  // If it is an AMD context
  // We will not use the jQuery structure
  if (typeof define === 'function' && define.amd) {
    define(function(){
      return wrapper;
    });
  } else {

    // If it is a jQuery context
    // The plugin will be accessible this way $(selector).myPlugin()
    if (root.jQuery) {
      root.jQuery.fn[plugin.name]= function(){
        return plugin.apply(root, [this.toArray()].concat(arguments));
      }

    // If it is a vanilla context
    // The plugin will be accessible this way myPlugin(elements)
    } else {
      root[plugin.name] = wrapper
    }
  }
})(this, function() {

  // Put here your installation code
  // Some vanillaJS code that will be interpreted only one time

  // Do not forget to change the function name
  // You can add as much arguments as you want
  // The first one must be an array of HTML elements
  return function myPlugin(elements) {

    // Put here your plugin code
    // Some vanillaJS code that will be interpreted every time your plugin is called

  }
})