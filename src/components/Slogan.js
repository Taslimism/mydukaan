import style from "./Slogan.module.css";
const Slogan = ({ text }) => {
	return <div className={style.slogan}>{text}</div>;
};

export default Slogan;
