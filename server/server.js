const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(3001, () => {
      console.log(
        `Server running on http://localhost:3001${server.graphqlPath}`
      );
    });
  });
}

startServer();
