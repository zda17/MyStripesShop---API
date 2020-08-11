# MyStripes(API)

## Summary
A Node, Express API built to connect the MyStripes React client to a Postgres database


## Endpoints
### This is a JSON API server, it both expects JSON in the request body and returns JSON in the response.
### /api is the root path for all of these routes (i.e.: localhost:8000/api/auth)
#### /auth
- POST Creates an auth token. Requires valid ```email``` and ```password``` (created when you make a user account) in the request body. Returns a JWT token named ```authToken```.
- PUT Refreshes the auth token. Requires valid ```email``` and ```userID``` in the request body. Returns a new JWT token.

#### /carts
- GET Retrieves all of the product in the ```line_items``` table that matches the provided ```UUID``` in the request body. Returns an array of product objects.
- POST Inserts a new cart into the ```carts``` table using the ```UUID``` in the request body as the ID. Returns the newly created cart from the database.

#### /forma
- POST Takes an object containing ```name```, ```email```, and ```message``` from the request body and emails it to the site email (mystripesapp@gmail.com). Returns a message of success or failure.
    - Example:\
      {\
        "name": "John",\
        "email": "johnsmith@gmail.com",\
        "message": "I wanna buy your stuff"\
      }

#### /orders
- GET Retrieves all entries from the ```orders``` table, no body required in request. Returns array of order objects.
- POST Inserts a new order into the ```orders``` table. Requires ```email, addess, state, product_skus_and_quantity, amount_cents, and uuid``` in request body. Returns the newly created order from the database.
    - Example:\
      {\
          "email" : "user@test.com",\
          "address" : "123 Address Lane",\
          "state" : "OK",\
          "product_skus_and_quantity" : "{{ATC-OK-Beanie-S-GREEN,1},{ATC-OK-Beanie-M-DKBL,3},{ATC-OK-DadHat-XS,5}}",\
          "amount_cents" : 7900,\
          "uuid" : "a6b14dc5-8102-4d14-8d43-73bfdvasd8eec"\
      }

### /products
- **/all**
  - GET Retrieves all entries from the ```products``` table, no body required in request. Returns array of product objects.
- **/sku/:base_sku**
  - GET Retrieves all entries whose base_sku column matches the base_sku param from the ```products``` table. Returns an array of product objects.
- **/mens**
  - GET Retrieves all entries whose gender column equals "M" from the ```products``` table. Returns an array of product objects.
- **/womens**
  - GET Retrieves all entries whose gender column equals "W" from the ```products``` table. Returns an array of product objects.
- **/unisex**
  - GET Retrieves all entries whose gender column equals "U" from the ```products``` table. Returns an array of product objects.
- **/tops**
  - GET Retrieves all entries whose category column equals "tops" from the ```products``` table. Returns an array of product objects.
- **/bottoms**
  - GET Retrieves all entries whose category column equals "bottoms" from the ```products``` table. Returns an array of product objects.
- **/accessories**
  - GET Retrieves all entries whose category column equals "accessories" from the ```products``` table. Returns an array of product objects.


## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
