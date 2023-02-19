import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import dotenv from 'dotenv/config';

function startServer({ typeDefs, resolvers }) {
    //const PORT = process.env.PORT || 3003
    const stringConnection = process.env.DATABASE;
    mongoose.set("strictQuery", true);
    mongoose.connect(stringConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`Server started at ${url}`));
}

export default startServer;
