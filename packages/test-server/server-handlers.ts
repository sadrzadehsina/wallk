import { rest } from "msw";

const handlers = [
	rest.get("https://backend/posts", (req, res, ctx) => {
		return res(
			ctx.json([{
				title: "A Shoe",
			}])
		);
	}),
];

export { handlers };
