$(() => {
    $("title").html("Has Class"); // seçtiğimiz nesne üzerinde belirlenen stil var mı yok mu ona bakar
    if($("h3").hasClass("degerliClass")){
        $("span").html("İstedğimiz Class'a sahip!");
    }else{
        $("span").html("İstedğimiz Class'a sahip değil!");
    }
});