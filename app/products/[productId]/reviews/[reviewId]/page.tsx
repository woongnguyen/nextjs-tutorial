import { notFound } from "next/navigation";

function randomInt(count: number){
	return Math.floor(Math.random() * count);
}

export default async function productReview({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) {
	const { productId, reviewId } = await params;
	
	const isRamdom = randomInt(2);

	if (parseInt(reviewId) > 1000) {
		notFound();
	}
	if (isRamdom === 1){
		throw new Error("Error loading review");
	}
	return (
		<h1>
			review id: {reviewId} and prod id: {productId}
		</h1>
	);
}