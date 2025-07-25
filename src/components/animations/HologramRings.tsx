export default function HologramRings() {
    return (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-[500px] h-[500px] rounded-full border-4 border-[#FF00C8]/30 animate-pulse-ring"></div>
            <div className="absolute w-[700px] h-[700px] rounded-full border-4 border-[#7B00FF]/20 animate-pulse-ring-slow"></div>
        </div>
    );
}
