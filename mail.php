<?php
//get data from form
$name = $_POST['name'];
$email= $_POST['email'];
$sub = $_POST['subject'];
$message= $_POST['message'];
$to = "sandip.chavan@mitpune.edu.in";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email ."\r\n Subject = ". $sub . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.php");
?>