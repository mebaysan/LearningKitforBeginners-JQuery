$(() => {
    $("title").html("Empty");
})
$("button").click(()=>{
    $("h3").empty();
    $("h3").html("Boşaltıldı");
});