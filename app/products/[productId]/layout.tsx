export default function ProductDetailsLayout({
    children,
}:{
    children: React.ReactNode
}){
    return (
        <>
        <h3>Detail page</h3>
        {children}
        </>
    )
}