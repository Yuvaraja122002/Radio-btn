$(document).ready(function (){

    $(".get_images_id").bind("mousedown",image_ani)

});

function image_ani(){
    var get_id=$(this).attr("id");
    //console.log(get_id)
    var id = get_id.split('_')[1];
    var modal = document.getElementById('myModal_'+ id);

    var img = document.getElementById('myImg_'+ id);
    var modalImg = document.getElementById("img_"+ id);
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    var span = document.getElementById("close_"+ id);

    span.onclick = function() { 
        modal.style.display = "none";
    }
}