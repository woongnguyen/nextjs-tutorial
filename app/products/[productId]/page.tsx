import Link from "next/link";

export default async function ProductDetail({ params }:
    { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId
    return (
        <div className="container">
            <button><Link href="/products">Back</Link></button>
            <div className="mx-auto w-dvw max-w-7xl">
                <h1 className="H1">Product detail {productId}</h1>
                <div className="row">
                    <div className="col-xs-12">
                        product infomation
                    </div>
                </div>
            </div>
        </div>
    );
}