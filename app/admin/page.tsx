import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Admin page',
    description: 'best asian restaurant'
}

export default function Admin() {
    return (
        <div className="admin-page">welcome admin page</div>
    );
}