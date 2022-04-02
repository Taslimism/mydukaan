import style from "./OtherProducts.module.css";
import rectange1 from "./../assets/Rectangle 124.png";
import rectange2 from "./../assets/Rectangle 125.png";
import rectange3 from "./../assets/Rectangle 126.png";
import rectange4 from "./../assets/Rectangle 127.png";
const OtherProducts = () => {
	return (
		<>
			<h2 className={style["product-heading"]}>Try our other free products</h2>
			<div className={style["product-detail-container"]}>
				<div>
					<img src={rectange1} />
					<h3>Privacy Policy Generator</h3>
					<p>
						Stock your store with 100s of products and start selling to
						customers in minutes, without the hassle of inventory or packaging.
					</p>
				</div>
				<div>
					<img src={rectange2} />
					<h3>Terms & Conditions Generator</h3>
					<p>
						Stock your store with 100s of products and start selling to
						customers in minutes, without the hassle of inventory or packaging.
					</p>
				</div>
				<div>
					<img src={rectange3} />
					<h3>Domain Name Generator</h3>
					<p>
						Stock your store with 100s of products and start selling to
						customers in minutes, without the hassle of inventory or packaging.
					</p>
				</div>
				<div>
					<img src={rectange4} />
					<h3>Invoice Generator</h3>
					<p>
						Stock your store with 100s of products and start selling to
						customers in minutes, without the hassle of inventory or packaging.
					</p>
				</div>
			</div>
		</>
	);
};

export default OtherProducts;
