import React, { useState } from "react";
import axios from "axios";

export const MobileContext = React.createContext();

export function MobileProvider({ children }) {
	const [allMob, setAllMob] = useState([]);
	const [filter, setFilter] = useState([]);
	const [filterMob, setFilterMob] = useState([]);
	const [brand, setBrand] = useState([]);
	console.log(brand);

	async function fetchAllMobiles() {
		try {
			const res = await axios.get("http://localhost:3001/mobiles/all");
			console.log(res);

			setAllMob(res.data.info);
		} catch (e) {
			console.log("Error while fetching all mobile ", e);
		}
	}

	if (allMob.length > 0 && brand.length === 0) {
		storeBrands();
	}
	async function storeBrands() {
		allMob.map((items) => {
			brand.push(items.brand);
		});
		setBrand([...new Set(brand)]);
	}

	async function storeFiltered() {
		allMob.map((item) => {
			if (filter.includes(item.brand)) {
				filterMob.push(item);
			}
		});
	}
	const val = {
		allMob,
		setAllMob,
		fetchAllMobiles,
		storeBrands,
		brand,
		filter,
		setFilter,
		storeFiltered,
		filterMob,
	};
	return (
		<MobileContext.Provider value={val}>{children}</MobileContext.Provider>
	);
}
