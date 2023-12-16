import React, { useState } from "react";
import like from "../public/like.svg";
import bask from "../public/bask.svg";
import heart from "../public/red_heart.svg"
import { Link } from "react-router-dom";
import add_check from "../public/add_check.png"

const ProductItem = ({ id, image, category, title, price, rating }) => {
	const [isLiked, setIsLiked] = useState(JSON.parse(localStorage.getItem('cart')).includes(id) || false);
	let salePrice = (price - (20 * price) / 100).toLocaleString("UK-uk");

	const saveToCart = () => {
		let saveds = JSON.parse(localStorage.getItem('cart')) || []

		if (saveds.includes(id)) {
			saveds = saveds.filter(el => el !== id)
			setIsLiked(false)
		} else {
			saveds.push(id)
			setIsLiked(true)
		}

		localStorage.setItem('cart', JSON.stringify(saveds))
	}

	return (
		<div className="flex flex-wrap justify-between">
			<div className="w-[232] h-[456px] flex flex-col rounded overflow-hidden">
				<div className="w-full h-[300px] mx-auto relative rounded overflow-hidden flex justify-center items-center">
					<img className="object-contain h-[200px]" src={image} alt="" />
					<span className="absolute left-0 bottom-0 text-xs text-white bg-indigo-400 rounded p-1">
						{category}
					</span>
					<img className="absolute right-2 top-2 w-[20px] cursor-pointer" src={isLiked ? heart : like} onClick={saveToCart} alt="" />
				</div>
				<div className="relative">
					<div className="p-2 flex flex-col justify-between gap-1">
						<Link to={"/" + id} >
							<h3>{title}</h3>
							<div className="flex items-center gap-2">
								<img
									src="data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e"
									alt=""
								/>
								<h3 className="text-[11px] text-slate-500">
									{rating.count} ({rating.rate})
								</h3>
							</div>
							<h3 className="w-[100px] bg-yellow-300 rounded p-1 text-sm">
								{(price / 12).toLocaleString("uk-UK")}
							</h3>
							<s className="text-[11px] pt-2">{price}</s>
							<h3 className="text-base">{salePrice}</h3>
						</Link>
						<div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center absolute bottom-2 right-2 cursor-pointer">
							<img src={bask} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default ProductItem;
