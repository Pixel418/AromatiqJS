;(function (root, factory) {
  function wrapper(elements) {
    if (!elements) {
      elements = [];
    } else if (elements.nodeType) {
      elements = [elements];
    }
    var options = Array.prototype.slice.call(arguments, 1);
    return plugin.apply(root, [elements].concat(options));
  }
  var plugin = factory();
  if (typeof define === 'function' && define.amd) {
    define(function(){
      return wrapper;
    });
  } else {
    if (root.jQuery) {
      root.jQuery.fn[plugin.name]= function(){
        return plugin.apply(root, [this.toArray()].concat(arguments));
      }
    } else {
      root[plugin.name] = wrapper
    }
  }
})(this, function() {
  var addEventListener = "addEventListener" in window
    , eventListener = addEventListener ? "addEventListener" : "attachEvent"
    , prefix = addEventListener ? "" : "on"
    , clickEvent = "createTouch" in document ? "touchend" : "click"

  return function popup(elements, width, height) {
    var length = elements.length;
    for(;length--;) {
      (function(item){
        if (item.href) {
          item[eventListener](prefix + clickEvent, function(event){
            event = event || window.event
            if("preventDefault" in event) event.preventDefault()
            else event.returnValue = false

            window.open(item.href, "", "width="+width+", height="+height+"")
            return false;
          })
        }
      })(elements[length])
    }
  }
})