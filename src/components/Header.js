import style from "./Header.module.css";

import logo from "./../assets/white.svg";

const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.navigation}>
				<div className={style["img-container"]}>
					<img className={style.img} src={logo} alt="dukaan-logo" />
				</div>
				<div className={style["signin_download-container"]}>
					<span className={style["signin"]}>Sign In</span>
					<button className={style["download-button"]}>Dukaan for PC</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
