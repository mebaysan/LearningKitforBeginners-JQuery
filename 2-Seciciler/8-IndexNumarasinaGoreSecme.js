$(() => {
    $("title").html("Index Numarasına Göre Eleman Seçme");
    $(".divbolgesi li:eq(1)").css({ "background-color": "red" }); // eq içerisine verdiğimiz numaraya denk gelen indexteki elemana işlem uygular
});