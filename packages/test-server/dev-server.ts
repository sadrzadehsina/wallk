import { setupServer } from "msw/node";
import { handlers } from "./server-handlers";

const server = setupServer(...handlers);

server.listen({
	onUnhandledRequest: "bypass",
});

export * from "msw";
export { server };
