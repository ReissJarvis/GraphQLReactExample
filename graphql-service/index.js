const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const graphql = require('graphql')
const axios = require('axios')

const RandomDie = require('./src/models/random-die.model')
const randomDieType = require('./src/graphql/random-die.graphql')

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    quoteOfTheDay: {
      type: graphql.GraphQLString,
      resolve: () => Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within'
    },
    dogFact: {
      type: graphql.GraphQLString,
      resolve: () => axios.get('http://localhost:8080/fact').then(
        result => result.data
      )
    },
    random: {
      type: graphql.GraphQLFloat,
      resolve: () => Math.random()
    },
    rollThreeDice: {
      type: new graphql.GraphQLList(graphql.GraphQLInt),
      resolve: () => [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6))
    },
    getDie: {
      type: randomDieType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        numSides: { type: graphql.GraphQLInt }
      },
      resolve: (_, {numSides}) => new RandomDie(numSides)
    }
  }
})

const schema = new graphql.GraphQLSchema({query: queryType});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
