export default function EnergyStreaks() {
    return (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute w-[300px] h-[4px] bg-gradient-to-r from-transparent via-[#FF00C8] to-transparent opacity-40 animate-energy-streak"
                    style={{
                        transform: `rotate(${i * 45}deg) translateY(${i * 20}px)`,
                        animationDelay: `${i * 1}s`,
                    }}
                />
            ))}
        </div>
    );
}
