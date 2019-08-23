$(() => {
    $("title").html("Before After");
    $("li:eq(1)").before("<h3>Naber</h3>"); // index numarası 1(yani 2) olan elementten önce ekler
});