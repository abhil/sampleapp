abhiswork
=====
This is an application to display the property details. 

index.html is to read the data from web server usin JSON xmlhttprequest
url is http://databaseofalrais.site90.net/
list in a table


<h1>Details of Properties</h1>
<div id="id01"></div>

<script>
var xmlhttp = new XMLHttpRequest();
var url = "http://databaseofalrais.site90.net/";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<table>";

    for(i = 0; i < arr.length; i++) {
        out += "<tr><td>" + 
        arr[i].Name +
        "</td><td>" +
        arr[i].Street +
        "</td><td>" +
        arr[i].Phone +
        /*"</td><td>"+
        arr[i].Pincode +
        "</td><td>"+
        arr[i].Water +
        "</td><td>"+
        arr[i].Elec+*/
        "</td></tr>";
    }
    out += "</table>"
    document.getElementById("id01").innerHTML = out;
}
</script>


file.php to access the database 
$mysql_host = "mysql3.000webhost.com";
$mysql_database = "a4217438_data";
$mysql_user = "a4217438_admin";
$mysql_password = "admin123";

The data table name is Propertylist
You need to copy the below code to create the dable:
CREATE TABLE IF NOT EXISTS Propertylist ( name TEXT NOT NULL, street TEXT NOT NULL, phone INT NOT NULL,pincode INT NOT NULL, water INT NOT NULL,ele INT NOT NULL)'
INSERT INTO `Propertylist`(`name`, `street`, `phone`, `pincode`,`water`, `ele`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])





MyWorks
