import {
	Environment,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { angleToRadians } from '../../utils/angle';
import * as THREE from 'three';
import gsap from 'gsap';

function Three() {
	const orbitControlRef = useRef(null);

	{
		/* have camera follow the user's mouse */
	}
	// useFrame(state => {
	// 	if (!!orbitControlRef.current) {
	// 		const { x, y } = state.mouse;
	// 		console.log(y * angleToRadians(90 - 30));
	// 		orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
	// 		orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
	// 		orbitControlRef.current.update();
	// 	}
	// });

	// Ball Animation
	const ballRef = useRef(null);

	useEffect(() => {
		if (!!ballRef.current) {
			console.log(ballRef.current);

			const timeline = gsap.timeline({ paused: true });

			// gsap for animation
			// "to" moves geometry from default position to the specified position; "from" starts where specified and ends at default position
			timeline.to(ballRef.current.position, {
				x: 1,
				duration: 2,
				ease: 'power2.out',
			});
			timeline.to(
				ballRef.current.position,
				{
					y: 0.5,
					duration: 1,
					ease: 'bounce',
				},
				'<'
			);

			timeline.play();
		}
	}, [ballRef.current]);

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
			<mesh position={[-2, 1.5, 0]} castShadow ref={ballRef}>
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
				position={[-2, 2, 0]}
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
