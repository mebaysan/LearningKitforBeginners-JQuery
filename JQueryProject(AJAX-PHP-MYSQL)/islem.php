<?php
require_once "baglan.php";

function select_all_entities()
{
    global $db;
    $query = "select * from users order by id ASC";
    $result = mysqli_query($db, $query);
    return $result;
}

if (isset($_POST["kayıt_ekle_post"])) {
    global $db;
    $user_name = $_POST['ad_ekle'];
    $user_lastname = $_POST['soyad_ekle'];
    $query = "INSERT INTO users (user_name,user_lastname) VALUES ('$user_name','$user_lastname')";
    $result = mysqli_query($db, $query);
    if ($result) {
        echo "<div class='alert alert-success'>" . $user_name . " adlı kullanıcı başarıyla eklendi!</div>";

    } else {
        echo "<div class='alert alert-danger'>" . $user_name . " adlı kullanıcı eklenemedi!</div>";
    }

}
if (isset($_POST['kayit_id'])) {
    global $db;
    $user_id = $_POST['kayit_id'];
    $query = "DELETE FROM users where id='$user_id'";
    $result = mysqli_query($db, $query);
    if ($result) {
        echo "<div class='alert alert-success'>" . $user_id . " nolu kullanıcı başarıyla silindi!</div>";
    } else {
        echo "<div class='alert alert-danger'>" . $user_id . " nolu kullanıcı silinemedi!</div>";
    }
}