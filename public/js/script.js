function highlightThis(){var a=this.style.backgroundColor;this.style.backgroundColor="yellow",alert(this.className),this.style.backgroundColor=a}for(var divs=document.getElementsByTagName("div"),i=0;i<divs.length;i++)divs[i].addEventListener("click",highlightThis);var mn=$(".main-nav");$(window).scroll(function(){$(this).scrollTop()>0?mn.addClass("main-nav-scrolled"):mn.removeClass("main-nav-scrolled")}),$(window).scroll(function(){$(this).scrollTop()>600?mn.addClass("main-nav-scrolled-past"):mn.removeClass("main-nav-scrolled-past")});