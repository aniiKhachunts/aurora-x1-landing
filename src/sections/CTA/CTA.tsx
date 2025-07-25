import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section id="cta" className="py-32 relative w-full bg-[#0D0D0D] text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF00C8] via-[#7B00FF] to-[#00E5FF] opacity-20 blur-2xl" />

            <motion.div
                className="relative z-10 px-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Ready to Step Into the Future?
                </h2>
                <p className="text-gray-300 text-lg mb-10">
                    Pre-order Aurora X1 now and be among the first to experience true holographic AR.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 25px #FF00C8' }}
                    className="px-10 py-4 rounded-full font-bold text-lg text-black bg-[#FF00C8] shadow-[0_0_15px_#FF00C8] transition-all"
                >
                    Pre-order Now
                </motion.button>
            </motion.div>
        </section>
    );
}
