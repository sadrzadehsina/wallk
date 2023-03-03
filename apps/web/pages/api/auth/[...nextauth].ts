import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from 'database';

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || "<client_id>",
			clientSecret: process.env.GITHUB_SECRET || "<client_secret>"
		})
	]
}) 
