const express = require('express');
const connection = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');

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