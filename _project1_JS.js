// JavaScript Document
$(document).ready(function(){	
	//mouseover jquery functions for sidebar links
  $("#browse").mouseover(function(){
    $("#browseArrow").hide();
  });
  $("#browse").mouseout(function(){
    $("#browseArrow").show();
  });
  
  $("#hot").mouseover(function(){
    $("#hotArrow").hide();
  });
  $("#hot").mouseout(function(){
    $("#hotArrow").show();
  });
  
  $("#new").mouseover(function(){
    $("#newArrow").hide();
  });
	$("#new").mouseout(function(){
    $("#newArrow").show();
  });
  
  $("#act").mouseover(function(){
    $("#actArrow").hide();
  });
  $("#act").mouseout(function(){
    $("#actArrow").show();
  });
  
  $("#fps").mouseover(function(){
    $("#fpsArrow").hide();
  });
  $("#fps").mouseout(function(){
    $("#fpsArrow").show();
  });
  
  $("#mmoRpg").mouseover(function(){
    $("#mmoArrow").hide();
  });
  $("#mmoRpg").mouseout(function(){
    $("#mmoArrow").show();
  });
  
  $("#board").mouseover(function(){
    $("#boardArrow").hide();
  });
  $("#board").mouseout(function(){
    $("#boardArrow").show();
  });
  
  $("#card").mouseover(function(){
    $("#cardArrow").hide();
  });
  $("#card").mouseout(function(){
    $("#cardArrow").show();
  });
  //alternate links onclick dropdown functions
  var altDDUpDown = true;
  $("#altDropdown").click(function(){
	  if(altDDUpDown == true)
	  {
      	$(".altLink").hide();
		$("#altSideNav").css("background-color", "white");
		altDDUpDown = false;
	  }
	  else if(altDDUpDown == false)
	  {
		  $(".altLink").show();
		  $("#altSideNav").css("background-color", "#111111");
		  altDDUpDown = true;
	  }
		
  });
});