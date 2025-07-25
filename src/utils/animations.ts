import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
};

export const fadeInUpWithBlur: Variants = {
    initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
};
