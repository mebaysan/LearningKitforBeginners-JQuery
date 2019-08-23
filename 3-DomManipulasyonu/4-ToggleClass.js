$(() => {
    $("title").html("Toggle Class");
    
    $("button").click(()=>{
        $("p").toggleClass("renk"); // bas çek yaptığımızda burası çalışacak class'ı ekler kaldırır ekler kaldırır...
    });
});