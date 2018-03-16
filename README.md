# Airsera Coding Challenge 

Written using React, Express, and Mysql!

A simple pizza ordering site w/ an admin dashboard.


## Installation and Running
Requires Docker and docker-compose for the cleanest experience

Clone from git  
`git clone https://github.com/Chrischuck/coding-challenge.git`

cd into folder  
`cd {path}/coding-challenge`

Build images  
`docker-compose build`

Run  
`docker-compose up`

Client will be on localhost:8080  
Api will be on localhost:3000  
Mysql database will be on localhost:3307  

## Usage

Order Route  
`http://localhost:8080/`  
This route is where uses can order pizza. Sizes and toppings are listed and uses can mix and match and the price is displayed at the bottom. Once the order button is pressed, the user's order is sent to the backend and saved in mysql. Once this is complete, the order form will be replaced with a confirmation screen. The confirmation screen verifies the order has been made and allows the user to make another order.