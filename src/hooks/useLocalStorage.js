import { useState, useEffect } from "react";

export const useLocalStorage = (keyName) => {
	const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(keyName);
		try {
			const parsedValue = JSON.parse(storedValue);
			return parsedValue;
		} catch (error) {
			return storedValue;
		}
	});

	useEffect(() => {
		const stringifiedValue = JSON.stringify(value);
		localStorage.setItem(keyName, stringifiedValue);
	}, [value, setValue]);

	return [value, setValue];
};
