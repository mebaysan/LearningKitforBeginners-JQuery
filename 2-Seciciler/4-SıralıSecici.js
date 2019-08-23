$(() => {
    $("title").html("Sıralı Seçiciler");
    $("li:first").css("color","blue"); // li'ler içindeki ilk elemanı alır
    $("li:last").css("color","red"); // li'ler içindeki son elemanı alır
    $("li:odd").css("color","green"); // li'ler içindeki index numarası tek olanları alır
    $("li:even").css("color","purple"); // li'ler içindeki index numarası çift olanları alır

});