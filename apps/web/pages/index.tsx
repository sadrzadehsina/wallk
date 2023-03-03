export default function Web() {
	return (
		<div className="grid grid-cols-4 gap-20">
			{Array(10)
				.fill("post card")
				.map(() => (
					<PostCard />
				))}
		</div>
	);
}

function PostCard() {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src="/images/post-card-1.jpg" alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
			</div>
			<div className="card-actions justify-end">
			<h6>1500$</h6>
			</div>
		</div>
	);
}
