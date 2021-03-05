window.onscroll = function() {
	myFunction()
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = "scrolled";
  } else {
    document.getElementById("header").className = "unScroll";
  }
}