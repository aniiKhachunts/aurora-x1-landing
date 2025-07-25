import Hero from "@sections/Hero/Hero";
import Features from "@sections/Features/Features";
import ProductShowcase from "@sections/ProductShowcase/ProductShowcase";
import Testimonials from "@sections/Reviews/Reviews";
import CTA from "@sections/CTA/CTA";
import PageTransition from "@components/PageTransition";
import Navbar from "@components/Navbar";

export default function App() {
    return (
        <PageTransition>
            <div className="w-full overflow-x-hidden">
                <Navbar/>
                <Hero/>
                <Features/>
                <ProductShowcase/>
                <Testimonials/>
                <CTA/>
            </div>
        </PageTransition>
    )
}
