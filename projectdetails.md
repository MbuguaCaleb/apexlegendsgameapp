**(a)ProjectDependencies**

```

Project dependencies are as follows
npm i express dotenv morgan node-fetch concurrently

express-nodeframework
morgan-dev logger
node-fetch-helps in making requests to 3rd party APIs
concurrently-helps us run both the front end vue js server at the sametime and back end server concurrently.


npm i -D nodemon (dev dependency for server autoreload!)

```

```
Whenever you change an enviromen variable you must restart your server for it to be effective.

```

```
whenever you instanciate app.use it means that everything is now running from your entire express application.

Morgan is an awesome tool for logging http api requests in the console.A lot more may be done including logging to files.
```

```
Fetch API IS Asynchronous(It returns a promise)

Thus whenever you are using fetch to make a request to an external API
You use {.then(success) .catch(err)} or async await.

```
