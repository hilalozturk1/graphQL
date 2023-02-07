const { ApolloServer, gql } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const typeDefs = gql`
  type Book {
    id: ID! 
    title: String!
    author: String!
    score: Float
    isPublished: Boolean
}

  type Query {
    books: [Book]!
  }
`;

const resolvers = {
  Query: {
    books: () => [
      { id: "nmldp", title: "The Stranger", author: "Albert Camus", score: 6.9, isPublished: true },
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

server.listen().then(({ url }) => console.log(`apollo server is up at ${url}`));
