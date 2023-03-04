import "../styles/globals.css";
import "../i18n";
import "test-server";

import type { AppProps } from "next/app";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

import { Header } from "ui";

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<AppHeader />
			<div className="container mx-auto py-12">
				<Component {...pageProps} />
			</div>
		</SessionProvider>
	);
}

function AppHeader() {
	const { data: session } = useSession();

	return <Header user={session?.user} loginFn={signIn} logoutFn={signOut} />;
}
