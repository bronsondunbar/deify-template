
/* Template navbar */

$(document).ready(function(){

  $(".navbar-toggler").click(function (){

    $(this).toggleClass("open");
    $(".nav-content").toggleClass("open");

  });

});