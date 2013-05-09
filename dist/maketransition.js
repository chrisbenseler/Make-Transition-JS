var MakeTransition = function(custom_options) {

	if(custom_options.element===null || custom_options.element.length===0)
		return false;

	var options = {
		class_name : "maketransition-sliding-item",
		bgparent_class_name : "maketransition-bg-parent",
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

	var el = $(custom_options.element);
	//force overflow to hidden
	el
		.css("overflow", "hidden")
		.before("<div id='" + options.bgparent_class_name + "'></div>");

	var handler = $("div#" + options.bgparent_class_name);
	var bgs = [];
	$(slides).each(function(index, item) {
		if(!$(item).data("parentimg")) {
			handler.append("<div></div>");
		} else {
			handler.append("<div><img src='" + $(item).data("parentimg") + "' /></div>");
		}
	});
	handler.css({
		top: el.offset().top,
		left: el.offset().left,
		width: el.width(),
		height: el.height()
	});
	
	var divs = handler.children("div");

	var navigate = function() {
		current++;

		
		if(current<size) {
			$(slides[current]).addClass(options.class_name);
			$(slides[current - 1]).removeClass(options.class_name);	

			$(divs[current]).addClass(options.bgparent_class_name);
			$(divs[current - 1]).removeClass(options.bgparent_class_name);
		} else {
			current = 0;
			$(slides[current]).addClass(options.class_name);
			$(slides[size - 1]).removeClass(options.class_name);

			$(divs[current]).addClass(options.bgparent_class_name);
			$(divs[size - 1]).removeClass(options.bgparent_class_name);
		}

		setTimeout(function() {
			navigate();
			

		}, options.timeout);
	};
	navigate();
};
