$(() => {
    $("title").html("Fİltreleme Fonksiyonları");
    // $('div').first().css({"background-color":"yellow"}); // ilk divi yakalar
    // $('div').last().css({"background-color":"red"}); // son divi yakalar
    // $('div').not(".orta").css({"background-color":"yellow"}); // Bütün divlere işlem uygular fakat not içerisine verdiğimiz class'takine uygulamaz
    $('div').filter(".orta").css({ "background-color": "yellow" }); // filter ile yakaladığımız elemente işlem yapar

});