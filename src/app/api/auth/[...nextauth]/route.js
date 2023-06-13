import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                await connect();

                try {
                    const user = await User.findOne({email: credentials.email})

                    if (user) {
                        // check password
                        const correctPassword = await bcrypt.compare(credentials.password, user.password);

                        if (correctPassword) {
                            return user;
                        } else {
                            throw new Error("Wrong credentials");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (e) {
                    throw new Error(e)

                }
            }
        })
    ],
    pages: {
        error: 'dashboard/login'
    }
})


// when we pass username and password it's a POST
// GET fetch our session, user info
export {handler as GET, handler as POST};