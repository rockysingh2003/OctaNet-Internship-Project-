<?php
$connection = mysqli_connect('127.0.0.1', 'root', '', 'contact_db');
if (isset($_POST['send'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $request = "insert into contact_tab(name, email, subject, message) values('$name','$email','$subject','$message')";
    mysqli_query($connection, $request);
    header('location:contact.html');
} else {
    echo 'something went wrong try again';
}

?>