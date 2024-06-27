const graphqlData = {
    graphqlNote: [
      {
        id: 1,
        title: "Graphql setup",
        note: [
          {
            text1: `1)    Open CMD or command console 

            $> npm init –y 
            
                2) Change package.json file like below 
            
                3) cors  : - The CORS package, which is Cross-Origin Resource Sharing middleware, will allow you to easily access this server from a browser.  
            
            $>  npm install express cors 
            
               4)  Nodemon : - Nodemon is a tool that helps develop Node-based applications by automatically restarting the application when file changes in the directory are detected. 
            
            $>  npm install -D nodemon 
            
            There are a few more fields you will add at this point. To package.json, make the following highlighted changes: `,
            code1: ` 

            // { 
            
              "main": "server.js", 
            
              "scripts": { 
            
                "dev": "nodemon server.js" 
            
              }, 
            
            //   "dependencies": { 
            
            //     "cors": "^2.8.5", 
            
            //     "express": "^4.17.3" 
            
            //   }, 
            
            //   "devDependencies": { 
            
            //     "nodemon": "^2.0.15" 
            
              }, 
            
              "type": "module" 
            
            // } 
            `,
          },
          {
            text1: `5)    Next, create a file called server.js. In it, you will create a simple Express server, listen on port 4001, and send a request saying Hello, GraphQL!. To set this up, add the following lines to your new file: 
            
            <span style="font-size:20px;"><b>server.js</b></span> 
            `,
            code1: `import express from 'express' 

            import cors from 'cors' 
            
             const app = express() 
            
            const port = 4001 
            
            app.use(cors()) 
            
            app.use(express.json()) 
            
            app.use(express.urlencoded({ extended: true })) 
            
              
            
            app.get('/', (request, response) => { 
            
              response.send('Hello, GraphQL!') 
            
            }) 
            
            app.listen(port, () => { 
            
              console.log('Running a server at http://localhost: \${port}') 
            
            }) `,
          },
          {
            text1: `npm run dev 
           <b> Setting Up GraphQL HTTP Server Middleware</b> 

    To begin integrating GraphQL into the Express server, you will install three packages: graphql, express-graphql, and @graphql-tools/schema. Run the following command: 

$> npm install graphql@14 express-graphql @graphql-tools/schema 

    -> graphql: the JavaScript reference implementation for GraphQL. 

    -> express-graphql: HTTP server middleware for GraphQL. 

    -> @graphql-tools/schema: a set of utilities for faster GraphQL development. 

 

    You can import these packages in the server.js file by adding the highlighted lines: 
            `,
            code1: ` 

            // import express from 'express' 
            
            // import cors from 'cors' 
            
            import { graphqlHTTP } from 'express-graphql' 
            
            import { makeExecutableSchema } from '@graphql-tools/schema' `,
          },
          {
            text1: `     
            8) The next step is to create an executable GraphQL schema. 
            
            To avoid the overhead of setting up a database, you can use an in-memory store for the data the GraphQL server will query. You can create a data object with the values your database would have. Add the highlighted lines to your file: 
            
             `,
            code1: `
            // import express from 'express' 

            // import cors from 'cors' 
            
            // import { graphqlHTTP } from 'express-graphql' 
            
            // import { makeExecutableSchema } from '@graphql-tools/schema' 
            
              
            
            const data = { 
            
              warriors: [ 
            
                { id: '001', name: 'Jaime' }, 
            
                { id: '002', name: 'Jorah' }, 
            
              ], 
            
            } 
            
             
            
            ... 
            
            ... `,
          },
          {
            text1: `9)     The data structure here represents a database table called warriors that has two rows 

            `,
            code1: `type Warrior { 

                id: ID! 
              
                name: String! 
              
              } `,
          },
          {
            text1: `10) The id has an ID type, and the name has a String type. These are both built-in scalars, or primitive types. The exclamation point (!) means the field is non-nullable, and a value will be required for any instance of this type. 
            
            The only additional piece of information you need to get started is a base Query type, which is the entry point to the GraphQL query. We will define warriors as an array of Warrior types. `,
            code1: `type Query { 

                warriors: [Warrior] 
              
              } `,
          },
          {
            text1: `11)  With these two types, you have a valid schema that can be used in the GraphQL HTTP middleware. Ultimately, the schema you define here will be passed into the makeExecutableSchema function provided by graphql-tools as typeDefs. The two properties passed into an object on the makeExecutableSchema function will be as follows: 
            
            <b> typeDefs </b>: a GraphQL schema language string. 
            
            resolvers: functions that are called to execute a field and produce a value. 
            
            In server.js, after importing the dependencies, create a typeDefs variable and assign the GraphQL schema as a string, as shown here: `,
            code1: `const data = { 

            //     warriors: [ 
            //       { id: '001', name: 'Jaime' }, 
            //       { id: '002', name: 'Jorah' }, 
            //     ], 
            //   } 
              
                
              
              const typeDefs = ' 
              type Warrior { 
                id: ID! 
                name: String! 
              } 
              
                
              
              type Query { 
                warriors: [Warrior] 
              } 
              ' 
              ....
              
               `,
          },
          {
            text1: ` 12)    Now you have your data set as well as your schema defined, as data and typeDefs, respectively. Next, you'll create resolvers so the API knows what to do with incoming requests. 
            
            <b>GraphQL Resolver Functions</b> 

Resolvers are a collection of functions that generate a response for the GraphQL server. Each resolver function has four parameters: 

obj: The parent object, which is not necessary to use here since it is already the root, or top-level object. 

args: Any GraphQL arguments provided to the field. 

context: State shared between all resolvers, often a database connection. 

info: Additional information. 

In this case, you will make a resolver for the root  <b>Query </b> type and return a value for  <b>warriors </b>. 

To get started with this example server, pass the in-memory data store from earlier in this section by adding the highlighted lines to  <b>server.js </b>: 
            `,
            code1: `... 

            // const typeDefs = ' 
            // type Warrior { 
            //   id: ID! 
            //   name: String! 
            // } 
            
            // type Query { 
            //   warriors: [Warrior] 
            // } 
            // ' 
            const resolvers = { 
              Query: { 
                warriors: (obj, args, context, info) => context.warriors, 
              }, 
            } 
            ... `,
          },
          {
            text1: `13) The entry point into the GraphQL server will be through the root <b>Query</b> type on the resolvers. You have now added one resolver function, called <b>warriors</b>, which will return <b>warriors</b> from <b>context.context</b> is where your database entry point will be contained, and for this specific implementation, it will be the <b>data</b> variable that contains your in-memory data store. 

            Each individual resolver function has four parameters: <b>obj, args, context</b>, and <b>info</b>. The most useful and relevant parameter to our schema right now is <b>context</b>, which is an object shared by the resolvers. It is often used as the connection between the GraphQL server and a database. 
            
            Finally, with the <b>typeDefs</b> and <b>resolvers</b> all set, you have enough information to create an executable schema. Add the highlighted lines to your file: `,
            code1: `... 

            // const resolvers = { 
            //   Query: { 
            //     warriors: (obj, args, context, info) => context.warriors, 
            //   },
            // } 
        
            const executableSchema = makeExecutableSchema({ 
              typeDefs, 
              resolvers, 
            }) 
            
            ... `,
          },
          {
            text1: `14) The makeExecutableSchema function creates a complete schema that you can pass into the GraphQL endpoint. 

            Now replace the default root endpoint that is currently returning Hello, GraphQL! with the following /graphql endpoint by adding the highlighted lines: `,
            code1: `... 

            //     const executableSchema = makeExecutableSchema({ 
            //      typeDefs, 
            //      resolvers, 
            //    }) 
           
           app.use( 
             '/graphql', 
             graphqlHTTP({ 
               schema: executableSchema, 
               context: data, 
               graphiql: true, 
             }) 
           ) 
           
           ...`,
          },
          {
            text1: `15) The convention is that a GraphQL server will use the /graphql endpoint. Using the graphqlHTTP middleware requires passing in the schema and a context, which in this case, is your mock data store. 

            You now have everything necessary to begin serving the endpoint. Your server.js code should look like this: `,
            code1: `import express from 'express' 

            import cors from 'cors' 
            
            import { graphqlHTTP } from 'express-graphql' 
            
            import { makeExecutableSchema } from '@graphql-tools/schema' 
            
              
            
            const app = express() 
            
            const port = 4000 
            
              
            
            // In-memory data store 
            
            const data = { 
            
              warriors: [ 
            
                { id: '001', name: 'Jaime' }, 
            
                { id: '002', name: 'Jorah' }, 
            
              ], 
            
            } 
            
              
            
            // Schema 
            
            const typeDefs = ' 
            
            type Warrior { 
            
              id: ID! 
            
              name: String! 
            
            } 
            
              
            
            type Query { 
            
              warriors: [Warrior] 
            
            } 
            
            ' 
            
              
            
            // Resolver for warriors 
            
            const resolvers = { 
              Query: { 
                warriors: (obj, args, context) => context.warriors, 
              }, 
            } 
            
              
            
            const executableSchema = makeExecutableSchema({
              typeDefs, 
              resolvers, 
            }) 
            
              
            
            app.use(cors()) 
            app.use(express.json()) 
            app.use(express.urlencoded({ extended: true })) 
            
              
            
            // Entrypoint 
            
            app.use( 
              '/graphql', 
              graphqlHTTP({ 
                schema: executableSchema, 
                context: data, 
                graphiql: true, 
              }) 
            ) 
            
              
            
            app.listen(port, () => { 
              console.log('Running a server at http://localhost:\${port}') 
            }) 
            
             `,
          },
          {
            text1: `Save and close the file when you’re done. 

            Now you should be able to go to <b>http://localhost:4000/graphql</b> and explore your schema using the <b>GraphiQL IDE.</b>`,
            code1: ``,
          },
          {
            text1: `A`,
            code1: ``,
          },
        ]
      },
      {
        id: 1,
        title: "Graphql setup",
        note: [
          {
            text1: `A`,
            code1: ``,
          },
        ]
      },
      {
        id: 1,
        title: "Graphql setup",
        note: [
          {
            text1: `A`,
            code1: ``,
          }
        ]
      },
      {
        id: 1,
        title: "Graphql setup",
        note: [
          {
            text1: `A`,
            code1: ``,
          }
        ]
      },
      {
        id: 1,
        title: "Graphql setup",
        note: [
          {
            text1: `A`,
            code1: ``,
          }
        ]
      },

    ]
}