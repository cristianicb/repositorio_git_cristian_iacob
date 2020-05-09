$(document).ready(function(){

  $("#search").click(function(){
    let name = window.prompt("search", "Nasa");

    if (name === null) {
        return; //break out of the function early
    }
    else{
      window.open('http://google.com/search?q='+name);
    }
  });



if ($(window).width() > 1300) {
  $(".header-right").removeClass("hidden");
} else {
  $(".menu").click(function(){
    $(".header-right").toggleClass("hidden");
  });
}



});
