$(() => {
    $("title").html("get");
    let toplam = $("li").get(); // hepsinin değerini alır
    $("h4").html("Ulaşılan elemanın içeriği = " + $(toplam).eq(3).text());
});