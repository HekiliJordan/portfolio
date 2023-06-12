import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
})


// when we pass username and password it's a POST
// GET fetch our session, user info
export {handler as GET, handler as POST};