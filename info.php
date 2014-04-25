<?
	$dbhost = '98.130.0.126';
	$dbname = 'C0825_happy';
	$dbuser = 'C0825_hhuser';
	$dbpass = 'H4ppyHere';
	
	$connection = mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($dbname,$connection);
	
	unset($dbuser, $dbhost, $dbname, $dbpass);
?>
