const graphqlData = {
  graphqlNote: [
    {
      id: 1,
      title: "What is GraphQL?",
      note: [
        {
          text1: `<b>What is GraphQL?</b>
GraphQL is a specification for how to talk to an API. It's typically used over HTTP where the key idea is to POST a "query" to an HTTP endpoint, instead of hitting different HTTP endpoints for different resources.

<b>GraphQL</b> is a query language for APIs and a runtime for executing those queries. It allows clients to request exactly the data they need and nothing more, making it an efficient alternative to REST. It’s declarative, flexible, and provides more control to the client over the data it receives.

<b>What is GraphQL?</b>
Answer: GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It provides a more flexible and efficient alternative to REST APIs by allowing clients to specify exactly which data they need.

<b>How does GraphQL differ from REST?</b>
Answer:
-> In REST, multiple endpoints are created for different resources (e.g., /users, /products).
-> In GraphQL, there is typically a single endpoint (e.g., /graphql), and clients request only the data they need, reducing over-fetching and under-fetching of data.

<b>How is it better than REST?</b>
There is one endpoint to fetch all resources.
You avoid over fetching of data (getting too many fields when only a few fields are needed).
You avoid under fetching of data (having to call multiple APIs because one API doesn't give back all the information needed).

<b>Real-World Use Cases</b>
Give examples of where GraphQL is useful:
"GraphQL is great for situations where clients need to interact with multiple data sources or need fine-grained control over what data is fetched. For example, in a mobile app, you might want to minimize the amount of data sent over the network, and GraphQL lets you request exactly what you need."

"It's also very useful for modern applications that involve a lot of real-time data, such as messaging or collaborative apps, where you can use GraphQL subscriptions to get updates as they happen."`,
          code1: ``,
        },
        {
          text1: `<b>2. How does GraphQL work?</b>
Explain how GraphQL is structured and how it works:

"In GraphQL, you send a query to a single endpoint, typically /graphql, and the server responds with exactly the data requested in a structured format. This is different from REST, where you typically have multiple endpoints for different resources. GraphQL allows you to request data from multiple sources in a single query, and you can nest queries to retrieve related data in one go.`,
          code1: ``,
        },
        {
          text1: `A`,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Terminologies involved in GraphQL (GraphQL Core Concepts)",
      note: [
        {
          text1: `<b>Some Terminologies involved in GraphQL</b>
<b>Query</b>: A query in GraphQL is used to request data. It resembles the shape of the data you want to receive and is similar to a JSON object.
<b>Mutation</b>: Mutations are used for modifying data on the server. They are like queries but are used for creating, updating, or deleting data.
<b>Schema</b>: The schema defines the structure of your data in GraphQL. It includes object typesfields on those types and the relationships between them.
<b>Type</b>: In GraphQL, types define the shape of the data. There are two main types</b>: Object types (representing real-world entities) and Scalar types (representing primitive data like String, Int, Boolean, etc.).
<b>Field</b>: A field is a specific piece of data that can be requested on an object type. Fields can also be nested to retrieve related data.
<b>Resolver</b>: Resolvers are functions that determine how to fetch the data for a specific field. Each field in your schema has a corresponding resolver.
<b>Subscription</b>: Subscriptions enable real-time data updates. Clients can subscribe to specific events, and the server sends data to the client when those events occur.


<b>1) Query</b>
    Used to <b>fetch (read) data</b> from the server.
    The query structure <b>resembles the shape</b> of the response (similar to JSON).

    query {
  user(id: "1") {
    name
    email
  }
}
  
<b>2) Mutation </b>
    Used to <b>create, update, or delete</b> data on the server.
    Works like a query but <b>modifies</b> data.
    
    mutation {
  createUser(name: "Anand", email: "anand@example.com") {
    id
    name
  }
}

<b>3) Schema </b>
    A blueprint of your API.
    Describes:
        => What data is available (<b>types</b>)
        => What operations can be done (<b>Query, Mutation, Subscription</b>)
        type Query {
  users: [User]
}


<b>4) Type </b>
    Types define the <b>shape of data</b> in your API.
    There are two main categories:
        <b>Object types</b>: Represent real entities like <b>User, Product</b>
        <b>Scalar types</b>: Built-in types like <b>String, Int, Float, Boolean, ID</b>
        type User {
  id: ID
  name: String
  age: Int
}


<b>5) Field </b>
    A single <b>piece of data</b> on an object type.
    Fields can be <b>nested</b> to get related data.

    type Post {
  title: String
  author: User
}

<b>6) Resolver </b>
    A function that tells the server <b>how to get the data</b> for a field.
    Every field in your schema can have a corresponding resolver.

    const resolvers = {
  Query: {
    user: (_, args) => {
      return users.find(u => u.id === args.id);
    }
  }
};

<b>7) Subscription </b>
    Allows <b>real-time updates</b> over WebSockets.
    Clients <b>subscribe to events</b>, and server pushes data when those events happen.

subscription {
  messageAdded {
    id
    content
  }
}
        `,
          code1: `//<b>1) Query</b>
    query {
  user(id: "1") {
    name
    email
  }
}


//--------------
// <b>2) Mutation </b>
    mutation {
  createUser(name: "Anand", email: "anand@example.com") {
    id
    name
  }
}

//--------------
// <b>3) Schema </b>
        type Query {
  users: [User]
}

//--------------
// <b>4) Type </b>
        type User {
  id: ID
  name: String
  age: Int
}

//--------------
// <b>5) Field </b>
    type Post {
  title: String
  author: User
}

//--------------
// <b>6) Resolver </b>
    const resolvers = {
  Query: {
    user: (_, args) => {
      return users.find(u => u.id === args.id);
    }
  }
};

//--------------
// <b>7) Subscription </b>
subscription {
  messageAdded {
    id
    content
  }
}
  

// ----------------- Ex : 1 ------------
// mongoose Schema
// User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  area: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;


//Post.js
const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    desc : {
        type: String
    },
    auth : {
        type: String
    }
})

const Post = mongoose.model("Post", PostSchema)
module.exports = Post;


//typeDefs.js
const { gql } = require("apollo-server-express");

module.exports = gql\`
  type User {
    id: ID!
    userName: String!
    area: String!
    role: String!
  }

  type Post {
    id: ID!
    title : String!
    desc : String!
    auth : String!
  }

  type Query {
    users : [User]
    posts : [Post]
    post(id : ID!) : Post
  }

  type Mutation {
    addUser(title: String!, desc:String!, auth:String!): User
    addPost(title: String!, desc:String!, auth:String!): Post
  }
\`;


// resolvers.js
const User = require("../models/User");
const Post = require("../models/Post");

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (err) {
        console.error("Error fetching users:", err);
        return null;
      }
    }
  },

  Query: {
    posts: async () => {
      try {
        return await Post.find()
      } catch (err) {
        console.error("Error fetching users:", err);
        return null;
      }
    },
    post: async (_, { id }) => {
      try {
        return await Post.findById(id)
      } catch (err) {
        console.error("Error fetching users:", err);
        return null;
      }
    }
  },

  Mutation: {
    addUser: async (_, { userName, area, role }) => {
      const newUser = new User({
        userName,
        area,
        role
      })

      await newUser.save()
      return newUser
    },
    addPost: async (_, { title, desc, auth }) => {
      const newPost = new Post({
        title,
        desc,
        auth
      })

      await newPost.save()
      return newPost
    }
  },
}

module.exports = resolvers


//----- test in grqphql sandbox explorer ---
mutation {
  addPost(title: "js", desc: "this is javascript book", auth: "kumar") {
    id
    title
    desc
    auth
  }
}

query {
  post(id : "684808a407b6969921fdb1fc") {
    id 
    title
    desc
  } 
}

query {
  posts {
    id
    title
    desc
  }
}

`,
        },
        {
          text1: ``,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "typeDefs",
      note: [
        {
          text1: `In GraphQL, typeDefs (short for "type definitions") are a core component used to define the schema of your GraphQL API. They are written using the GraphQL <b>Schema Definition Language (SDL)</b> and describe the structure of your data, including the types, fields, and relationships between them.
          
          The typeDefs is a string or a schema language document that describes the data structure of your GraphQL API. It defines the available types, their fields, and the relationships between them. This includes defining object types, scalar types, input types, interfaces, unions, and enumerations.

          <b>Object Types</b>: These represent the fundamental data structures in your API, such as <b>User, Product</b>, or <b>Order</b>. They contain fields that represent properties of that object.
<b>Scalar Types</b>: These are the primitive data types like <b>String, Int, Float, Boolean</b>, and <b>ID</b>.
<b>Input Types</b>: Used for defining the structure of arguments passed to mutations (for creating or updating data).
<b>Enums</b>: Define a set of allowed values for a field.
<b>Interfaces</b>: Define a set of fields that multiple object types can implement, promoting reusability and polymorphism.
<b>Unions</b>: Allow a field to return one of several possible object types.

<b>Creating a schema using typeDef</b> -
-> Create another folder inside your root folder named "schema", then inside "schema" folder, create a file called "type-defs.js" and paste this code inside that file
-> Here we have created the schema for User Data with the datatypes required for every field.
-> "!", this symbol after datatype means that the value is required and cannot be null.
-> "friends" property is assigned the User Schema, which means friends will be an Array of Users with the same properties except for the "friends" itself.
-> Then we defined the query using "Query", which will create a schema for the handler function, there we have 3 schemas, 1 for all users, 1 for finding users by id, and the other for finding users by name, return type of these handlers functions will "User".
-> We also have Mutation Type which is used to create a schema for Mutation handlers whose type is created using "input" type.
-> Enum is used to provide a set of possible values for a field

Each : <b>User</b> is the return type of that mutation.
It means:
    createUser returns a <b>User</b>
    updateUser returns a <b>User</b>
    deleteUser returns a <b>User</b>

    -> <b>createUser(newUser: CreateUser!)</b>
    -> newUser is the <b>input argument</b>, using a custom input type called <b>CreateUser</b>
    -> The mutation will return a <b>User</b> object
`,
          code1: `const { gql } = require("apollo-server")

const typeDefs = gql\`

    type User {
        id: ID! # uniquely identifies but similar to strings
        name: String!
        age: Int!
        isEmployee: Boolean!
        role: Role!
        friends: [User] # It will have a list of Users with same data as User schema
    }

    input CreateUser {
        name: String!
        age: Int!
        isEmployee: Boolean = true
        role: Role!
    }

    input UpdateUser {
        id: ID!
        name: String!
        age: Int!
        isEmployee: Boolean = true
        role: Role!
    }

    input DeleteUser {
        id: ID!
    }

    type Query {
        users: [User!]! 
        user(id: ID!): User! 
        userByName(name: String!): User! 
    }

    type Mutation {
        createUser(newUser:CreateUser!):User
        updateUser(updatedUser:UpdateUser!):User
        deleteUser(delUser:DeleteUser!):User
    }


    # Enums to define some fix values for a field
    enum Role {
        WebDeveloper
        Tester
        SoftwareEngineer
    }

\`;

module.exports = { typeDefs };


//------------  React js ------------

// src/graphql.js
import { gql } from "@apollo/client";

// 1. Get all users
export const GET_USERS = gql\`
  query {
    users {
      id
      name
      age
      isEmployee
      role
    }
  }
\`;

// 2. Create user
export const CREATE_USER = gql\`
  mutation CreateUser($newUser: CreateUser!) {
    createUser(newUser: $newUser) {
      id
      name
      age
      isEmployee
      role
    }
  }
\`;

// 3. Update user
export const UPDATE_USER = gql\`
  mutation UpdateUser($updatedUser: UpdateUser!) {
    updateUser(updatedUser: $updatedUser) {
      id
      name
      age
      isEmployee
      role
    }
  }
\`;

// 4. Delete user
export const DELETE_USER = gql\`
  mutation DeleteUser($delUser: DeleteUser!) {
    deleteUser(delUser: $delUser) {
      id
    }
  }
\`;



// src/components/UserList.jsx
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } from "../graphql";

const UserList = () => {
  const { data, loading, error, refetch } = useQuery(GET_USERS);
  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  const [form, setForm] = useState({
    name: "",
    age: "",
    role: "WebDeveloper",
    isEmployee: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser({
      variables: {
        newUser: {
          ...form,
          age: parseInt(form.age),
        },
      },
    });
    refetch();
    setForm({ name: "", age: "", role: "WebDeveloper", isEmployee: true });
  };

  const handleDelete = async (id) => {
    await deleteUser({ variables: { delUser: { id } } });
    refetch();
  };

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error loading users&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h2&gt;👥 User List&lt;/h2&gt;
      &lt;ul&gt;
        {data.users.map((user) =&gt; (
          &lt;li key={user.id}&gt;
            {user.name} ({user.age}) - {user.role}{&quot; &quot;}
            &lt;button onClick={() =&gt; handleDelete(user.id)}&gt;Delete&lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;

      &lt;h3&gt;Add New User&lt;/h3&gt;
      &lt;form onSubmit={handleSubmit}&gt;
        &lt;input
          value={form.name}
          onChange={(e) =&gt; setForm({ ...form, name: e.target.value })}
          placeholder=&quot;Name&quot;
          required
        /&gt;
        &lt;input
          type=&quot;number&quot;
          value={form.age}
          onChange={(e) =&gt; setForm({ ...form, age: e.target.value })}
          placeholder=&quot;Age&quot;
          required
        /&gt;
        &lt;select
          value={form.role}
          onChange={(e) =&gt; setForm({ ...form, role: e.target.value })}
        &gt;
          &lt;option&gt;WebDeveloper&lt;/option&gt;
          &lt;option&gt;Tester&lt;/option&gt;
          &lt;option&gt;SoftwareEngineer&lt;/option&gt;
        &lt;/select&gt;
        &lt;button type=&quot;submit&quot;&gt;Add User&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  );
};

export default UserList;


// src/App.js
import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import UserList from "./components/UserList";

const client = new ApolloClient({
  uri: "http://localhost:8082/graphql", // your server
  cache: new InMemoryCache(),
});

function App() {
  return (
    &lt;ApolloProvider client={client}&gt;
      &lt;div style={{ padding: 20 }}&gt;
        &lt;UserList /&gt;
      &lt;/div&gt;
    &lt;/ApolloProvider&gt;
  );
}

export default App;

`,
        }
      ]
    },
    {
      id: 1,
      title: "GraphQL, a relation",
      note: [
        {
          text1: `In <b>GraphQL, a relation</b> refers to the connection between different object types — similar to <b>foreign key relationships</b> in relational databases. These relationships let you <b>nest queries</b>, so you can fetch related data in one go.
          
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Relation Type</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>One-to-One</td>
      <td>One object has exactly one related object</td>
      <td>User ↔ Profile</td>
    </tr>
    <tr>
      <td>One-to-Many</td>
      <td>One object has many related objects</td>
      <td>User → Posts</td>
    </tr>
    <tr>
      <td>Many-to-One</td>
      <td>Many objects refer to one parent</td>
      <td>Posts → User</td>
    </tr>
    <tr>
      <td>Many-to-Many</td>
      <td>Many objects relate to many others</td>
      <td>Students ↔ Courses</td>
    </tr>
  </tbody>
</table>

`,
          code1: `//Example: One-to-Many Relation (User → Posts)
// Suppose we have users and each user has many posts.
// 1. GraphQL Schema

type User {
  id: ID!
  name: String!
  posts: [Post!]!  // 👈 One-to-many relation
}

type Post {
  id: ID!
  title: String!
  content: String!
  user: User!      // 👈 Many-to-one relation
}
  

// Sample Query (Nested Relations)
query {
  users {
    id
    name
    posts {
      id
      title
    }
  }
}

// ⚙️ Resolver Example (Node.js with Apollo Server)
const resolvers = {
  User: {
    posts: (parent, args, context) => {
      // parent is the user
      return context.db.posts.filter(post => post.userId === parent.id);
    },
  },
  Post: {
    user: (parent, args, context) => {
      return context.db.users.find(user => user.id === parent.userId);
    },
  },
};
`,
        }
      ]
    },
    {
      id: 1,
      title: "What is InMemoryCache?",
      note: [
        {
          text1: `InMemoryCache is <b>Apollo Client’s</b> built-in caching mechanism.
It’s a <b>normalized, in-memory data store</b> that caches the results of GraphQL queries so your UI doesn’t always have to refetch from the server.

-> It stores data returned from your GraphQL server in memory (RAM).
-> It <b>normalizes</b> objects by their <b>id</b> (or another unique field) so the same object isn’t duplicated across queries.
-> It automatically updates queries when cached data changes (e.g., after a mutation).

Apollo’s <b>InMemoryCache</b> stores query results <b>normalized by object ID</b>.
Each object (like <b>CartItem</b>) gets stored by its <b>id</b>.
Queries (like <b>cart</b>) just keep references (<b>id</b>) to those objects.


  <table class="p-4 table-auto overflow-scroll border border-primary-base dark:border-primary-dark">
    <thead>
      <tr class="table-auto border border-primary-base dark:border-primary-dark">
        <th class="p-2 bg-primary-base dark:bg-primary-dark font-bold">Strategy</th>
        <th class="p-2 bg-primary-base dark:bg-primary-dark font-bold">API</th>
        <th class="p-2 bg-primary-base dark:bg-primary-dark font-bold">Description</th>
      </tr>
    </thead>
    <tbody class="">
      <tr class="table-auto border border-primary-base dark:border-primary-dark">
        <td class=""><a href="https://www.apollographql.com/docs/react/caching/cache-interaction#using-graphql-queries"
            class="hover:underline underline hover:opacity-75 font-medium" data-astro-prefetch="viewport">Using GraphQL
            queries</a></td>
        <td class=""><code class="font-mono bg-silver-400 dark:bg-navy-400 px-1 rounded"
            style="overflow-wrap:normal">readQuery</code> / <code
            class="font-mono bg-silver-400 dark:bg-navy-400 px-1 rounded" style="overflow-wrap:normal">writeQuery</code>
          / <code class="font-mono bg-silver-400 dark:bg-navy-400 px-1 rounded"
            style="overflow-wrap:normal">updateQuery</code></td>
        <td class="">Use standard <!-- -->GraphQL<!-- --> queries for managing both remote and local data.</td>
      </tr>
      <tr class="table-auto border border-primary-base dark:border-primary-dark">
        <td class=""><a
            href="https://www.apollographql.com/docs/react/caching/cache-interaction#using-graphql-fragments"
            class="hover:underline underline hover:opacity-75 font-medium" data-astro-prefetch="viewport">Using GraphQL
            fragments</a></td>
        <td class=""><code class="font-mono bg-silver-400 dark:bg-navy-400 px-1 rounded"
            style="overflow-wrap:normal">readFragment</code> / <code
            class="font-mono bg-silver-400 dark:bg-navy-400 px-1 rounded"
            style="overflow-wrap:normal">writeFragment</code> / <code
            class="font-mono bg-silver-400 dark:bg-navy-400 px-1 rounded"
            style="overflow-wrap:normal">updateFragment</code> / <code
            class="font-mono bg-silver-400 dark:bg-navy-400 px-1 rounded"
            style="overflow-wrap:normal">useFragment</code></td>
        <td class="">Access the <!-- -->fields<!-- --> of any cached object without composing an entire
          <!-- -->query<!-- --> to reach that object.</td>
      </tr>
      <tr class="table-auto border border-primary-base dark:border-primary-dark">
        <td class=""><a href="https://www.apollographql.com/docs/react/caching/cache-interaction#using-cachemodify"
            class="hover:underline underline hover:opacity-75 font-medium" data-astro-prefetch="viewport">Directly
            modifying cached fields</a></td>
        <td class=""><code class="font-mono bg-silver-400 dark:bg-navy-400 px-1 rounded"
            style="overflow-wrap:normal">cache.modify</code></td>
        <td class="">Manipulate cached data without using <!-- -->GraphQL<!-- --> at all.</td>
      </tr>
    </tbody>
  </table>
`,
          code1: `//Example Setup
          import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

//How Normalization Works
// Suppose you fetch users and posts:?
query {
  users {
    id
    name
  }
  posts {
    id
    title
    author {
      id
      name
    }
  }
}

// Apollo will store this in the cache as:
{
  "User:1": { "id": 1, "name": "Alice" },
  "User:2": { "id": 2, "name": "Bob" },
  "Post:10": { "id": 10, "title": "Hello", "author": { "__ref": "User:1" } },
  "Post:11": { "id": 11, "title": "World", "author": { "__ref": "User:2" } }
}
// Notice how author is stored as a reference (__ref), not duplicated.
// 🔹 Customizing Cache IDs
// By default, Apollo uses id or _id as the cache key.
// You can customize it:
const cache = new InMemoryCache({
  typePolicies: {
    Product: {
      keyFields: ["sku"],  // use SKU instead of id
    },
  },
});
// 🔹 Updating Cache After Mutations
// You can tell Apollo how to update the cache after a mutation:
const [addTodo] = useMutation(ADD_TODO, {
  update(cache, { data: { addTodo } }) {
    cache.modify({
      fields: {
        todos(existingTodos = []) {
          return [...existingTodos, addTodo];
        },
      },
    });
  },
});

`,
        }
      ]
    },
    {
      id: 1,
      title: "refetchQueries",
      note: [
        {
          text1: `In GraphQL clients like Apollo Client, <b>refetchQueries</b> is an option used primarily with mutations to ensure that the client-side cache and, consequently, the UI, are updated after a data modification operation.
<b>Purpose</b>:
When a mutation (e.g., creating, updating, or deleting data) is performed, the data fetched by existing queries might become stale. <b>refetchQueries</b> provides a mechanism to automatically re-execute specific queries after the mutation completes, thereby refreshing the data and ensuring the UI reflects the latest state from the server.
<b>Usage</b>:
<b>refetchQueries</b> is typically provided as an option to the <b>mutate</b> function or <b>useMutation</b> hook. It takes an array of objects, where each object specifies a query to be refetched.
Each object in the <b>refetchQueries</b> array can include:
<b>query</b>:
The GraphQL query document (<b>DocumentNode</b>) to be refetched. This is often imported from a separate file where the query is defined.
<b>variables</b>:
An optional object containing the variables to be used when refetching the query. If omitted, the query will be refetched with its currently active variables.


<b>refetchQueries vs cache.modify</b>
<b>refetchQueries</b>
<b>Pros</b>: Simple, reliable, ensures data matches server.
<b>Cons</b>: Makes extra network calls → more latency + bandwidth.

<b>cache.modify</b>
<b>Pros</b>: Instant UI update, no network hit, very efficient.
<b>Cons</b>: More code, you must carefully update cache fields manually.

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Feature</th>
      <th>refetchQueries</th>
      <th>cache.modify</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Mechanism</b></td>
      <td>Re-runs specified GraphQL queries against the server, fetches <b>fresh data</b>, and updates the cache.</td>
      <td>Directly manipulates the <b>local Apollo cache</b>, updating or removing fields without contacting the server.</td>
    </tr>
    <tr>
      <td><b>Network Call</b></td>
      <td>✅ Always makes a <b>network request</b> (unless fetchPolicy = <code>cache-only</code>).</td>
      <td>❌ No network call. Purely <b>client-side cache update</b>.</td>
    </tr>
    <tr>
      <td><b>Data Consistency</b></td>
      <td>Always <b>consistent with the server</b>, since new data is fetched.</td>
      <td>Relies on your manual update logic → risk of <b>stale/inconsistent data</b> if logic is incomplete.</td>
    </tr>
    <tr>
      <td><b>Performance</b></td>
      <td>⚡ Slower → network latency, more load on server, especially for large datasets.</td>
      <td>⚡ Very fast → operates directly on <b>local cache</b>, no server roundtrip.</td>
    </tr>
    <tr>
      <td><b>Complexity</b></td>
      <td>✅ Simple to use → just tell Apollo which queries to re-run.</td>
      <td>🔧 More complex → you must understand <b>cache structure</b> and update logic.</td>
    </tr>
    <tr>
      <td><b>Use Cases</b></td>
      <td>
        - When you need the <b>latest state</b> from the server.<br>
        - Mutation response is incomplete.<br>
        - Simple list refresh.
      </td>
      <td>
        - For <b>optimistic UI updates</b>.<br>
        - Avoid network calls for performance.<br>
        - Add, update, or delete items in cache directly.
      </td>
    </tr>
    <tr>
      <td><b>Best Practice</b></td>
      <td>
        - Pair with <code>awaitRefetchQueries</code> to keep UI in sync.<br>
        - Great <b>starting point</b> for cache updates.
      </td>
      <td>
        - Use when performance matters.<br>
        - Requires careful implementation.<br>
        - Often combined with <b>refetchQueries</b> for extra safety.
      </td>
    </tr>
  </tbody>
</table>

`,
          code1: `import { gql, useMutation } from '@apollo/client';

const ADD_TODO = gql\`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
\`;

const GET_ALL_TODOS = gql\`
  query GetAllTodos {
    todos {
      id
      text
      completed
    }
  }
\`;

function TodoApp() {
  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [
      { query: GET_ALL_TODOS } // Refetch the GET_ALL_TODOS query after adding a todo
    ],
  });

  // ... rest of the component
}
  

// ------------- Ex : 2 -------------
// When it runs
// After a mutation succeeds, Apollo will re-run the queries you specify.
// This ensures your cache (and UI) matches the server’s latest state.
// Syntax:
const [addCartItem] = useMutation(ADD_TO_CART, {
  refetchQueries: [
    { query: GET_CART, variables: { userId: "123" } }, // with variables
    { query: GET_TOTAL } // without variables
  ],
});


// ------------ Ex : 3 ------------
const [addPost] = useMutation(ADD_POST, {
  refetchQueries: [{ query: GET_POSTS }],
  awaitRefetchQueries: true, // ensures UI waits for fresh data
});
`,
        }
      ]
    },
    {
      id: 1,
      title: "cache.modify",
      note: [
        {
          text1: `<b>cache.modify</b> is a method available in caching mechanisms like Apollo Client's <b>InMemoryCache</b> that allows for direct manipulation of cached data. It provides a way to update, add, or remove fields within existing cached objects, offering finer-grained control over the cache compared to simply replacing entire objects.`,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "cache.update",
      note: [
        {
          text1: `update (inside <b>useMutation</b>)
<b>Where used</b>: Passed as an option to useMutation.
<b>What it is</b>: A callback function that gets cache (aka proxy) and the mutation result.

How it works:
You <b>read</b> existing cache with readQuery or readFragment.
You <b>modify</b> that data (add/remove/update).
You <b>write</b> it back with writeQuery or writeFragment.`,
          code1: `//Use cases:
// When you want to update the result of a \`specific query\` after a mutation.
// Example: after \`addPost\`, update the cached result of \`GET_POSTS\`.
const [addPost] = useMutation(ADD_POST, {
  update(cache, { data: { addPost } }) {
    const existing = cache.readQuery({ query: GET_POSTS });
    cache.writeQuery({
      query: GET_POSTS,
      data: { posts: [...existing.posts, addPost] },
    });
  }
});

`,
        }
      ]
    },
        {
      id: 1,
      title: "Graphql setup",
      note: [
        {
          text1: ``,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Interview",
      note: [
        {
          text1: `<b>What are the core features of GraphQL?</b>
<b>Answer</b>: The key features of GraphQL include:
<b>Declarative Data Fetching</b>: Clients can request exactly the data they need.
<b>Single Endpoint</b>: All queries are sent to a single endpoint.
<b>Strongly Typed Schema</b>: GraphQL uses a type system to define the structure of the data.
<b>Real-time Data</b>: Support for subscriptions to get real-time updates.
<b>Hierarchical Structure</b>: Queries mirror the shape of the response.

<b>What is a GraphQL Schema?</b>
<b>Answer</b>: A GraphQL schema defines the types, queries, mutations, and subscriptions that a GraphQL server can handle. It describes how clients can interact with the data and specifies the structure of the responses.

<b>What is the difference between Queries, Mutations, and Subscriptions in GraphQL?</b>
<b>Answer</b>:

Query: A request for data (similar to GET requests in REST).

Mutation: A request to modify data (similar to POST, PUT, DELETE in REST).

Subscription: A way to subscribe to real-time updates (similar to WebSockets).

Intermediate Questions
<b>What is a Resolver in GraphQL?</b>
<b>Answer</b>: A resolver is a function responsible for returning data for a specific field in a query. It fetches data from databases, services, or other sources based on the field requested.

<b>What are the different types of fields in a GraphQL Schema?</b>
<b>Answer</b>: Common types of fields include:

Scalar Types: Basic data types like String, Int, Float, Boolean, ID.

Object Types: Custom types defined in the schema, which may contain fields.

List Types: Arrays of other types.

Non-Null Types: Fields that must have a value, denoted by !.

<b>What is an Apollo Server and how does it relate to GraphQL?</b>
<b>Answer</b>: Apollo Server is a popular open-source library for implementing a GraphQL server. It simplifies setting up GraphQL servers and provides features like schema stitching, data loader, caching, etc.

<b>What are some advantages of using GraphQL over REST?</b>
<b>Answer</b>:

Client-Specified Queries: Clients can request exactly the data they need, preventing over-fetching or under-fetching.

Single Endpoint: All data interactions are through a single endpoint.

Strongly Typed: The schema defines the types, ensuring type safety.

Versionless API: With GraphQL, you don't need to version your API as you can adjust the queries to request only the data needed.

<b>What is a Fragment in GraphQL?</b>
<b>Answer</b>: A fragment is a reusable piece of a query that allows you to share common fields between multiple queries or mutations. It helps to avoid repetition in GraphQL queries.

graphql
Copy
fragment UserDetails on User {
  id
  name
  email
}
<b>What is the role of Directives in GraphQL?</b>
<b>Answer</b>: Directives are used to modify the behavior of a query. Common directives include:

@skip: Skips the field if the argument is true.

@include: Includes the field only if the argument is true.

Advanced Questions
<b>What is DataLoader in GraphQL and why is it used?</b>
<b>Answer</b>: DataLoader is a utility for batching and caching database or API calls to optimize performance. It helps reduce the number of redundant requests (N+1 query problem) by batching requests into a single query.

<b>Explain the N+1 Query problem in GraphQL and how to avoid it.</b>
<b>Answer</b>: The N+1 query problem happens when a GraphQL query asks for related data (e.g., retrieving a list of users and then querying each user's posts one by one). This results in a large number of database queries, leading to performance issues.

Solution: Use batching and caching mechanisms (e.g., DataLoader) to group and reduce the number of queries.

<b>What is Schema Stitching in GraphQL?</b>
<b>Answer</b>: Schema stitching is the process of combining multiple GraphQL schemas into a single schema. This is useful when you need to aggregate different services or APIs into one GraphQL API.

<b>How do you handle authentication and authorization in GraphQL?</b>
<b>Answer</b>: Authentication and authorization in GraphQL can be handled using middleware or within resolvers:

Authentication: Use headers or tokens (e.g., JWT) to verify the identity of the user.

Authorization: Use resolver functions or middleware to check if a user has permission to access a specific resource.

<b>How do you optimize GraphQL queries for performance?</b>
<b>Answer</b>:

Use DataLoader to batch and cache database queries.

Set limits on the depth and complexity of queries to prevent overly large queries.

Avoid over-fetching by structuring the schema to only allow relevant fields.

Implement pagination for large datasets.

Use persisted queries to reduce the overhead of parsing and validating queries.

<b>What are the best practices for writing GraphQL schemas?</b>
<b>Answer</b>:

Be descriptive in naming types and fields.

Keep the schema simple and avoid over-complicating the structure.

Use non-null types where appropriate to enforce required fields.

Implement pagination for lists of data.

Use fragments for reusable queries.

<b>What is the difference between @deprecated directive and @skip directive in GraphQL?</b>
<b>Answer</b>:

@deprecated is used to mark a field or type as deprecated, signaling to developers that the feature should no longer be used.

@skip conditionally skips a field from the query result based on a boolean argument.

<b>What is the difference between Query and Mutation resolvers in GraphQL?</b>
<b>Answer</b>:

Query resolvers are used to fetch data (read operations).

Mutation resolvers are used to modify data (create, update, delete operations).

In practice, both have similar structures, but mutations typically involve state changes.

<b>How do you handle versioning in GraphQL APIs?</b>
<b>Answer</b>: In GraphQL, APIs are typically versionless. Instead of creating new versions of the API, clients can request only the data they need, and changes to the schema can be made incrementally by adding new fields or deprecating old ones.

`,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Graphql sample program",
      note: [
        {
          text1: `db.json -> JSON Data:
            {
    "users": [
      {
        "id": "1",
        "username": "user",
        "email": "julie@yahoo.com",
        "role": "admin",
        "password": "$2b$10$esJVjcuUv7tohrWXivKzsO/z2DpM3iS.FEWg/inn.EuohrZKa4gp." 
      },
      {
        "id": "2",
        "username": "ram",
        "email": "jameswilly@gmail.com",
        "role": "user",
        "password": "password" 
      },
      {
        "id": "3",
        "username": "shyam",
        "email": "ahmedali012@gmail.com",
        "role": "admin",
        "password": "password" 
      },
      {
        "id": "4",
        "username": "kumar",
        "email": "gracefunsho@gmail.com",
        "role": "use",
        "password": "password" 
      }
    ],
    "products": [
      {
        "id": "1",
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      },
      {
        "id": "2",
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": "3",
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 500
        }
      },
      {
        "id": "4",
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.1,
          "count": 430
        }
      },
      {
        "id": "5",
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 4.6,
          "count": 400
        }
      },
      {
        "id": "6",
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 70
        }
      },
      {
        "id": "7",
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3,
          "count": 400
        }
      },
      {
        "id": "8",
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 1.9,
          "count": 100
        }
      },
      {
        "id": "9",
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
          "rate": 3.3,
          "count": 203
        }
      },
      {
        "id": "10",
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 470
        }
      },
      {
        "id": "11",
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 319
        }
      },
      {
        "id": "12",
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 400
        }
      },
      {
        "id": "13",
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 250
        }
      },
      {
        "id": "14",
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.2,
          "count": 140
        }
      },
      {
        "id": "15",
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
          "rate": 2.6,
          "count": 235
        }
      },
      {
        "id": "16",
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 340
        }
      },
      {
        "id": "17",
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
          "rate": 3.8,
          "count": 679
        }
      },
      {
        "id": "18",
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 130
        }
      },
      {
        "id": "19",
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.5,
          "count": 146
        }
      },
      {
        "id": "20",
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      }
    ],
    "posts": [
      {
        "userId": 1,
        "id": "1",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": "2",
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": "3",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "id": 4,
        "userId": 4,
        "title": "dsfsdf",
        "body": "sdfsdfsdf"
      },
      {
        "id": 5,
        "userId": 4,
        "title": "sdf",
        "body": "sdfsd"
      },
      {
        "id": "0f90",
        "userId": 0,
        "title": "",
        "body": ""
      },
      {
        "id": 7,
        "userId": 4,
        "title": "dfsdfsd",
        "body": "sdfsdfsd"
      },
      {
        "id": 8,
        "userId": 4,
        "title": "sdgsd",
        "body": "sdfsd"
      },
      {
        "id": 9,
        "userId": 4,
        "title": "sfsdf",
        "body": "sdfsdf"
      }
    ]
  }`,
          code1: `// ---------- grqphql-server.js --------
            // src/graphql-server.js

// Import necessary modules from Apollo Server and json-server
import { ApolloServer, gql } from 'apollo-server-express';
import jsonServer from 'json-server';

// Initialize json-server with a router for the 'db.json' file, which acts as our mock database
const router = jsonServer.router('db.json');
const db = router.db; // Reference to the database from json-server

// Define the GraphQL schema using Apollo's gql function
const typeDefs = gql\`
  # Define the 'User' type with necessary fields like id, username, email, etc.
  type User {
    id: String
    username: String
    email: String
    role: String
    password: String
  }

  # Define the 'Product' type with fields like id, title, price, etc.
  type Product {
    id: String
    title: String
    price: Float
    description: String
    category: String
    image: String
    rating: Rating
  }

  # Define the 'Rating' type that holds the rate and count of product ratings
  type Rating {
    rate: Float
    count: Int
  }

  # Define the 'Post' type with fields like id, userId, title, and body
  type Post {
    id: String
    userId: String
    title: String
    body: String
  }

  # Define the 'Query' type, which specifies the available GraphQL queries
  type Query {
    # Queries to fetch multiple or single users
    users: [User]
    user(id: String!): User
    
    # Queries to fetch multiple or single products
    products: [Product]
    product(id: String!): Product
    
    # Queries to fetch multiple or single posts
    posts: [Post]
    post(id: String!): Post
  }
\`;

// Define resolvers for the queries in the schema
const resolvers = {
  Query: {
    // Resolver for fetching all users from the mock database
    users: () => db.get('users').value(),

    // Resolver for fetching a single user by ID from the mock database
    user: (_, { id }) => db.get('users').find({ id }).value(),

    // Resolver for fetching all products from the mock database
    products: () => db.get('products').value(),

    // Resolver for fetching a single product by ID from the mock database
    product: (_, { id }) => db.get('products').find({ id }).value(),

    // Resolver for fetching all posts from the mock database
    posts: () => db.get('posts').value(),

    // Resolver for fetching a single post by ID from the mock database
    post: (_, { id }) => db.get('posts').find({ id }).value(),
  },
};

// Function to create and return an instance of ApolloServer
export function createApolloServer() {
  // Create the Apollo Server instance with the GraphQL schema and resolvers
  const server = new ApolloServer({
    typeDefs, // The schema defined above
    resolvers, // The resolvers defined above
    context: () => ({
        db, // Make the database available in the context for resolvers to access
      }),
  });

  // Return the created Apollo Server instance
  return server;
}


//----------- main server.js file -----------
// src/index.js

// Import necessary modules
import express from 'express';
import jsonServer from 'json-server';
import cors from 'cors';
import { createApolloServer } from './graphql-server.js'; // Import the function to create Apollo Server

// Initialize the Express server
const server = express();

// Initialize jsonServer router for handling routes based on 'db.json' file
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults(); // json-server default middlewares (like logging, static, etc.)

// Use jsonServer body parser to parse POST request bodies
server.use(jsonServer.bodyParser);

// Apply CORS middleware to allow cross-origin requests
server.use(cors({
  origin: 'http://localhost:3000', // Assuming front-end is running on localhost:3000
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Create Apollo Server using the function from graphql-server.js
const apolloServer = createApolloServer();

// Define an asynchronous function to start the server
async function startServer() {
  // Start Apollo Server and wait for it to initialize
  await apolloServer.start();

  // After Apollo Server is ready, apply its middleware to the Express app
  apolloServer.applyMiddleware({ app: server });

  // Use jsonServer to handle other API routes, i.e., routes that aren't GraphQL queries
  server.use(router);

  // Start the server and listen on port 5000
  server.listen(5000, () => {
    console.log(\`Server is running on http://localhost:5000\${apolloServer.graphqlPath}\`);
  });
}

// Call the startServer function to launch the server
startServer();

`,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Installation setup",
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
  ]
}