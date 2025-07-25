import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUpWithBlur } from '@/utils/animations';

export default function ProductShowcase() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section
            id="showcase"
            ref={ref}
            className="relative w-full py-32 flex flex-col items-center justify-center text-center bg-[#0D0D0D] overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,200,0.1),_transparent_70%)] pointer-events-none" />

            <motion.h2
                variants={fadeInUpWithBlur}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-24 bg-gradient-to-r from-[#FF00C8] via-[#7B00FF] to-[#00E5FF] text-transparent bg-clip-text z-10"
            >
                Meet Aurora X1
            </motion.h2>

            <motion.div
                style={{ scale, opacity }}
                className="relative z-10 max-w-4xl w-full"
            >
                <img
                    src="/assets/product-preview.png"
                    alt="Aurora X1 Headset"
                    className="w-full rounded-xl shadow-[0_0_30px_#7B00FF]"
                />
            </motion.div>

            <motion.p
                variants={fadeInUpWithBlur}
                initial="initial"
                whileInView="whileInView"
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-24 max-w-2xl text-gray-300 z-10"
            >
                Aurora X1 is designed to deliver an immersive AR experience that feels like magic — combining futuristic design, powerful performance, and cutting-edge optics.
            </motion.p>
        </section>
    );
}
