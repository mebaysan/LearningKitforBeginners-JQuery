$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });
});
// $(document).ready() -> bu script'in çalıştığı sayfa çalışınca bu kod çalışır

// 1. Yöntem
$(document).ready(function () {
    $("h3").html("Burası Jquery ile Yazıldı :)");
});

// 2. Yöntem
$().ready(function () {
    $("div").html("<h4>Bu başlıkta jquery ile yazıldı ^^</h4>");
});

// 3. Yöntem (ES6+)
$(() => {
    $("h2").html("Burası da JQuery ile yazıldı :P Hemde ES6+ ile :)");
});


// 4. Yöntem
$(function () {
    $("h5").html("Burası da JQuery ile fakat yeni bir yöntem değil :P");
});

//              -------- Fonksiyonlar ile Çalışmak --------
function islem() {
    $("h6").html("Merhaba Fonksiyonlar ile Çalışmak bu kadar Zevkli :-)");
}

$("button").click(islem);