import style from "./Hero.module.css";
import cross from "./../assets/cross.svg";
import Slogan from "./Slogan";
import slogan from "./../data/slogan";

const Hero = () => {
	return (
		<>
			<div className={style["hero-container"]}>
				<div>
					<h1 className={style.heading}>Free slogan maker</h1>
					<p className={style.prompt}>
						Simply enter a term that describes your business, and get upto 1,000
						relevant slogans for free
					</p>
				</div>
				<div>
					<p className={style["search-prompt"]}>Word for your slogan</p>
					<div class={style["search-container"]}>
						<input value="cozy" className={style.search} type="text" />
						<img className={style.cross} src={cross} alt="cross" />
					</div>
				</div>
				<div>
					<button className={style["generate-slogans"]}>
						Generate Slogans
					</button>
				</div>
				<hr></hr>
				<div className={style["generated-container"]}>
					<h3 className={style["generated"]}>
						We have genreated 1024 slogans for "cozy"
					</h3>
					<button className={style["download-button"]}>Download All</button>
				</div>
				<div className={style["slogan-container"]}>
					{slogan.map((text) => (
						<Slogan text={text} />
					))}
				</div>
				<hr></hr>
				<div className={style.pagination}>
					<span>
						<button className={style.clicked}>1</button>
						<button>1</button>
						<button>3</button>
						<span>...</span>
						<button>24</button>
					</span>
					<span className={style["next-page"]}>
						<span>Next &gt;</span>
					</span>
				</div>
			</div>
		</>
	);
};

export default Hero;
