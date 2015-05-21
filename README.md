#Sticky Scroll

To create a sticky scroll element, instantiate a new `StickyScroll()` object inside `$(document).ready()` with the proper arguments.

```javascript
$(document).ready(function() {
	var sticky = new StickyScroll(element[, topOffset[, bottomStopPosition]]); 
});
```

The arguments are as follows:

**element** *(selector string or jQuery)*  
The element you want to perform the sticky scrolling on.

**topOffset** *(integer)*  
Offset in pixels you would like the stuck element to remain from the top while scrolling. If none is provided, the offset will be zero.

**bottomStopPosition** *(integer)*  
Position on the page in pixels where you would like the stuck element to stop scrolling and stay put. Note that this is the position of where you would like the bottom of the element to stay. If none is provided, the sticky element will not stop anywhere at the bottom.

See demo at: [http://demo.chevro.co/stickyscroll](http://demo.chevro.co/stickyscroll).
