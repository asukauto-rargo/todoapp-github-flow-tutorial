$("#addTodo").click(function (){
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
}); 

$(document).on("change", "input[type = checkbox]", function() {
    if($(this).is(":checked")) {
        $(this).parent().css("text-decoration", "line-through");
        $(this).parent().css("color", "#ccc");
        $(this).parent().css("transition", "1s");
        $(this).parent().css("font-size", "1.3rem");
    } else {
        $(this).parent().css("text-decoration", "none");
        $(this).parent().css("color", "#000");
        $(this).parent().css("transition", "1s");
        $(this).parent().css("font-size", "1rem");
    }
});