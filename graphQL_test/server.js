const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

// Entry point for any client that wants to interact through our server (with our data using) GraphQL.
// 1. Any REST verb request from a client
// 2. On route '/graphql'
// 3. respond with expressGraphQL
// 4. configured as per the configuration object (4)
app.use('/graphql', expressGraphQL({
                        // (4) Configuration object
                        schema: schema,
                        graphiql: true,
                     })
);

app.listen(4000, () => {
   console.log('running on port 4000');
});
