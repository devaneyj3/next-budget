import React from "react";
import styles from "./AddCategoryButton.module.scss";

export default function AddCategoryButton({
	setShowCategoryForm,
	showCategoryForm,
}) {
	return (
		<p
			className={styles.showCategory}
			onClick={() => setShowCategoryForm(!showCategoryForm)}>
			Add Category
		</p>
	);
}
