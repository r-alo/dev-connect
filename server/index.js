const express = require('express');
const connection = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

const app = express();
const port = process.env.PORT || 3001;

// graphql
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const main = async () => {
    await connection();
    app.listen(port, () => {
        console.log(`Express web server running on ${port}`);
    });
};

main();