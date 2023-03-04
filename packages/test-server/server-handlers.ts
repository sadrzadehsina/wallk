import { rest } from "msw";

import postData from "./data/post-data.json";
import { readAll, read } from "./data/posts";

const handlers = [
  rest.get("https://backend/posts", async (req, res, ctx) => {
    const { page } = req.params;

    const posts = await readAll(page as unknown as number);

    return res(
      ctx.json({
        total: postData.length,
        docs: posts,
      })
    );
  }),
  rest.get("https://backend/posts/:id", async (req, res, ctx) => {
    const { id } = req.params;

		const post = await read(id as unknown as string);

		return res(
			ctx.json({
				doc: post
			})
		)
  }),
];

export { handlers };
