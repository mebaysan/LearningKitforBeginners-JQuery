$(() => {
    $("title").html("Off Olay Bitirici");

    $("body").on("click", "#ekle", () => {
        $("#ekle").after("<button id='ekle'>Tıkla Buton Üret</button>");
    });
    $("body").on("click", "#kaldir", () => {
        $("body").off(); // body'de ki eventleri bitirdik
    });
});