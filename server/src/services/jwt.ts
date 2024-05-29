import { prismaClient } from "../client/db";
import JWT from 'jsonwebtoken'
import * as dotenv from "dotenv";
import { User } from "@prisma/client";

const JWT_SECRET="superman is flying"

dotenv.config();

class JWTService{
    public static async generateServiceForUser(user:User){

        const payLoad = {
            id:user?.id,
            email:user?.email
        }

        const token = JWT.sign(payLoad,JWT_SECRET)
        return token
    }
}

export default JWTService