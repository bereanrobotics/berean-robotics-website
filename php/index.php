<?php

$rank = $_POST["rank"];

if (!empty($rank)) {

	$data = "<p>$name</p>";

	file_put_contents('hello.txt',$data,FILE_APPEND);

}

?>