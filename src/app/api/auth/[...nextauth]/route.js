import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            id:"credentials",
            name:"credentials",
            async authorize(credentials) {

                await connect();

                try {
                    const user = await User.findOne({
                        email: credentials.email
                    })

                    if(user) {
                        // check password
                        const match = await bcrypt.compare(
                            credentials.password, user.password
                        )

                        if(match) {
                            return user;
                        } else {
                            throw new Error("Wrong password")
                        }
                    } else {
                        throw new Error("User not found")
                    }
                } catch (err) {
                    throw new Error(err)
                }
            }
        })
    ],

    pages: {
        error:"/dashboard/login"
    }
})

export {handler as GET, handler as POST};