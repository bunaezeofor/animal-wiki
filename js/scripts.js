$(document).ready(function(){

    $("#1").click(function(event){
      $('.p2').show();
      $(".l2").hide();
      $(".l3").hide();
      $(".l4").hide();
    });

    $("#2").click(function(event){
      $('.p3').show();
      $(".l1").hide();
      $(".l3").hide();
      $(".l4").hide();
    });
});
