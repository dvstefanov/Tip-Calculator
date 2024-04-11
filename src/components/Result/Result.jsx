import classes from "./Result.module.css";

const Result = ({ text, value }) => {
	return (
		<div className={classes.result}>
			<div className={classes.text}>{text}:</div>
			<div className={classes.value}>{value}</div>
		</div>
	);
};

export default Result;
