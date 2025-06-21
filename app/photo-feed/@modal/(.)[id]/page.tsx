import wonders from "@/photo-feed/wonders";
import Modal from "@/_lib/Modal";
import Image from "next/image";

export default function PhotoPopupModal({params: {id}}: {
    params: { id: string };
}){
    const photo = wonders.find(
        (p) => String(p.id) === id)!
    return (
        <Modal>
            <Image src={`/photos/${photo.src}.jpg`} alt={photo.name} width={1160} height={880} className="w-full object-cover aspect-square"/>
            <div className="bg-white py-4">
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
    )
}