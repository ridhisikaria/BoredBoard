$(function(){
	$(".navbar-toggler").blur(function(event){
		var screenwidth = window.innerWidth;
		if(screenwidth < 992){
			$(".navbar-collapse").collapse('hide');
		}
	});
});
(function (global){
	var dc = {};

	var homeHtml = "snippets/stratmain.html";
		//general funtion for inserting html
		var insertHtml = function(selector, html){
			var targetElem = document.querySelector(selector);
			targetElem.innerHTML = html;
		};

		//pacman gif
		var showLoading = function(selector){
			var html = "<div class='text-center'>";
			html += "<img src='images/ajax-loader.gif'></div>";
			insertHtml(selector, html);
		};

		document.addEventListener("DOMContentLoaded", function(event){
			showLoading("#maindata");
			$ajaxUtils.sendGetRequest(homeHtml, function (responseText){
					document.querySelector("#maindata").innerHTML = responseText;
			},
			false);
		});
		
	global.$dc = dc;

})(window);
