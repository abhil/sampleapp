<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
$mysql_host = "mysql3.000webhost.com";
$mysql_database = "a4217438_data";
$mysql_user = "a4217438_admin";
$mysql_password = "admin123";
$conn = new mysqli($mysql_host, $mysql_user, $mysql_password, $mysql_database);

$result = $conn->query("SELECT * FROM Propertylist");

$outp = "[";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
    $outp .= '"Street":"'   . $rs["street"]        . '",';
    $outp .= '"Phone":"'. $rs["phone"]     . '"}';
        $outp .= '"Pincode":"'. $rs["pincode"]     . '"}';
    $outp .= '"Water":"'. $rs["water"]     . '"}';
    $outp .= '"Elec":"'. $rs["ele"]     . '"}';
}
$outp .="]";

$conn->close();

echo($outp);
?>
