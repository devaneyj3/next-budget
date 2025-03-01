import CurrencyFormat from "react-currency-format";

export const formatDate = (date) => {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "America/New_York",
	}).format(new Date(date));
};
export const showMonthAndYear = (date) => {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		timeZone: "America/New_York",
	}).format(new Date(date));
};

export const transformMoney = (amount) => {
	return (
		<CurrencyFormat
			value={amount.toFixed(2)}
			displayType={"text"}
			prefix="$"
			thousandSeparator={true}
		/>
	);
};
