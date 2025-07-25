import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroProduct({ x, y }: { x: any; y: any }) {
    const rotateX = useTransform(y, [-150, 150], [25, -25]);
    const rotateY = useTransform(x, [-100, 100], [-20, 20]);
    const translateY = useTransform(y, [-150, 150], [-30, 30]);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const scrollTilt = useTransform(scrollYProgress, [0, 1], [-8, 8]);

    return (
        <motion.div
            ref={ref}
            className="relative w-[350px] md:w-[500px] mx-auto z-10 hero-shimmer"
            style={{
                rotateX,
                rotateY,
                y: translateY,
                rotateZ: scrollTilt,
            }}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        >
            <img
                src="/assets/aurora-hero.png"
                alt="Aurora X1"
                className="w-full drop-shadow-[0_0_30px_rgba(255,0,200,0.7)]"
            />
        </motion.div>
    );
}
