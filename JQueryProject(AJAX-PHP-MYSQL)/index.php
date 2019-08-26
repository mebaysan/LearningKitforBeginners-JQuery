<?php include "islem.php"; ?>
<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/js/bootstrap.min.js">
    <title></title>
</head>
<body>
<style>
    #kayıt_ekle {
        display: none;
    }

    #kayıt_duzenle {
        display: none;
    }
    #kayıt_ekle_danger{
        display: none;
    }
    #kayıt_ekle_success{
        display: none;
    }
</style>
<div class="container">
    <h1>JQuery CRUD Project</h1>
    <div align="right">
        <button id="yeni_ekle" class="btn btn-success btn-sm mb-4">Yeni Kayıt Ekle</button>
    </div>
    <div id="delete_success">

    </div>
    <div id="listele">
    </div>

    <div id="kayıt_ekle">
        <div id="kayıt_ekle_danger" class="alert alert-danger">
            Form Alanlarını Boş Bırakamazsınız...
        </div>
        <div id="kayıt_ekle_success">

        </div>
        <h4>Yeni Kayıt Ekleme</h4>
        <hr>
        <form method="post" id="jquery_ekle">
            <div class="form-group">
                <label>Adınız</label>
                <input type="text" id="ad_ekle" name="ad_ekle" class="form-control" placeholder="Adınızı Girin...">
            </div>
            <div class="form-group">
                <label>Soyadınız</label>
                <input type="text" id="soyad_ekle" name="soyad_ekle" class="form-control" placeholder="Soyadınızı Girin...">
            </div>
            <input type="hidden" name="kayıt_ekle_post">
            <button type="button" id="kayıt_gonder" class="btn btn-primary">Kayıt Ekle</button>
            <button type="button" id="geri_don" class="btn btn-warning">Geri Dön</button>
        </form>
    </div>
    <div id="kayıt_duzenle">
        <h4>Kayıt Düzenle</h4>
        <hr>
        <form action="">
            <div class="form-group">
                <label>Adınız</label>
                <input type="text" id="ad_duzenle" name="ad_duzenle" class="form-control">
            </div>
            <div class="form-group">
                <label>Soyadınız</label>
                <input type="text" id="soyad_duzenle" name="soyad_duzenle" class="form-control">
            </div>
            <button class="btn btn-primary">Kayıt Duzenle</button>
        </form>
    </div>
</div>

<script src="./node_modules/jquery/dist/jquery.min.js"></script>
<script src="./js/ozel.js"></script>
</body>
</html>