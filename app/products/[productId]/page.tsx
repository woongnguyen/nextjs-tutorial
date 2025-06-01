export default async function ProductDetail({ params }: { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId
    return (
        <div className="container">
            
            <h1 className="H1">Product detail {productId}</h1>
            <div className="row">
                <div className="col-xs-12">
                    product infomation
                </div>
            </div>
        </div>
    );
}