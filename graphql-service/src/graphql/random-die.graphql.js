const graphql = require('graphql')

module.exports = new graphql.GraphQLObjectType({
  name: 'RandomDie',
  fields: {
    numSides: {
      type: graphql.GraphQLInt,
      resolve: (die) => die.numSides
    },
    rollOnce: {
      type: graphql.GraphQLInt,
      resolve: (die) => die.rollOnce()
    },
    roll: {
      type: graphql.GraphQLInt,
      args: {
        numRolls: { type: graphql.GraphQLInt }
      },
      resolve: (die, {numRolls}) => die.roll({numRolls})
    }

  }
})
