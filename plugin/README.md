AromatiqJS - plugin pattern
==========

This pattern allow to you provide a vanillaJS plugin that will be available in vanillaJS, jQuery & AMD.

How to use this kind of plugin
-------------

### VanillaJS

```html
<script src="myPlugin.js"></script>
<script>
	// You have to query elements with vanillaJS
	myPlugin(document.querySelectorAll('.widgetClass'), argument1, etc);
</script>
```

### jQuery

```html
<script src="jquery.js"></script>
<script src="myPlugin.js"></script>
<script>
	$('.widgetClass').myPlugin(argument1, etc);
</script>
```

### AMD

```js
require(['myPlugin'], function(myPlugin){
  myPlugin(document.querySelectorAll('.widgetClass'), argument1, etc);
});
```

Author & Community
--------

AromatiqJS is under [MIT License](http://opensource.org/licenses/MIT).

It is created and maintained by [Thomas ZILLIOX](http://zilliox.me).
