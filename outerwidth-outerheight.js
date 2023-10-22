// outerwidth outerheight
// jquery Tutorial
$("button").click(function(){
 var txt = "";
 txt+= "Outerwidth: " + $("#div3").Outerwidth() + "</br>";
 txt+= "Outerheight: " + $("#div3").Outerheight()
 $("#div3").html(txt)
})
