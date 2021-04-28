# CS3200FinalProject

1) Name of the Project: 
Online Shopping

2) Team:
 30

3) Team Members: 
Sarah Xie

4) Description: 
The project that I created is used to monitor and store information about the online users, the products (clothing) that are sold, and the orders made by users from this online store.

5) UML Diagram:
https://drive.google.com/file/d/1jcHR-4P9BKCKM209j30dUYOjFe4HhoTg/view

6) Description of User Data Model: 
I have one user model object, users, to represent the users of the application.

7) Description of Domain Object Models: 
I have two domain objects, product and orders. 
The product domain object contains clothing products that are available from this online store.
The orders domain object contains the user’s orders from this online store.

8) Description of the user to domain object relationship:
The user has a one to many relationship with the orders. One user can have 0 orders or multiple orders.
One order only corresponds to one user.

9) Description of the domain object to domain object relationship:
The product has a one to many relationship with orders. One product can correspond to 0 or multiple orders. An order can only have one product.

10) Description of portable enumerations:
My portable enumeration is sizetype; sizetype stores the different sizes for clothing.
Currently the database contains these options for size type: XS, S, M, L, XL. However, the options can be changed by inserting or updating the data in the sizetype table.

11) User Interface: 
The user interface begins with a home screen where you can navigate to three different lists by clicking on the links, “View User List”, “View Product List”, “View Order List”.

User List: displays a list of the users; a new user can be created by pressing “Add New User” which would then bring us to the User Editor where we can input the new user information.

Product List: displays a list of the available products; a new product can be created by pressing “Add New Product” which would then bring us to the Product Editor where we can input the new product information.

Order List: displays a list of the orders made; a new order can be created by pressing “Add New Order” which would then bring us to the Order Editor where we can input the new order information.

User Editor: allows us to edit user information. We can either update/delete an existing user or create a new user. The User Editor also has a “Go To User Orders” link which displays the orders of the user we are currently observing.

Product Editor: allows us to edit product information. We can either update/delete an existing product or create a new product. The Product Editor also has a “Go To Product Orders” link which displays the orders of the product being observed.

Order Editor: allows us to edit order information. We can either update/delete an existing order or create a new product. 

User Order List: displays a list of all the orders made by a specific user

Product Order List: displays a list of all orders made for a specific product



INSTRUCTIONS:

The following applications are required:
IntelliJ IDEA, 
MySQL WorkBench, 
MySQL Database, 
Google Chrome.



DATABASE SETUP:

Download the db_design_final_project_database.zip from GitHub. 
Unzip the database dump files to a local directory. 
Log into the MYSQL WorkBench. 
Create a schema called db_design. 
Import the database from the dump file, it will create following tables:
users, 
product, 
orders, 
sizetype. 



USER INTERFACE PROJECT SETUP:


Download the project from GitHub. 
Open IntelliJ IDEA, and navigate to project folder, open the Project.
Change the database connection string. 
The database connection is in the src\main\resources\application.properties file; change the following:
spring.datasource.url = ,
spring.datasource.username = ,
spring.datasource.password = . 
Make sure the information provided matches to your database connection information. 


Run the ApplicationServer -  Right click ApplicationServer under src\main\java\project and select ‘Run ApplicationServer’
After the application server has run completely, right click index.html under src\main\webapp and select ‘Run index.html’; the home page will display in the Chrome Browser
