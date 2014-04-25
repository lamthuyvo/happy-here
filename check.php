<?php

if (htmlspecialchars($_GET["do"])== "put"){
	echo 'Lat: ' . htmlspecialchars($_GET["lat"]) ." || ". 'Lon: ' . htmlspecialchars($_GET["lon"]). "<br>";
	
}else{
	
	$arr = array('status' => 1, 'message' => 'Happy here text!', 'url' => 'http://happyhere.us');

echo json_encode($arr);

}

// Need check.php?lat=40.1212&lon=-73.01001



/*

{
"menu": 
	{
	"id": "file",
	"value": "File",
	"popup": 
		{
		"menuitem": 
			[
				{"value": "New", "onclick": "CreateNewDoc()"},
				{"value": "Open", "onclick": "OpenDoc()"},
				{"value": "Close", "onclick": "CloseDoc()"}
			]
		}
	}
}
*/


?>