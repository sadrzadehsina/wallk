import { rest } from "msw";

import postData from './data/post-data.json'

const handlers = [
	rest.get("https://backend/posts", (req, res, ctx) => {
		const { page } = req.params;
		return res(
			ctx.json({
				total: postData.length,
				pageSize: 20,
				docs: postData.splice(page as unknown as number || 0, 20)
			})
		);
	}),
];

export { handlers };
