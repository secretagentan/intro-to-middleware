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

[x] Create a new route to handle GET requests to '/about'

[x] Create a new html file called 'bio.html' with the text "Me-yow!"

[x] Add a link to "index.html" that will make a GET request to '/about'

[x] When a user visits "/" and clicks on "/about" they should see the contents from 'bio.html'


# 🤷‍ Then

Let's talk about "middleware"

Read the following https://expressjs.com/en/guide/using-middleware.html

```
// Express is a routing & middleware web framework
// that has minimal functionality of its own. 

// An Express application is essentially a series
// of middleware function calls.

```

Answer the following questions: 
- What do middleware functions have access to?

```
- the request object (req)
- the response object (res)
- the next middleware function in the app's req-res cycle
    - commonly denoted by variable 'next'

```

- What tasks can middleware perform?

```
- Execute any code 
- Make changes to the request & the response objects
- End the request-response cycle
- Call the next middleware function in the stack 

```

- What does `next()` do?

```
If the current middleware function does not end the 
request-response cycle, it must call `next()` to pass 
control over to the next middleware function.
Otherwise, the request will be left hanging. 

```

- What is a "mount path"? 

```

```

- What is the only built-in middleware?

```
`express.static` : 
    This function is based on serve-static, and is
    responsible for serving static assets such as: 
    HTML files, images, CSS files, and so on. 

The function signature is: 
    `express.status(root, [options])`

For example: 
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname + '/public'));

```

