$(() => {
    $("title").html("One Olay Kısıtlayıcı");
             // one yaptığımız zaman sadece 1 kere bu olay gerçekleşir
    $("body").one("click", "button", () => { // body üzerinde bu işlemi yapacağız dedik, click event'i ve button nesnesini ve function'ı parametre olarak verdik
        $("button").after("<button>Tıkla Button Üret</button>");
    });
});
