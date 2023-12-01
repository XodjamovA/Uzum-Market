import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import { BASE_URL } from "../urls";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [limit, setLimit] = useState(5)
	const [buttonText, setButtonText] = useState("ПОКАЗАТЬ ЕЩЕ 20")

	useEffect(() => {
		axios.get(BASE_URL + `/products?limit=${limit}`).then((res) => {
			if (buttonText === "Скрыть") {
				setLimit(5)
				setButtonText("ПОКАЗАТЬ ЕЩЕ 20")
			}
			if (products.length === res.data.length) {
				setButtonText("Скрыть")
			} else {
				setProducts(res.data);
			}
		});
	}, [limit]);

	return (
		<div className="container">
			<h1 className=" pt-5 pb-5 text-[25px] ">Чилля Базар ❯</h1>
			<div className="div_grid container grid grid-cols-5 w-full gap-10">
				{products.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</div>
			<center className="pt-5 w-[100%]">
				<button className="bg-gray-200 w-[100%] py-[20px] px-[100p%] text-xs font-semibold rounded-md" onClick={() => setLimit(limit + 20)}>
					{buttonText}
				</button>
			</center>
		</div >
	)
}