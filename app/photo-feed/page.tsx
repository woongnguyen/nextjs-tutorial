import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image"

export default function Home() {
    return (
        <div className="container mx-auto">
            <h1>New wonder of the world</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    wonders.map(({id, src, name}) => (
                        <Link key={id} href={`/photo-feed/${id}`}>
                            <Image alt={name} src={`/photos/${src}.jpg`} width="300" height="300" className="w-full object-cover aspect-square"/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}