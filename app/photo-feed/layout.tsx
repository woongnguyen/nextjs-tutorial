
export default function PhotoFeedLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}){
    return (
        <>
            <div className="wrap-photo-feed">
                {props.modal}
                {props.children}
            </div>
        </>
    );
}