import './prod-style.css'
import Link from "next/link";

export default async function ProductsList(){
    await new Promise((resolve) =>{
        setTimeout(()=>{resolve('is loading')}, 2000)
    })
    return (
        <div className="container">
            <h1 className="H1">{'this is product list page'}</h1>
            <ul className="flex flex-column">
                <li><Link href="/products/1">prod 1</Link></li>
                <li><Link href="/products/2">prod 2</Link></li>
                <li><Link href="/products/3">prod 3</Link></li>
            </ul>
        </div>
    );
}