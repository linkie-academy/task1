$(".task .name").click(function(){
    $(".taskPop").show(500);
})
$(".taskPop .fa-close").click(function(){
    $(".taskPop").hide(500);
})
$(".list").click(function(){
    if($(this).find("input").prop("checked") == false){
    $(this).find("input").prop("checked", true);
    }else{
        $(this).find("input").prop("checked", false);

    }
    $(this).find("span").toggleClass("checked");
})
$(".task .fa-trash").click(function(){
    $(this).closest(".task").remove();
})