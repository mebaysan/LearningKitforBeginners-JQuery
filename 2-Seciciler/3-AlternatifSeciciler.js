$(() => {
    $("title").html("Alternatif Seçiciler");
    // 1. Yol
    $("input[type='text']").css("width", "600px"); // köşeli parantez içerisinde tipini belirttik
    $("input[type='password']").css("width", "300px");
    // 2. Yol
    $("input:text").css("width", "600px"); // yukardaki işlemler ile aynı
    $("input:password").css("width", "300px");
});