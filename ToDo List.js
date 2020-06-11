reset(); //to give color to initial todo list

$("#addition").on("click",function(){
    $("#new").fadeToggle();
});

$("#new").on("click",function(){
    $(this).css({
        border: "3px solid #2980b9",
        outline: "none"
    });
});

$("#new").on("keypress",function(entry){
    if(entry.which==13 && $("#new").val().length > 0){
        $("ul").append('<li><span class="trash"><i class="fa fa-trash" aria-hidden="true"></i></span>'+$("#new").val() + '</li>');
        $("#new").val("");
        reset();
    }
});

$("ul").on("click","li",function(event){ //li under ul is used otherwise dynamic changes will not show this effect
    $(this).toggleClass("strikethrough");
    event.stopPropogation(); 
});

$("ul").on("click","span",function(){ //span under ul is used otherwise dynamic changes will not show this effect
    $(this).closest("li").fadeOut(500,function(){
        $(this).closest("li").remove();
        reset();
    });
});

function reset(){
    var list = document.querySelectorAll("li");
    var flag=0;
    for(var i=0;i<list.length;i++){
        if(flag==0){
            list[i].style.backgroundColor = "white";
            flag=1;
        }
        else{
            list[i].style.backgroundColor = "rgb(235, 230, 230)";
            flag=0;
        }
    }
}