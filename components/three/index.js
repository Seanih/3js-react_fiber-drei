import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { angleToRadians } from '../../utils/angle';
import * as THREE from 'three';

function Three() {
	const orbitControlRef = useRef(null);

	useFrame(state => {
		// if (!!orbitControlRef.current) {
		// 	const { x, y } = state.mouse;
		// 	console.log(y * angleToRadians(90 - 30));
		// 	orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
		// 	orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
		// 	orbitControlRef.current.update();
		// }
	});

	return (
		<>
			{/* Camera - set initial position then change with orbit controls */}
			<PerspectiveCamera makeDefault position={[0, 1, 5]} />
			<OrbitControls
				ref={orbitControlRef}
				minPolarAngle={angleToRadians(60)}
				maxPolarAngle={angleToRadians(80)}
			/>
			{/* Ball */}
			<mesh position={[0, 0.5, 0]} castShadow>
				<sphereGeometry args={[0.5, 32, 32]} />
				<meshStandardMaterial color='#ffffff' metalness={0.8} roughness={0.2} />
			</mesh>

			{/* Floor */}
			<mesh rotation={[angleToRadians(-90), 0, 0]} receiveShadow>
				<planeGeometry args={[20, 20]} />
				<meshStandardMaterial color='#1ea3d8' />
			</mesh>
			{/* Ambient light */}
			<ambientLight args={['#ffffff', 0.25]} />

			{/* spotlight */}
			<spotLight
				args={['#ffffff', 1.5, 7, angleToRadians(45), 0.5]}
				position={[-3, 2, 0]}
				castShadow
			/>

			{/* Environment -- surrounding  */}
			<Environment background>
				<mesh>
					<sphereGeometry args={[50, 100, 100]} />
					<meshBasicMaterial side={THREE.BackSide} color='#2280cc' />
				</mesh>
			</Environment>
		</>
	);
}
export default Three;
