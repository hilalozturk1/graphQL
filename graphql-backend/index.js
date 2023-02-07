const { ApolloServer, gql } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const author = {
  id: "1",
  name: "Alber",
  surname: "Camus",
  age: 50,
  books: [{ id: "1", title: "Test", score: 9, isPublished: false }],
};

const book = {
  id: "nmldp",
  title: "The Stranger",
  author: author,
  score: 6.9,
  isPublished: true,
};

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    surname: String!
    age: Int
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
    score: Float
    isPublished: Boolean
  }

  type Query {
    book: Book
    author: Author
  }
`;

const resolvers = {
  Query: {
    book: () => book,
    author: () => author,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

server.listen().then(({ url }) => console.log(`apollo server is up at ${url}`));
