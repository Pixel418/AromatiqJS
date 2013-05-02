(function(e,t){function r(t){if(!t){t=[]}else if(t.nodeType){t=[t]}else if(!t.length){t=[]}var r=Array.prototype.slice.call(arguments,1);return n.apply(e,[t].concat(r))}var n=t();if(typeof define==="function"&&define.amd){define(function(){return r})}else{var i=e.jQuery||e.jTropiq;if(i){i.fn[n.name]=function(){return n.apply(e,[this.toArray()].concat(arguments))}}else{e[n.name]=r}}})
(this,function(){
  var addEventListener = "addEventListener" in window
    , eventListener = addEventListener ? "addEventListener" : "attachEvent"
    , prefix = addEventListener ? "" : "on"
    , clickEvent = "createTouch" in document ? "touchend" : "click"

  return function popup(elements, width, height) {
    console.log(elements);
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