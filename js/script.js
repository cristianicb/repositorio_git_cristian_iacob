$(document).ready(function(){

  $("#search").click(function(){
    let name = window.prompt("search", "Text");
    window.open('http://google.com/search?q='+name);
  });


  $(".menu").click(function(){
    $(".header-right").toggleClass("closed");
  });

});
