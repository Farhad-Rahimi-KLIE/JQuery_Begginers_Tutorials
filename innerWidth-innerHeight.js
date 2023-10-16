// jquery Tutorial
// innerwidth innerHeiggt
$("button").click(function(){
 var txt = "";
 txt+= "innerwidth: " + $("#div1").innerwidth() + "</br>";
 txt+= "innerheight: " + $("#div1").innerheight()
 $("#div1").html(txt)
})
