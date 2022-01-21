<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$organization = $_POST['organization'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['email'];


$mail->isSMTP();                                 
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true; 
$mail->Username = 'aushev.mgtu@mail.ru'; 
$mail->Password   = 'Rbf2uiyhVsFpuHHbSVjw';
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;

$mail->setFrom('aushev.mgtu@mail.ru');
$mail->addAddress('imran0898@mail.ru'); 

$mail->isHTML(true);  

$mail->setFrom('aushev.mgtu@mail.ru');
$mail->addAddress('imran0898@mail.ru');   

$mail->isHTML(true);                              

$mail->Subject = 'Заявка от AgileDev';
$mail->Body    = '<br><b>Оставил заявку:</b> ' .$name . ' ' . '<br><b>Телефон</b>: ' .$phone. '<br><b>Почта пользователя:</b> ' .$email. '';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>
