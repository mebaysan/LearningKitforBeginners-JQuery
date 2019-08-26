$(() => {
    $("title").html("JQuery Project");
    $("#listele").load("veriler.php"); // sayfa yüklendiği gibi veriler çekiliyor. (SELECT)
    $("#yeni_ekle").click(() => { // bu id'deki butona tıklandığında
        $("#listele").fadeOut(500); // bu id'deki element gizleniyor
        $("#kayıt_ekle").fadeIn(3800); // bu id'deki element açığa çıkıyor
    });
    $("#duzenleme_butonu").click(() => {
        $("#listele").fadeOut(500);
        $("#kayıt_duzenle").fadeIn(3800);
    });
    $("#kayıt_gonder").click(() => {
        if ($("#ad_ekle").val() == "" || $("#soyad_ekle").val() == "") {
            $("#kayıt_ekle_danger").fadeIn(500);
            event.preventDefault();
        } else {
            $.ajax({
                type: "post",
                url: "islem.php",
                data: $("#jquery_ekle").serialize(),
                success: ((cevap) => {
                    $("#kayıt_ekle_success").fadeIn(500).html(cevap).delay(3000).fadeOut(1000);
                    $("#listele").load("veriler.php");
                })
            });
        }

    });
    $("#geri_don").click(() => {
        $("#kayıt_ekle").hide();
        $("#listele").fadeIn(500);

    });
    $("body").on("click", ".jquery_sil", function () {
        let kayit_id = $(this).attr("id");
        // alert(kayit_id);
        if (confirm("Silinecek ID = " + kayit_id)) {
            $.ajax({
                type: "post",
                url: "islem.php",
                data: {'kayit_id': kayit_id},
                success: ((cevap) => {
                    $("#delete_success").fadeIn(500).html(cevap).delay(3000).fadeOut(1000);
                    $("#listele").load("veriler.php");
                })
            })
        }
    });
});