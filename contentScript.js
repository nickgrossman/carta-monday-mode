
/* 
# keyboard shortcuts
# 
#
#
# 
*/
var next_co = function() {
	var current = $(".page-nav--tabs.active").first()
	var next = current.nextAll(':not(.exited)').first().find('span')
	if (next.length) {
		next.trigger('click')
	}
}
var prev_co = function() {
	var current = $(".page-nav--tabs.active").first()
	var prev = current.prevAll(':not(.exited)').first().find('span')
	if (prev.length) {
		prev.trigger('click')
	}
}
$(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
            prev_co();
          break;
          case 38: // up
            prev_co();
          break;
          case 39: // right
            next_co();
          break;
          case 40: // down
            next_co();
          break;
          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });

