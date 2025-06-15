import '../../prod-style.css'
import Link from "next/link";

export default async function ReviewsList(){
    return (
        <div className="container">
            <ul className="flex flex-col">
                <li><Link href="/reviews/1">review 1</Link></li>
                <li><Link href="/reviews/2">review 2</Link></li>
                <li><Link href="/reviews/3">review 3</Link></li>
            </ul>
        </div>
    );
}