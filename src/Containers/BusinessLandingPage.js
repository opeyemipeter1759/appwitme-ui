import React from "react";
import BusinessUser from "./BusinessUser";
import CarouselItem from "../Components/CarouselItem";

function BusinessLandingPage() {
	return (
		<div className="row container">
			<div className="col-md-4 col-sm-6 col-6 col-lg-4 ">
				<BusinessUser />
			</div>
			<div className="col-md-8">
				<CarouselItem />
			</div>
		</div>
	);
}

export default BusinessLandingPage;
