window.onscroll = function () {
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		document.getElementById("header").style.position = "fixed";
		document.getElementById("header").style.backgroundColor = "#fff";
		document.getElementById("header").style.height = "48px";
		document.querySelector(".navbar-brand").style.display = "none";
		document.querySelector(".header__button").style.padding = "10px 20px";

		for (var i = 0;i <document.getElementsByClassName("navbar-nav")[0].getElementsByClassName("nav-item").length;i++) {
			document.getElementsByClassName("navbar-nav")[0].getElementsByClassName("nav-item")[i].getElementsByClassName("nav-link")[0].style.lineHeight = "48px";
		};
	} else {
		document.getElementById("header").style.position = "absolute";
		document.getElementById("header").style.backgroundColor = "transparent";
		document.getElementById("header").style.height = "unset";
		document.querySelector(".navbar-brand").style.display = "block";
		document.querySelector(".header__button").style.padding = "15px 20px";

		for (var i = 0;i <document.getElementsByClassName("navbar-nav")[0].getElementsByClassName("nav-item").length;i++) {
			document
				.getElementsByClassName("navbar-nav")[0]
				.getElementsByClassName("nav-item")
			[i].getElementsByClassName("nav-link")[0].style.lineHeight = "80px";
		};
	};
};


