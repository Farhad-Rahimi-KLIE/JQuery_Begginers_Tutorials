$("button").click(function(){
 var txt = "";
 txt+= "outerwidth: " + $("#div1").Outerwidth() + "</br>";
 txt+= "outerheight: " + $("#div1").Outerheight()
 $("#div1").html(txt)
})