import Image from "next/image";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

type Data = {
	total: number;
	docs: Array<Post>;
};

type Post = {
	id: string;
	title: string;
	user: string;
	coverImageURL: string;
	publicDate: string;
	price: string;
	category: string;
	coverDescription: string;
	description: string;
};

export default function Home({ data }: { data: Data }) {
	const [page, setPage] = useState(0);

	const { posts, loading, hasMore } = usePosts(data.docs, page);

	const observer = useRef();
	const lastPostElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPage((previousPage) => previousPage + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	return (
		<div className="grid grid-cols-4 gap-20">
			{posts.map((post: Post, index: number) => {
				if (posts.length === index + 1) {
					return <PostCard key={post.id} {...post} ref={lastPostElementRef} />;
				} else {
					return <PostCard key={post.id} {...post} />;
				}
			})}
			<div>{loading && "Loading..."}</div>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await fetch("https://backend/posts");
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}

function usePosts(serverPosts: Array<Post>, page = 0) {
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [posts, setPosts] = useState<Array<Post>>(serverPosts);

	useEffect(() => {
		async function fetchPosts() {
			setLoading(true);

			const res = await fetch(`https://backend/posts?page=${page}`);
			const newPosts = await res.json();

			setLoading(false);
			setHasMore(newPosts.docs.length > 0)

			setPosts((perviousPosts) => {
				return [...perviousPosts, ...newPosts.docs];
			});
		}

		if (page > 0) fetchPosts();
	}, [page]);

	return { posts, loading, hasMore };
}

const PostCard = forwardRef(function PostCard(post: Post, ref) {
	return (
		<div ref={ref} className="card w-96 bg-base-200 shadow-xl">
			<figure>
				<Image
					src={post.coverImageURL}
					alt={post.title}
					width="384"
					height="200"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{post.title}</h2>
				<p>{post.coverDescription}</p>
				<div className="card-actions justify-end">
					<h6>{post.price}</h6>
				</div>
			</div>
		</div>
	);
});
