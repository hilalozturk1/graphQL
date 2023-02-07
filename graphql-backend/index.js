const { ApolloServer, gql } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => [{ title: "The Stranger", author: "Albert Camus" }],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

server.listen().then(({ url }) => console.log(`apollo server is up at ${url}`));
