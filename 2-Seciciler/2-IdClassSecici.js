$(() => {
    $("title").html("ID ve Class Seçici");
});
var islem = () => {
    $("#divBlock").css("background-color", "blue"); // id'ye ulaşmak için # (diyez) kullanılır.
    $(".petiketi").css("color", "white"); // class'a ulaşmak için '.' (nokta) kullanılır.
    $("#h3etiketiid.h3etiketiclass").html("Id ve Class Seçici").css({ "color": "red", "font-size": "50px" }); // id'si ... olan ve class'ı ... olan. aynı anda hem class hem id'ye ulaşabiliriz. Aynı zamanda çoklu css veya detaylı css yazmak istersek bu şekilde {"attr":"value","attr":"value"} şeklinde yazabiliriz.
};

$("button").click(islem);