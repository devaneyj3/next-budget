import CurrencyFormat from "react-currency-format";

export const transformMoney = (amount) => {
	return (
		<CurrencyFormat
			value={amount.toFixed(2)}
			displayType={"text"}
			thousandSeparator={true}
		/>
	);
};
