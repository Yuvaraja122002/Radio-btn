var getId;
var split_id;
$(document).ready(function (){
	
	$(".keyword").bind("mouseover", glossaryIn)
	$(".keyword").bind("mouseout", glossaryOut)
	
});
function glossaryIn(){
	getId = $(this).attr("href");
	split_id = getId.split("_")[1];
	$("#glosbox_"+split_id).css("display","block");
	
	
}
function glossaryOut(){
	$("#glosbox_"+split_id).css("display","none");
}