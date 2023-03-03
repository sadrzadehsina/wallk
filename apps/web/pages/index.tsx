export default function Home({ posts }: { posts: Array<{ title: string }> }) {
	return (
		<div className="grid grid-cols-4 gap-20">{posts.map(post => <PostCard />)}</div>
	);
}

export async function getServerSideProps() {
	const res = await fetch("https://backend/posts");
	const posts = await res.json();

	return {
		props: {
			posts,
		},
	};
}

function PostCard() {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src="/images/post-card-1.jpg" alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					Shoes!
					<div className="badge-secondary badge">NEW</div>
				</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<div className="badge-outline badge">Fashion</div>
					<div className="badge-outline badge">Products</div>
				</div>
			</div>
		</div>
	);
}
