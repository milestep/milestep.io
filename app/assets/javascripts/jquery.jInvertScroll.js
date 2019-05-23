jQuery(document).ready(function () {
  $.jInvertScroll = function(sel, options) {
    var defaults = {
      width: 'auto',
      height: 'auto',
      onScroll: function(percent) {}
    };

    var config = $.extend(defaults, options);

    if(typeof sel === 'Object' && sel.length > 0) {
      return;
    }

    var elements = [];
    var longest = 0;

    // Extract all selected elements from dom and save them into an array
    $.each(sel, function(i, val) {
      $(val).each(function(e) {
        var tmp = {
          width: $(this).width(),
          height: $(this).height(),
          el: $(this)
        }

        elements.push(tmp);

        if(longest < tmp.width) {
          longest = tmp.width;
        }
      });
    });
    
    // Use the longest elements width + height if set to auto
    if(config.width == 'auto') {
      config.width = longest;
    }
    
    if(config.height == 'auto') {
      config.height = longest;
    }

    if (!~window.location.origin.indexOf('blog')) $('#paralax').css('height', config.height+'px');
  
    !function(){let n=[38,38,40,40,37,39,37,39,66,65],o=!1,e=0;
    $(document).keydown(function(t){let c=function(){o=!1,e=0},
    i=t.keyCode;o||38==i&&(o=!0),o?(n[e]==i?e++:c(),10==e&&
    (console.log("konami"),c())):c()})}();
    
    // Listen for the actual scroll event
    $(window).on('scroll resize', function(e) {
      var currY = $(this).scrollTop();
      var totalHeight = $(document).height();
      var winHeight = $(this).height();
      var winWidth = $(this).width();

      // Current percentual position
      var scrollPercent = (currY / (totalHeight - winHeight)).toFixed(4);
      
      // Call the onScroll callback
      if(typeof config.onScroll === 'function') {
        config.onScroll.call(this, scrollPercent);
      }
      
      // do the position calculation for each element
      $.each(elements, function(i, el) {
        var pos = Math.floor((el.width - winWidth) * scrollPercent) * 1;
        el.el.css("transform", `translateX(${pos}px)`)
      });
    });
  };
});