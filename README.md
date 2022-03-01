# NodeReact
Web application to showcase how to integrate React, Node.js and Express.

Frontend uses Redux and Redux Toolkit for interaction with the backend.

# Running the application
1 - Set PORT and TOKEN_SECRET on .env. PORT number should match the port set on "proxy" property of /client/package.json. TOKEN_SECRET can be created with command: 
    node
    require('crypto').randomBytes(64).toString('hex')    
2 - npm run install-all (This will install Node and React dependencies).
3 - npm run dev (This will run the server and client in parallel through concurrently library).


# Login
Mock users:
    paul.atreides@dune.com, lady.jessica@dune.com, leto.atreides@dune.com, ... (find complete list of emails on /mock/user/users.json)
    Password can be anything. 