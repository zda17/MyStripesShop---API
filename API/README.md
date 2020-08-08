# MyStripes(API)

## Summary
A Node, Express API built to connect the MyStripes React client to a Postgres database


## Endpoints
### This is a JSON API server, it both expects JSON and returns JSON.
/auth/token
* POST Creates an auth token. Requires valid ```email``` and ```password``` (created when you make a user account). Returns a JWT token named ```authToken```.

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
