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

**VUE-JSFRONT-END**

```
(a)sudo npm i -g @vue/cli


(b) vue create client -creates a vueJS App in the client folder.

(Therefore you create a vue JS Application in another folder)


(c)Concurrently package/json script runs both the server and the client together (concurrently!)


```

**Clientdepedencies**

```
Front end Project dependencies are:

npm i vue-router axios vue-toasted

(toasted is an alerts library!!->laravel toasts(sweet alerts!))

Run the dependencies from the client folder!

```

**VUEEVENTS**

```
(a) v-on (helps you handle an event like on submit)

There are also some default behaviour when handling events thus then need to prevent default!!

(b)When you want to bind an input to data you use v-model
Just like angular model.
Its like v-bind for components but this works with the receiving of data.

V-modelis like you are receiving data from an input component ..which you may as well assign.

```

```
ROUTER has to be configured in main.js and uses Vue.use(Router);
as its been  configured from the root of the application.


```

**DATAANDSTATES**

```
Any data from a component (v-model input)
you access it via this key word from an adjacent function.

```

**TODOLIST&**

```
(A)Axios Crash Course

(B)Fetch Api Crash Course


(C)VUE JS LIFE CYCLE METHODS:They include beforecreate, componentdidMount{
    they are called by default when a component is loading!
}


```

**VUEJSESLINT**

```
(a)eslint config
 "rules": {
      "no-console": "off"
    },
    
```

```

Main.js{instantiate packages in vue like router .js}

{in this project router an toaster are instantiated here.}

Vue Toasted package is so awesome.

V-Model is what is passed to the state as the key.and is what takes the value of the input or select and passes it to the state.


```

**VUEJSROUTERSTRUCTURE**

```
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "search",
      component: Search
    },
    {
      path: "/profile/:platform/:gamertag",
      name: "profile",
      component: Profile
    }
  ]
});

```
