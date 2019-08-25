$(() => {
    $("title").html("Trigger");
    // başka bir nesnenin olayını tetiklemeye yarar
    $("#btn1").click(() => {
        alert("Btn1 Click olayı tetiklendi");
    });
    $("#btn2").click(()=>{ // btn2'ye tıklayınca
        $("#btn1").trigger("click"); // btn1'in click eventi çalışsın
    });
});