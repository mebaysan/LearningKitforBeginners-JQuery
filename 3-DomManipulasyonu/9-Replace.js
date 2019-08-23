$(()=>{
    $("title").html("Replace");
});

$("button").click(()=>{
    $("h3").replaceWith("<h5>Değişti :P</h5>");
});