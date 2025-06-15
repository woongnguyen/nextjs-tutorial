export default function AdminLayout({children, notify, createnews, createproduct}:{
    children: React.ReactNode,
    notify: React.ReactNode,
    createnews: React.ReactNode,
    createproduct: React.ReactNode
}){
    return (
        <>
            <div className="max-w-7xl mx-auto flex p-4">
                {notify}
                {createnews}
                {createproduct}
                {children}
            </div>
        </>
    )
}