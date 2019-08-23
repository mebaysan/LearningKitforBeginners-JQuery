$(() => {
    $("title").html("Each Döngüsü");
    $("ul li").each(function (index) { // ul içerisindeki li'leri yakalıyoruz.
        alert(index + ". eleman : " + $(this).text());
    });
});