import { motion } from 'framer-motion';

const reviews = [
    {
        name: 'Sophia Martinez',
        role: 'Tech Enthusiast',
        text: 'Aurora X1 is a game-changer! The AR clarity is beyond anything I’ve seen.',
        avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
        name: 'Daniel Lee',
        role: 'AR Developer',
        text: 'Building apps for Aurora X1 is a dream — the holographic display is stunning!',
        avatar: 'https://i.pravatar.cc/150?img=11',
    },
    {
        name: 'Ava Kim',
        role: 'Gamer',
        text: 'Playing AR games with Aurora X1 feels like stepping into another dimension.',
        avatar: 'https://i.pravatar.cc/150?img=17',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials"
                 className="w-full py-20 sm:py-32 bg-[#0D0D0D] flex flex-col items-center text-center px-4 sm:px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#FF00C8] via-[#7B00FF] to-[#00E5FF] text-transparent bg-clip-text">
                What People Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                {reviews.map((testimonial, i) => (
                    <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="p-8 rounded-xl bg-[#1A1A1A] shadow-[0_0_15px_#7B00FF] hover:shadow-[0_0_25px_#FF00C8] transition-all"
                    >
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-[#FF00C8]"
                        />
                        <p className="text-gray-300 mb-4">{testimonial.text}</p>
                        <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
