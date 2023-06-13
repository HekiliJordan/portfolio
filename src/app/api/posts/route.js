import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req) => {

    const url = new URL(req.url);

    //search for username
    const username = url.searchParams.get("username");

    try {
        await connect();

        const posts = await Post.find(username && {username});

        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (err) {
        return new NextResponse("DB Error", {status: 500});
    }
}