"use client";
import { useState, useEffect } from "react";
import CategoryContext from "./CategoryContext";
import classes from "../context.module.scss";
import { supabase } from "@/utils/supabase/server";
import { fetchCategories } from "./contextAPI";

export const TransactionContextProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);
	const [categoriesError, setCategoriesError] = useState(null);
	const [categoriesLoading, setCategoriesLoading] = useState(true);

	// ✅ Real-time listener for new categories
	useEffect(() => {
		const handleInserts = (payload) => {
			setCategories((prevCategories) => [payload.new, ...prevCategories]); // ✅ Update state
		};

		// ✅ Subscribe to real-time changes
		const channel = supabase
			.channel("CategoryChannel")
			.on(
				"postgres_changes",
				{ event: "INSERT", schema: "public", table: "Category" },
				handleInserts
			)
			.subscribe();

		// ✅ Cleanup function to unsubscribe when unmounted
		return () => {
			channel.unsubscribe();
		};
	}, []);
	// Fetch transactions when the component mounts
	useEffect(() => {
		const getCategoies = async () => {
			const { categories, error } = await fetchCategories();

			if (error) {
				setCategoriesError("Error fetching categories:", error);
			} else {
				setCategories(categories);
			}
			setCategoriesLoading(false);
		};

		getCategoies();
	}, []);

	return (
		<CategoryContext.Provider
			value={{
				categories,
				categoriesError,
				categoriesLoading,
			}}>
			{categoriesLoading ? (
				<div className={classes.loading}>
					<p>Loading categories...</p>
				</div>
			) : (
				children
			)}
		</CategoryContext.Provider>
	);
};
