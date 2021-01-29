import React from "react";
import "./userpage.scss";
import userimg3 from "../img/img2.jpg";
function UserPage() {
	return (
		
			<div className="card mt-3">
				<div className="card-body row">
					<span className="col-5">
						<img
							src={userimg3}
							alt="..."
							className="img-thumbnail rounded-circle"
						/>
					</span>
					<div className="col-7">
						<h5 className="card-title"> Aspire Brand</h5>
						<span className="card-text">Fashion</span> <br />
						<span className="card-text">Ibadan North</span>
					</div>
				</div>
			</div>
		
	);
}

export default UserPage;
