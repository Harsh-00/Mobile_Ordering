import React, { useContext } from "react";
import { MobileContext } from "../context/MobileContext";

const Sidebar = () => {
	const { brand } = useContext(MobileContext);
	return (
		<div>
			<h1>Filter</h1>
			<div>Brand</div>
			<div>
				{brand.map((item, idx) => {
					return <div key={idx}>{item}</div>;
				})}
			</div>
		</div>
	);
};

export default Sidebar;

//how to create a checkbox in react ?

//how to create a radio button in react ?
//how to create a dropdown in react ?
