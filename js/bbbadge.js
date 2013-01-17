$('document').ready(function() {
	$("#bbbadge").bbbadge({});
});

(function( $ ) {
    $.fn.bbbadge = function(options) {
    	options = $.extend({
	    	orientation: 'horizontal',
	    	size: 'large',
	    	real_name: ''
    	},options);
    	
    	var player = this.attr("data-id");
    	var url = "http://api.dribbble.com/players/" + player;

	$.ajax({
		url: url,
		crossDomain: true
	}).done(
		function (msg) {
			$("#bbbadge").addClass("horizontal-large");
			var image_url = msg.avatar_url;
			var img_src = "<img class='avatar' height='64px' width='64px' src='" + image_url + "'/>"
			$("#bbbadge").prepend(img_src);
			$("#bbbadge").append('<div id="name">' + msg.name + '</div>');
			$("#bbbadge").append('<div id="location">' + msg.location + '</div>');
			$("#bbbadge").append('<div id="countContainer"></div>');
			$("#countContainer").append('<div id="shots">' + msg.shots_count + ' <div>Shots</div></div>');
			$("#countContainer").append('<div id="likes">' + msg.likes_received_count + ' <div>Likes</div></div>');
			$("#countContainer").append('<div id="followers">' + msg.followers_count + ' <div>Followers</div></div>');
			$("#countContainer").append('<div id="empty">• • •</div>');
		}
		);
	}
})( jQuery );


