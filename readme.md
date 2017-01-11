# 🤰Getting started

If you just forked and cloned a node app, what command should you run from the terminal to ensure you've downloaded all the dependencies?

```
npm install --save express

```

# Setup

Read through the code in `server.js`

Run the command `npm start` from your terminal.
What does it do? 

```
Looks like it runs server.js in the terminal and starts up the server 

```

What code in `package.json` do you think it's executing? 

```
  "scripts": {
    "start": "node server.js"
    }

```

# 👷‍ Can you?

Create a new route to handle GET requests to '/about'

```

```

Create a new html file called 'bio.html' with the text "Me-yow!"

```

```

Add a link to "index.html" that will make a GET request to '/about'

```

```

When a user visits "/" and clicks on "/about" they should see the contents from 'bio.html'

```

```

# 🤷‍ Then

Let's talk about "middleware"

Read the following https://expressjs.com/en/guide/using-middleware.html

Answer the following questions: 
- What do middleware functions have access to?

```

```

- What tasks can middleware perform?

```

```

- What does `next()` do?

```

```

- What is a "mount path"? 

```

```

- What is the only built-in middleware?

```

```

