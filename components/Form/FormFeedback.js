export function FormFeedback({ error, success }) {
	return (
		<>
			{error && <p className="error">{error}</p>}
			{success && <p className="success">Transaction added!</p>}
		</>
	);
}
