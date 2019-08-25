$(() => {
    $("title").html("JQuery AJAX");

});

$("#gönder").click(() => {
    $.ajax({
        type: "post", // gönderim şekli
        url: "islemPOST.php", // nereye gönderileceği
        data: $("#jquery_ajax").serialize(), // hangi elementin verileri, serialize-> verilenin dizi olarak gitmesi için
        success: ((cevap) => { // başarılı şekilde cevap gelirse ne olacağı. success -> o sayfada olan(islem.php) tüm veriyi alır
            $("b").html(cevap);
        })
    });
});