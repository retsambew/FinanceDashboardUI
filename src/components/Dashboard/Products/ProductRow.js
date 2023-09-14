const ProductRow = (props) => {
	return (
		<>
			<div className="flex gap-4">
				<img
					src={props.img}
					alt="product"
					className="rounded-lg w-16 h-10 object-cover max-sm:my-3"
				/>
				<div>
					<h3 className="font-bold">{props.prodName}</h3>
					<p className="text-gray-400 text-[.65rem] font-semibold">
						{props.prodDesc}
					</p>
				</div>
			</div>
			<p className="text-xs text-center">{props.stock} in stock</p>
			<p className="text-xs font-bold text-center">${props.price}</p>
			<p className="text-xs text-center">{props.sales}</p>
		</>
	);
};

export default ProductRow;
