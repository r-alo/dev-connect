const express = require('express');
const path = require('path');
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

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

// serve up react front-end in production
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../../client/build/index.html'));
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