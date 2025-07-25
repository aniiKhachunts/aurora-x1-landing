import { motion, useMotionValue, useSpring } from 'framer-motion';
import AnimatedBackground from '@components/animations/AnimatedBackground';
import HologramRings from '@components/animations/HologramRings';
import EnergyStreaks from '@components/animations/EnergyStreaks';
import Particles from '@components/animations/Particles';
import HeroProduct from './HeroProduct';

export default function Hero() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 80, damping: 12 });
    const springY = useSpring(y, { stiffness: 80, damping: 12 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { innerWidth, innerHeight } = window;
        x.set((e.clientX - innerWidth / 2) / 10);
        y.set((e.clientY - innerHeight / 2) / 10);
    };

    return (
        <section
            id="hero"
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#0D0D0D] px-4 sm:px-6 lg:px-8"
        >
            <AnimatedBackground />
            <Particles />
            <HologramRings />
            <EnergyStreaks />

            <motion.div style={{ x: springX, y: springY }}>
                <HeroProduct x={springX} y={springY} />
            </motion.div>

            <motion.div
                className="relative z-20 px-6 mt-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-[#FF00C8] via-[#7B00FF] to-[#00E5FF] text-transparent bg-clip-text">
                    Aurora X1 – See Beyond Reality
                </h1>
                <p className="mt-4 sm:mt-6 max-w-md sm:max-w-xl text-base sm:text-lg md:text-xl text-gray-300 mx-auto">
                    Experience next-gen augmented reality with holographic precision and cosmic design.
                </p>
                <motion.button
                    className="mt-10 px-8 py-3 rounded-full font-bold text-lg text-black bg-[#FF00C8] shadow-[0_0_20px_#FF00C8] hover:shadow-[0_0_30px_#FF00C8] transition-all"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: ['0 0 20px #FF00C8', '0 0 30px #FF00C8', '0 0 20px #FF00C8'],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    Pre-order Now
                </motion.button>
            </motion.div>
        </section>
    );
}
