import { motion } from 'framer-motion';

const features = [
    { title: 'Lightning Fast AR', description: 'Ultra-responsive holographic display for seamless augmented reality.' },
    { title: 'Futuristic Design', description: 'Neon-glow aesthetics, engineered for both style and comfort.' },
    { title: 'Immersive Experience', description: 'Experience unmatched clarity with next-gen holographic lenses.' },
];

export default function Features() {
    return (
        <section id="features" className="py-32 w-full bg-[#0D0D0D] flex flex-col items-center text-center px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF00C8] via-[#7B00FF] to-[#00E5FF] text-transparent bg-clip-text">
                Why Aurora X1?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full px-4 sm:px-0">
                {features.map((feature, i) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="p-8 rounded-xl bg-[#1A1A1A] shadow-[0_0_15px_#7B00FF] hover:shadow-[0_0_25px_#FF00C8] transition-all"
                    >
                        <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
