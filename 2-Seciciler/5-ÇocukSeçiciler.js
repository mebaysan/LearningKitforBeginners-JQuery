$(() => {
    $("title").html("Çocuk Seçiciler");
    $(".divbolgesi p").css({"background-color": "red"}); // bu class içindeki p elementlerini seçtik
    $(".divbolgesi p:first-child").css({"color":"blue"}); // bu class içindeki ilk p elementini seçtik
});
