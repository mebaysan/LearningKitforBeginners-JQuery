$(() => {
    $("title").html("Slice Seçici");
    $("ul li").slice(1, 4).css("color", "red"); // parametre olarak verdiğimiz indexteki elementleri yakalar ve onlara işlem yapar.
});