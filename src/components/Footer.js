import style from "./Footer.module.css";
import logo from "./../assets/white.svg";
const Footer = () => {
	return (
		<div className={style["footer-container"]}>
			<div className={style["footer-top"]}>
				<div>
					<img src={logo} />
				</div>
				<div>
					<p>Contact</p>
					<p>FAQ's</p>
				</div>
				<div>
					<p>Tutorials</p>
					<p>Blog</p>
				</div>
				<div>
					<p>Privacy</p>
					<p>Banned Items</p>
				</div>
				<div>
					<p>About</p>
					<p className={style.jobs}>
						Jobs<div className={style["noOfJobs"]}>3</div>
					</p>
				</div>
				<div>
					<p>Facebook</p>
					<p>Twitter</p>
					<p>Linkedin</p>
				</div>
			</div>
			<hr></hr>
			<div className={style["footer-bottom"]}>
				<p>Dukaan 2020, All rights reserved.</p>
				<p>Made in India</p>
			</div>
		</div>
	);
};

export default Footer;
