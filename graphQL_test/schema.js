const axios = require('axios');

const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLInt,
   GraphQLSchema,
   GraphQLList,
   GraphQLNonNull,
} = require('graphql');

// const customers = [
//    {id: '1', name: 'Johm Doe', email: 'bob@bobmail.com', age: 35},
//    {id: '2', name: 'John Doe', email: 'john@bobmail.com', age: 37},
//    {id: '3', name: 'Jane Doe', email: 'jane@bobmail.com', age: 39},
//    {id: '4', name: 'Jill Doe', email: 'jill@bobmail.com', age: 41},
//    {id: '5', name: 'JoJo Doe', email: 'jojo@bobmail.com', age: 43},
// ];

// This is a bit like a relational db table definition ?
const CustomerType = new GraphQLObjectType({
   name: "Customer",
   fields: () => ({
      id: {type: GraphQLString},
      name: {type: GraphQLString},
      email: {type: GraphQLString},
      age: {type: GraphQLInt},
   })
});

// Root Query for GraphQL Schema object
// - for use in the config object passed into the expressGraphQL route handler function,
// - to handle our GraphQL route  defined in our server.js file
// - e.g  app.use('/graphql', expressGraphQL({config}))  .

const RootQuery = new GraphQLObjectType({
   // The type of request / interaction with the data...
   // in this case a query / request for information (the R in CRUD)
   name: 'RootQueryType',
   fields: {
      // A category of query / 'table' to query
      customer: {
         // 1. What object type / 'table' we're querying
         type: CustomerType,
         // 2. The args we can (will always?) use for querying
         // (these are those defined on schema of object type we're querying)
         args: {
            id: {type: GraphQLString},
         },
         // 3. The function we'll run to resolve the query
         //    a. using the parentValue (???)
         //    b. ...and the 'args' above
         resolve(parentValue, args){
            return axios.get('http://localhost:3000/customers/' + args.id)
            .then(res => res.data);
            // return customers.find((customer) => customer.id = args.id);
         }
      },
      customers: {
         type: new GraphQLList(CustomerType),
         resolve(parentValue, args){
            return axios.get('http://localhost:3000/customers')
            .then(res => res.data);
            // return customers;
         }
      }
      // products: {
      //    type: ProductType,
      //    args: {
      //       id: { type: GraphQLString}
      //    }
      // }
   }

});

// Mutations
const mutation = new GraphQLObjectType({
   // the type of request / interaction with the data
   // in this case making a change to the data
   name: 'Mutation',
   // Here we list the various mutation options, with a name, e.g. 'addCustomer'. For each option, we list the category of data (CustomerType) on which we are operating, the arguments (info) the option will (must (GraphQLNonNull) or can) take (with their types specified), and the method (literally a *method* (i.e. function) of the addCustomer object) through which this request will be resolved i.e. what our server will do to resolve the request.
   fields: {
      addCustomer: {
         type: CustomerType,
         args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            email: { type: new GraphQLNonNull(GraphQLString) },
            age: { type: new GraphQLNonNull(GraphQLInt) }
         },
         resolve(parentValue, args){
            return axios.post('http://localhost:3000/customers', {
               name: args.name,
               email: args.email,
               age: args.age
            })
            .then(res => res.data);
         }
      },
      deleteCustomer: {
         type: CustomerType,
         args: {
            id: { type: new GraphQLNonNull(GraphQLString) },
         },
         resolve(parentValue, args){
            return axios.delete('http://localhost:3000/customers/' + args.id)
            .then(res => res.data);
         }
      },
      editCustomer: {
         type: CustomerType,
         args: {
            id: { type: new GraphQLNonNull(GraphQLString) },
            name: { type: GraphQLString },
            email: { type: GraphQLString },
            age: { type: GraphQLInt }
         },
         resolve(parentValue, args){
            return axios.patch('http://localhost:3000/customers/' + args.id, args)
            .then(res => res.data);
         }
      },
   }
});



module.exports = new GraphQLSchema({
   query: RootQuery,
   mutation
});


























//
