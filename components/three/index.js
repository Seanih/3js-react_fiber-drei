import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { angleToRadians } from '../../utils/angle';

function Three() {
	const orbitControlRef = useRef(null);

	useFrame(state => {
		if (!!orbitControlRef.current) {
			const { x, y } = state.mouse;
			console.log(y * angleToRadians(90 - 30));

			orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
			orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
			orbitControlRef.current.update();
		}
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
			<mesh position={[0, 0.5, 0]}>
				<sphereGeometry args={[0.5, 32, 32]} />
				<meshStandardMaterial color='#ffffff' />
			</mesh>

			{/* Floor */}
			<mesh rotation={[angleToRadians(-90), 0, 0]}>
				<planeGeometry args={[7, 7]} />
				<meshStandardMaterial color='#1ea3d8' />
			</mesh>
			{/* Ambient light */}
			<ambientLight args={['#ffffff', 1]} />
		</>
	);
}
export default Three;
