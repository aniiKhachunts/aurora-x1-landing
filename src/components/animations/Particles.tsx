export default function Particles() {
    return (
        <div className="absolute inset-0 z-0">
            {Array.from({ length: 30 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#FF00C8] rounded-full animate-float"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: 0.3 + Math.random() * 0.7,
                    }}
                />
            ))}
        </div>
    );
}
