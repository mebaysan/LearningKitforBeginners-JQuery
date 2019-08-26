<?php include "islem.php" ?>
<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/js/bootstrap.min.js">
    <title>Document</title>
</head>
<body>
<table class="table table-striped">
    <thead>
    <tr>
        <th>Id</th>
        <th>Ad</th>
        <th>Soyad</th>
        <th></th>
        <th></th>
    </tr>
    </thead>
    <tbody>

<?php $result = select_all_entities();
    foreach($result as $key => $value){
 ?>

    <tr>
        <td><?php echo $value["id"] ?></td>
        <td><?php echo $value["user_name"] ?></td>
        <td><?php echo $value["user_lastname"] ?></td>
        <td width="20">
            <button id="duzenleme_butonu" class="btn btn-primary btn-sm">Düzenle</button>
        </td>
        <td width="20">
            <button id="<?php echo $value["id"] ?>" class="btn btn-danger btn-sm jquery_sil">Sil</button>
        </td>
    </tr>
    <?php }; ?>

    </tbody>
</table>

</body>
</html>