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

$(window).scroll(function(){
	if( $(this).scrollTop() > 0){
		mn.addClass("main-nav-scrolled");
	}
	else{
		mn.removeClass("main-nav-scrolled");
	}
});

$(window).scroll(function(){
	if( $(this).scrollTop() > 600){
		mn.addClass("main-nav-scrolled-past");
	}
	else{
		mn.removeClass("main-nav-scrolled-past");
	}
});