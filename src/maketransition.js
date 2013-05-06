var MakeTransition = function(custom_options) {

	if(custom_options.element===null || custom_options.element.length==0)
		return false;

	var options = {
		class_name : "maketransition-sliding-item",
		timeout: 5000
	};

	//override default options with custom
	for(var key in custom_options) {
		if(options.hasOwnProperty(key)) {
			options[key] = custom_options[key];
		}
	}

	var slides = custom_options.element.getElementsByTagName("li");
	var size = slides.length;
	var current = -1;
	var current_parent_class = null;

	var el = $(custom_options.element);
	//force overflow to hidden
	el.css("overflow", "hidden");

	(navigate = function() {
		
		current++;
		
		if(current<size) {
			$(slides[current]).addClass(options.class_name);
			$(slides[current - 1]).removeClass(options.class_name);	
		} else {
			current = 0;
			$(slides[current]).addClass(options.class_name);
			$(slides[size - 1]).removeClass(options.class_name);	
		}

		if($(slides[current]).data("parentclass")) {
			if(current_parent_class)
				el.removeClass(current_parent_class);
			current_parent_class = $(slides[current]).data("parentclass");
			el.addClass(current_parent_class);
		}

		setTimeout(function() {
			navigate();
		}, options.timeout);
	}).call();
};