import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Eolienne from "./Eolienne";

const Model = () => {
	const ref = useRef();
	
	return (
		<>
			<mesh ref={ref} position={[0, -10, 0]}>
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					maxPolarAngle={1.2}
					minPolarAngle={1.2}
				/>
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} intensity={1} />
				<Suspense fallback={null}>
					<Eolienne />
				</Suspense>
			</mesh>
		</>
	);
};

export default Model;
