"use client";
import { createContext, useContext } from "react";

const CategoryContext = createContext();

export const useCategoryContext = () => useContext(CategoryContext);

export default CategoryContext;
