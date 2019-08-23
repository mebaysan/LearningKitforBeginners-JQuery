$(() => {
    $("title").html("Previous ve Next Seçicileri");
    $(".iki").prev().css({ "background-color": "red" }); // seçtiğimiz elementten bir önceki elemente işlem uygular
    $(".iki").next().css({ "background-color": "blue" }); // seçtiğimiz elementten bir sonraki elemente işlem uygular
});