export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF00C8]/40 via-[#7B00FF]/20 to-[#00E5FF]/30 animate-gradient" />
        </div>
    );
}
