$(() => {

    $("#verigetir").click(() => {
        $("b").load("veriler.php"); // verigetir'e tıklayınca veriler.php içerisindeki verileri alır loadsetinterval.php içindeki b'ye aktarır
    });
});