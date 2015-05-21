$(document).ready(function() {
	window.stickySidebar = new StickyScroll(".sidebar", $(".header").height() + 30, $(".footer").offset().top - 30);
});

var StickyScroll = function(element, topOffset, bottomStopPosition) {
	var self = this;
	
	(function createStickyHolder() {
		var originalCSS = {
			width: $(element).width(),
			margin: $(element).css("margin"),
			float: $(element).css("float"),
			clear: $(element).css("clear"),
			minHeight: 1,
			position: "relative"
		};
		$(element).wrap("<div class='stickyHolder'/>").css({width: originalCSS.width})
			.parent(".stickyHolder").css(originalCSS);
	})();
	
	var stickyHolder = $(element).parent(".stickyHolder"),
		topOffset = parseInt(topOffset) || 0,
		bottomStopPosition = parseInt(bottomStopPosition) || 0,
		
		stickToTopPosition = $(stickyHolder).offset().top - topOffset,
		stickToBottomPosition = bottomStopPosition - $(element).height() - topOffset,
		
		absoluteBottomPositioning = stickToBottomPosition - stickToTopPosition;
	
	this.setSticky = function() {
		if (bottomStopPosition && $(document).scrollTop() >= stickToBottomPosition) {
			$(element).css({position: "absolute", top: absoluteBottomPositioning});
		}
		else if ($(document).scrollTop() >= stickToTopPosition) {
			$(element).css({position: "fixed", top: topOffset});
		}
		else {
			$(element).css({position: "static"});
		}
	};
	
	this.scroll = function() {
		if (!$(element).length) {
			return;
		}
		this.setSticky();
	};
	
	self.scroll();
	$(window).scroll(function() {
		self.scroll();
	});
};