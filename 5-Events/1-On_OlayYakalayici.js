$(() => {
    $("title").html("On Olay Yakalayıcı");
    // $("button").click(() => {
    //     $("button").after("<button>Tıkla Buton Üret</button>");
    // });
    $("body").on("click", "button", () => { // body üzerinde bu işlemi yapacağız dedik, click event'i ve button nesnesini ve function'ı parametre olarak verdik
        $("button").after("<button>Tıkla Button Üret</button>");
    });
});

