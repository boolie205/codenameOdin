<?php   
if($_POST){
    $msg = $_POST["name"] . "Said:" . $_POST["message"]; 
    $subject = $_POST["subject"];
    $headers = array(
        'From' => $_POST["email"],
        'Reply-To' => $_POST["email"],
        'X-Mailer' => 'PHP/' . phpversion()
    );
    
    // mail('boolie205@gmail.com', $subject, $message, $headers);
    header("Location: index.php");


}else{
    header("Location: index.php"); 
}



?>