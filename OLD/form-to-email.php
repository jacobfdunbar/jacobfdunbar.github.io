<?php
if(!isset($_POST['submit']))
{
    echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate
if(empty($name)||empty($visitor_email)) {
    echo "Name and email are mandatory!";
    exit;
}

$email_from = 'dunbarj@purdue.edu';
$email_subject = "New Form Submission";
$email_body = "You have recieved a new message form the $name.\n".
    "email address: $visitor_email\n".
    "Message:\n $message".

$to = "dunbarj@purdue.edu";
$headers = "From: $email_from \r\n";

//Send!
mail($to,$email_subject,$email_body,$headers);
?>