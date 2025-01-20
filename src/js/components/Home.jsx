import React, { useState } from "react";

//create your first component
const Home = () => {

	const [activeLight, setActiveLight] = useState(null);


	return (
		<div className="text-center">
            





			<div className="semaforo">
			    <div
                    className={`rojo ${activeLight === "rojo" ? "active" : ""}`}
                    onClick={() => setActiveLight("rojo")}
                ></div>
                <div
                    className={`amarillo ${activeLight === "amarillo" ? "active" : ""}`}
                    onClick={() => setActiveLight("amarillo")}
                ></div>
				<div
                    className={`verde ${activeLight === "verde" ? "active" : ""}`}
                    onClick={() => setActiveLight("verde")}
                ></div>
			</div>



		</div>
	);
};

export default Home;