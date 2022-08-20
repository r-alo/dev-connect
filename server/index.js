const express = require('express');
const connection = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// graphql
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

mongoose
.connect(process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB has beeen connected"))
    .catch((err) => console.log(err));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const main = async () => {
    await connection();
    await server.start();
    server.applyMiddleware({ app });
    app.listen(port, () => {
        console.log(`Express web server running on ${port}`);
        console.log(`Use GraphQL at http://localhost:${port}${server.graphqlPath}`);
    });
};

main();