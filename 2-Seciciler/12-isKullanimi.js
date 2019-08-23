// seçilen elementte aradığımız özellik var mı yok mu
$(() => {
    $("title").html("is Kullanımı");
    if ($("div").is("#deneme")) {
        $("h3").html("deneme id'si var");
    } else {
        $("h3").html("deneme id'si yok");
    }
});