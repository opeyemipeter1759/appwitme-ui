import React from "react";
import BusinessUser from "./BusinessUser";
import CarouselItem from "../Components/CarouselItem";

function BusinessLandingPage() {
	return (
		<div className="row container-fluid">
				<BusinessUser />
				<CarouselItem />
		</div>
	);
}

export default BusinessLandingPage;