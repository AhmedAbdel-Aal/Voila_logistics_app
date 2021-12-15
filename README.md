# Voila_logistics_app

### List of content:
  1- install the app
  
  2- How it is build
  
  3- Challenges
  
  
 ## install the app
   You need docker to be installed on your machine. Otherwise, you can use 'docker-play-ground'. in the Later case you will need to add the keys_dev.js file in 'backend/config'. In both cases, follow these intstruction:
   
  1- clone this repo by
     
     `git clone https://github.com/AhmedAbdel-Aal/Voila_logistics_app.git`
     
     `cd Voila_logistics_app`
     
  2- build the app image and getting it up running by
    
    `docker-compose up --build`
    
  3- Open the browser on `localhost:3000` and interact with the UI
  
 ## How it is build
 
 ### 1- the database
 
 the database is postgres. It is designed to have 3 tables [restaurants, menus, orders]. The ERD of the database is attahced. The tables where every restaurant has `shopify_collection_id` that could use and pull every product in this collection from shopify.
 
 What this tables design pros?
  - We could have one pass over every collection in the shopify data, pull its corresponding products, flag them by their restaurant id and save it in the postgres database (Menus table).
  - Once the previous step is done, every order that is done in shopify will notify the application backend (via webhook) to store the order with the specific products, which we will be able to configure their corresponding restaurants from the flag in the Menus tables.




### 2- The backend
The backend is implemented with Nodejs, express. The app uses node-postgres module to 1- open pool of connections with the database, 2- run queries over the database though connection pools.

Implemented APIs?

  1- Get, Create, Update, Delete restaurants. [Only Get is implemented in the front-end so far]
  
  2- Pull Collection products for each  restaurant
  
  3- Pull products from shopify Porduct API
  
  - What compoenents I know are missing?

      - there is no data type valdiation middleware over the data sent to the backend. It could be implmemented with `Joi` for example
  
 
  - What I see can be implemented?

      - pull product from shopify API and store them in the Menus table. (However that will store them without the flag that says which restaurant this menu belongs to)
  
### 3- The front end

The front end is implemented with React. It has [Home page, all restaurants page, single restaurant page, all products page, single product variants page].
The front end is very simple. I prioritized getting it workings that looking nice.
  
  
  
  
  
  ## Challenges
  
  1- the last time I used React was nearly 2 years ago. I had to go over some tutorials and the updates (which was very cool updates from what I remember my experience with react, specifically the state management is now done much easier and more logical).
  
  2- I was new to docker-compose. I dockerized single apps before but not full stack one (more than one service). It turned out to be easy, yet I faced some problems with getting the backend and the database connected in their containers.
  
  
  
  
  
  
  
  
  
  
  
  
  
