<?php
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: text/html; charset=utf-8');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $servername = "localhost";  
    $username = "hoctien1_admin_youngpine";
    $password = "gB=k5qHnXD0c";
    $dbname = "hoctien1_youngpinejob"; 
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    mysqli_set_charset($conn,"utf8"); 

?> 