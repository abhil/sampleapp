abhiswork
=====
This is an application to display the property details. 

index.html is to read the data from web server usin JSON xmlhttprequest
url is http://databaseofalrais.site90.net/
 Display it in a table. 



file.php to access the database
Details
<br>

$mysql_host = "mysql3.000webhost.com";
$mysql_database = "a4217438_data";
$mysql_user = "a4217438_admin";
$mysql_password = "admin123";

The data table name is Propertylist
You need to copy the below code to create the dable:
<br>
CREATE TABLE IF NOT EXISTS Propertylist ( name TEXT NOT NULL, street TEXT NOT NULL, phone INT NOT NULL,pincode INT NOT NULL, water INT NOT NULL,ele INT NOT NULL)'
<br>
INSERT INTO `Propertylist`(`name`, `street`, `phone`, `pincode`,`water`, `ele`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])





MyWorks
