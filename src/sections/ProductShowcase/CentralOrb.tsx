import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function CentralOrb() {
    const meshRef = useRef<Mesh>(null!);

    useFrame(({ clock }) => {
        meshRef.current.rotation.y += 0.002;
        meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.05;
    });

    return (
        <mesh ref={meshRef} scale={1.8}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshStandardMaterial
                color="#FF00C8"
                emissive="#7B00FF"
                emissiveIntensity={1.5}
                metalness={0.8}
                roughness={0.15}
            />
        </mesh>
    );
}
