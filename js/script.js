var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}

//creating sticky nav bar
var mn = $(".main-nav");
var logo= $(".logo");
$(window).scroll(function(){
	if( $(this).scrollTop() > 400){
		mn.addClass("main-nav-scrolled");
    logo.addClass("logo-scrolled")
	}
	else{
		mn.removeClass("main-nav-scrolled");
    logo.removeClass("logo-scrolled");
	}
});

