"use client";
import { useState, useEffect } from "react";
import CategoryContext from "./CategoryContext";
import classes from "../context.module.scss";
// Consider importing a client-side Supabase instance if available

import { fetchCategories } from "./contextAPI";
import { supabase } from "@/utils/supabase/server";

export const CategoryContextProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);
	const [categoriesError, setCategoriesError] = useState(null);
	const [categoriesLoading, setCategoriesLoading] = useState(true);

	// ✅ Real-time listener for new categories
	useEffect(() => {
		const handleInserts = (payload) => {
			setCategories((prevCategories) => [payload.new, ...prevCategories]);
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

		// Cleanup function to unsubscribe when unmounted
		return () => {
			channel.unsubscribe();
		};
	}, []);

	// Fetch categories when the component mounts
	useEffect(() => {
		const getCategories = async () => {
			const { categories, error } = await fetchCategories();

			if (error) {
				setCategoriesError(`Error fetching categories: ${error}`);
			} else {
				setCategories(categories);
			}
			setCategoriesLoading(false);
		};

		getCategories();
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
