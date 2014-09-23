abhiswork
=====
This is an application to display the property details. 

index.html is to read the data from web server usin JSON xmlhttprequest
url is http://databaseofalrais.site90.net/
 Display it in a table. 



file.php to access the database.
<br>
When i execute this get the output like:
<br>
[ {"Name": "Labourcamp", "Street": "Dubai", "Phone": "345677","Pincode": "89676","Water": "7689","Elec": "9875"}, {"Name": "Villa", "Street": "asd", "Phone": "86908530","Pincode": "92580","Water": "8509","Elec": "56"}, {"Name": "Apartment", "Street": "wdad", "Phone": "907543","Pincode": "8570","Water": "9287","Elec": "93850"}] 
<br>
Details of the database.
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
