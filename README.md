# Airsera Coding Challenge 

Written using React, Express, Mysql, Yerba Mate, and love! 🚿 

A simple pizza ordering site where users can choose a pizza size and add toppings. On top of this, there is an admin dashboard where the admins can create, edit, or delete their pizza options.


## UI
<p align="center">
  <img  src='https://github.com/Chrischuck/coding-challenge/blob/master/public/1.png' height='400' width='400'>
  <img src='https://github.com/Chrischuck/coding-challenge/blob/master/public/2.png' height='400' width='400'>
</p>

## Installation and Running
Requires Docker and docker-compose for the cleanest experience

### Clone from git  
`git clone https://github.com/Chrischuck/coding-challenge.git`

### Enter the folder  
`cd {path}/coding-challenge`

### Build images  
`docker-compose build`

### Run  
`docker-compose up`

Client will be on localhost:8080  
Api will be on localhost:3000  
Mysql database will be on localhost:3307  

## Usage

### Order Route  
`http://localhost:8080/`  
This route is where uses can order pizza. Sizes and toppings are listed and uses can mix and match and the price is displayed at the bottom. Once the order button is pressed, the user's order is sent to the backend and saved in mysql. Once this is complete, the order form will be replaced with a confirmation screen. The confirmation screen verifies the order has been made and allows the user to make another order.  

### Admin Login Route  
`http://localhost:8080/login`  
 This route is a simple username password login for admin access. After authentication, the user get redirected to the dashboard. To test use username: "user" and password: "hunter2"  

 ### Dashboard Route  
`http://localhost:8080/dashboard`  
 This route is only accesable only when a user is logged in. It allows the admin to create, read, update, and delete their toppings and sizes for the pizza.

## Under the hood

### Front End

The front end is built on React, Redux, React Router 4, and Redux Thunk. Routes and (some of the) reducers are loaded asyncronously. Testing is done with Jest and Enzyme. 

### Back End

The backend is a simple REST server built on express. It uses node mysql to connect to the database and it makes its connections from a pool to lower the overhead of constantly reconnecting to the database.  

### Database

The database is mysql. There are 4 tables: admins, orders, sizes, and toppings. These tables don't have UUIDs for the content for simplicity. In the sizes and toppings table use the "value" column for a unique key. This value key is simply the name of the row capitalized and with spaces turned into "_" For example: "Bell Peppers" becomes "BELL_PEPPERS"

The admins table is the list of people who can access the dashboard. Each row consists of two columns, username(VARCHAR(20)) and password(VARCHAR(20)). It is initially populated with 1 admin with the username: "user" and password: "hunter2"  

The orders table is where orders are saved. Each row consists of two columns, size(VARCHAR(20)) and toppings(JSON). 

The sizes table is where the pizza sizes are saved. Each row consists of three columns, name(VARCHAR(20)), value(VARCHAR(20)), price(DECIMAL(13,2)). It is initiall populated with 3 sizes: Small, Medium, and Large.  

The toppings table is where the pizza sizes are saved. Each row consists of three columns, name(VARCHAR(20)), value(VARCHAR(20)), price(DECIMAL(13,2)). It is initiall populated with 4 sizes: Cheese, Mushrooms, Pepperoni, Bell Peppers.  