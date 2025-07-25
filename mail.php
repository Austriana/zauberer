<?php 
if(isset($_POST['submit'])){
    $mailFrom = $_POST['email'];
    $vorName = $_POST['vorName'];
    $nachName = $_POST['nachName'];
    $nachricht = $vorName . " " . $nachName . " wrote the following:" . "\n\n" . $_POST['nachricht'];
    
    $mailto = "marco.mang@gmx.de";
    $headers = "From:" . $mailFrom;

    mail($mailto,$nachricht,$headers);
    header("Locatiion: index.html?mailsend");
    }
?>