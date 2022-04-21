<?php
header('Content-Type: text/html; charset=utf-8');
// Kết nối cơ sở dữ liệu
$conn = mysqli_connect('localhost', 'root', '', 'data') or die ('Lỗi kết nối'); mysqli_set_charset($conn, "utf8");

// Dùng isset để kiểm tra Form
if(isset($_POST['contact-form'])){
$username = trim($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['subject']);
$message = trim($_POST['message']);

if (empty($username)) {
array_push($errors, "Name is required"); 
}
if (empty($email)) {
array_push($errors, "Email is required"); 
}
if (empty($phone)) {
array_push($errors, "Email is required"); 
}
if (empty($message)) {
    array_push($errors, "message is required"); 
    }


$sql = "INSERT INTO contact (name, phone, email,message) VALUES ('$username','$phone','$email','$message')";
echo '<script language="javascript">alert("Gửi liên hệ thành công!"); window.location="contact.php";</script>';

if (mysqli_query($conn, $sql)){

}
else {
echo '<script language="javascript">alert("Có lỗi trong quá trình xử lý"); window.location="contact.php";</script>';
}
}

?>