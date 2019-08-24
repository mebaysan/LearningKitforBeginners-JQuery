$(()=>{
    $("title").html("Length Yapısı");
});
$("button").click(()=>{
    let adet = $("li").length; // bize seçilen elemanın adedini verir
    $("h4").html(adet + " adet 'li' var");
});