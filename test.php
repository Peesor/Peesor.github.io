<?php
	session_start();
	
	if ((!isset($_POST['login'])) || (!isset($_POST['haslo'])))
	{
		header('Location: index.php');
		exit();
	}

	
	$login = $_POST['login'];
    $haslo = $_POST['haslo'];

	


    echo $login,"  ",$haslo;





?>





