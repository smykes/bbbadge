$('document').ready(function() {
	$("#bbbadge").bbbadge({orientation: 'horizontal', size: 'large'});


});

(function( $ ) {
    $.fn.bbbadge = function(options) {
    	options = $.extend({
	    	orientation: 'horizontal',
	    	size: 'large',
	    	real_name: ''
    	},options);
    	this.addClass(options.orientation + "-" + options.size);
    	var player = this.attr("id");
    	var url = "http://api.dribbble.com/players/" + player;
    	var msg = {"rebounds_count":10,"likes_received_count":61,"created_at":"2010/05/07 17:32:06 -0400","website_url":"http://www.secondrunnerup.com","comments_count":62,"shots_count":35,"url":"http://dribbble.com/smykes","twitter_screen_name":"smykes","likes_count":86,"name":"Jeff Smykil","comments_received_count":36,"followers_count":14,"username":"smykes","id":2068,"following_count":53,"drafted_by_player_id":171,"avatar_url":"http://dribbble.s3.amazonaws.com/users/2068/avatars/normal/4kog96qht0hj7234r9j7.png?1348245356","draftees_count":1,"rebounds_received_count":9,"location":"New Hampshire"}
    	var image_url = msg.avatar_url;
		var img_src = "<img class='avatar' height='64px' width='64px' src='" + image_url + "'/>"
		$("#bbbadge").prepend(img_src);
    	this.append('<div id="name">' + msg.name + '</div>');
    	this.append('<div id="location">' + msg.location + '</div>');
    	this.append('<div id="countContainer"></div>');
    	$("#countContainer").append('<div id="shots">' + msg.shots_count + ' <div>Shots</div></div>');
    	$("#countContainer").append('<div id="likes">' + msg.likes_received_count + ' <div>Likes</div></div>');
    	$("#countContainer").append('<div id="followers">' + msg.followers_count + ' <div>Followers</div></div>');
    	$("#countContainer").append('<div id="empty">• • •</div>');

    }
})( jQuery );




/*---
	var player = $("#bbbadge").attr("data-id");
	var url = "http://api.dribbble.com/players/" + player;
	/*-$.ajax({
		url: url,
		crossDomain: true
		}).done(function (msg) {
			
		});
		
		var msg = {"rebounds_count":10,"likes_received_count":61,"created_at":"2010/05/07 17:32:06 -0400","website_url":"http://www.secondrunnerup.com","comments_count":62,"shots_count":35,"url":"http://dribbble.com/smykes","twitter_screen_name":"smykes","likes_count":86,"name":"Jeff Smykil","comments_received_count":36,"followers_count":14,"username":"smykes","id":2068,"following_count":53,"drafted_by_player_id":171,"avatar_url":"http://dribbble.s3.amazonaws.com/users/2068/avatars/normal/4kog96qht0hj7234r9j7.png?1348245356","draftees_count":1,"rebounds_received_count":9,"location":"New Hampshire"}
		
		$("#name").html(msg.name);
			$("#user_name").html(msg.username);
						$("#location").html(msg.location);
			
			var image_url = msg.avatar_url;
			var img_src = "<img class='avatar' height='64px' width='64px' src='" + image_url + "'/>"
			$("#followers").html(msg.followers_count);
			$("#likes").html(msg.likes_received_count);
			$("#shots").html(msg.shots_count);
			$("#bbbadge").prepend(img_src);--*/