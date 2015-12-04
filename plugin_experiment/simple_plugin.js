(function($) {
    "use strict";
    $.fn.extend({
        //plugin name here
        functionName: function(options) 
        {

            //Settings list and the default values
            var defaults = 
            {
                defaultvar1: "value",
                defaultvar2: "value"
            };

            var options = $.extend(defaults, options);

            return this.each(function () {
                var o = options;
                var obj = $(this);             
                //do stuff here
            });
        }
    });
})(jQuery);

(function( $ ){
    "use strict";
    $.extend($.fn, {
        myplugin: function(){
            // your plugin logic
        }
    });
})( jQuery );




(function($){
    "use strict";
    $.fn.extend({
        //plugin name here
        selectedStageSize: function(options) 
        {

            //Settings list and the default values
            var defaults = 
            {
                viewer: "jQuery('#detailsModule #pdpTabHolder .tab-content a.viewer').attr('data-selected', 'viewer')",
                youtube: "jQuery('a[href*=\"youtu.be\"]').attr('data-selected', 'youtube');",
				activeButton: ""
            };

            var options = $.extend({}, defaults, options);

            return this.each(function() {
                var o = options;
                var $this = jQuery(this);             
                //do stuff here
				jQuery("#detailsModule #pdpTabHolder .tab-content a.viewer").on('click', function() {
					options.activeButton = jQuery(this).data("selected");
					eventClick(options.activeButton);
				});
				jQuery('a[href*="youtu.be"]').on('click', function() {
					options.activeButton = jQuery(this).data("selected");
					eventClick(options.activeButton);
				});
				function eventClick(a) {
					switch (a) {
						case "viewer":
							jQuery("#youtube").remove();
							var style = document.createElement("style");
							style.type = "text/css";
							style.id = "viewer";
							style.innerHTML = "#fbBox #fbContent {width: 850px !important;}";
							document.body.appendChild(style);
							break;
						case "youtube":
							jQuery("#viewer").remove();
							var style = document.createElement("style");
							style.type = "text/css";
							style.id = "youtube";
							style.innerHTML = "#fbBox #fbContent {width: 664px !important;}";
							document.body.appendChild(style);
							break;
					}
				}
				
			});
		}
    });
})(jQuery);







if (jQuery('body.pdp').length > 0) {
		var $activeButton = "";
		jQuery("#detailsModule #pdpTabHolder .tab-content a.viewer").attr("data-selected", "viewer");
		jQuery('a[href*="youtu.be"]').attr("data-selected", "youtube");
		jQuery("#detailsModule #pdpTabHolder .tab-content a.viewer").on('click', function() {
			$activeButton = jQuery(this).data("selected");
			eventClick($activeButton);
		});
		jQuery('a[href*="youtu.be"]').on('click', function() {
			$activeButton = jQuery(this).data("selected");
			eventClick($activeButton);
		});

		function eventClick(a) {
			switch (a) {
				case "viewer":
					jQuery("#youtube").remove();
					var style = document.createElement("style");
					style.type = "text/css";
					style.id = "viewer";
					style.innerHTML = "#fbBox #fbContent {width: 850px !important;}";
					document.body.appendChild(style);
					break;
				case "youtube":
					jQuery("#viewer").remove();
					var style = document.createElement("style");
					style.type = "text/css";
					style.id = "youtube";
					style.innerHTML = "#fbBox #fbContent {width: 664px !important;}";
					document.body.appendChild(style);
					break;
			}
		}
	}
