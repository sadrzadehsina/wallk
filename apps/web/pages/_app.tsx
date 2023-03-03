import "../styles/globals.css";
import "../i18n";

import type { AppProps } from "next/app";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

import { Header } from "ui";

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<App {...pageProps} Component={Component} />
		</SessionProvider>
	);
}

function App({ Component, pageProps }: AppProps) {
	const { data: session } = useSession();

	return (
		<>
			<Header user={session?.user} loginFn={signIn} logoutFn={signOut} />
			<Component {...pageProps} />
		</>
	);
}
