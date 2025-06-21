import Image from "next/image"
import wonders from "@/photo-feed/wonders"

export default async function PhotoPage({params}: {params: Promise<{id: string}>}){
	const {id} = await params;
	const photo = wonders.find((p) => String(p.id) === id)!
	return (
		<div className="container ms-auto my-10">
			<div className="w-1/2 mx-auto">
				<h1 className="text-center text-3xl font-bold">{photo.name}</h1>
				<Image alt={photo.name} src={`/photos/${photo.src}.jpg`} width={1160} height={880} className="w-full object-cover aspect-square"/>
				<div className="bg-white py-4">
					<h3>{photo.photographer}</h3>
					<h3>{photo.location}</h3>
				</div>
			</div>
		</div>
	)
}