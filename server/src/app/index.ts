import  express  from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from "body-parser";
import { prismaClient } from "../client/db";
import { User} from './user'
const cors = require('cors')

const app = express()


export async function initServer(){
    const app = express()

    app.use(bodyParser.json())
    app.use(cors())
    // prismaClient.user.create({

    // }) 

    const graphqlServer = new ApolloServer({
        typeDefs:`
        ${User.types}
        type Query{
            ${User.queries}
        }
       
        `,
        resolvers:{
            Query:{
               ...User.resolvers.queries,
            },
           
        },
    });

    await graphqlServer.start();

    app.use('/graphql',expressMiddleware(graphqlServer));
    
    return app;

}