$("document").ready(function(){$("#bbbadge").bbbadge({})});(function(e){e.fn.bbbadge=function(t){t=e.extend({orientation:"horizontal",size:"large",real_name:""},t);var n=this.attr("data-id"),r="http://api.dribbble.com/players/"+n;e.ajax({url:r,crossDomain:!0}).done(function(t){e("#bbbadge").addClass("horizontal-large");var n=t.avatar_url,r="<img class='avatar' height='64px' width='64px' src='"+n+"'/>";e("#bbbadge").prepend(r);e("#bbbadge").append('<div id="name">'+t.name+"</div>");e("#bbbadge").append('<div id="location">'+t.location+"</div>");e("#bbbadge").append('<div id="countContainer"></div>');e("#countContainer").append('<div id="shots">'+t.shots_count+" <div>Shots</div></div>");e("#countContainer").append('<div id="likes">'+t.likes_received_count+" <div>Likes</div></div>");e("#countContainer").append('<div id="followers">'+t.followers_count+" <div>Followers</div></div>");e("#countContainer").append('<div id="empty">• • •</div>')})}})(jQuery);