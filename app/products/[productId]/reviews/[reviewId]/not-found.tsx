"use client";

import {usePathname} from "next/navigation";

export default function NotFound() {
	const pathURL = usePathname();
	const prodId = pathURL.split('/')[2];
	const revId = pathURL.split('/')[4];
	return (
		<div className="container">
			<div className="max-w-7xl mx-auto">
				<h1>Page reviews { revId } Not Found in product {prodId}</h1>
			</div>
		</div>
	);
}