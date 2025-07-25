import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

export default function NeonRings() {
    const groupRef = useRef<Group>(null!);

    useFrame(() => {
        groupRef.current.rotation.z += 0.0015;
    });

    return (
        <group ref={groupRef} scale={2.5}>
            {/* Outer Ring */}
            <mesh>
                <torusGeometry args={[3, 0.08, 16, 100]} />
                <meshStandardMaterial
                    color="#00E5FF"
                    emissive="#00E5FF"
                    emissiveIntensity={1.5}
                />
            </mesh>

            {/* Inner Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2, 0.08, 16, 100]} />
                <meshStandardMaterial
                    color="#FF00C8"
                    emissive="#FF00C8"
                    emissiveIntensity={1.5}
                />
            </mesh>
        </group>
    );
}
