import { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation/Navigation";
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import HomeTestimonials from './HomeTestimonials';
import Footer from '../../components/Footer/Footer';
import UdinnaLoader from '../../loader/UdinnaLoader';

const testimonials = [
    {
        testimonialText: "Udinna transformed how we approached digital healthcare. Their design process helped us simplify a complex ecosystem; from vendors to patients into one seamless experience. The results spoke for themselves: faster adoption, higher engagement, and real revenue impact.",
        testimonialClient: "Anulika Anietie",
        testimonialClientRole: "Product Manager, Pharma Products, Sterling Bank PLC."
    },
    {
        testimonialText: "Udinna helped us bring our vision for connected wellness to life. From diagnostics to meal plans, they created an ecosystem that feels effortless for users and scalable for our partners. Their design thinking turned complexity into clarity and that made all the difference.",
        testimonialClient: "Tosin Dawodu",
        testimonialClientRole: "Product Manager, Healthbanc."
    },
    {
        testimonialText: "Working with Udinna was like having a strategic co-founder. They didn't just design interfaces, they helped us define the entire user experience for how teams grow through data. Their blend of creativity and structure made Agoge a product with real purpose and usability.",
        testimonialClient: "Toluwabori Onasoga",
        testimonialClientRole: "CEO & Founder, Agoge Foundry"
    }   
];

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
        if (hasSeenLoader) {
            setIsLoading(false);
            setShowContent(true);
        }
    }, []);

    const handleLoaderComplete = () => {
        sessionStorage.setItem('hasSeenLoader', 'true');
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 500);
    };

    return (
        <>
            <title>Udinna Digital - Crafting dream brands and digital experiences</title>
            <meta name="description" content="A Lagos-based marketing, product design, and software development firm dedicated to building bold brand identities and digital experiences." />
            {isLoading && <UdinnaLoader onComplete={handleLoaderComplete} />}
            {showContent && (
                <div className="app-wrapper">
                    <Navigation />
                    <Hero />
                    <Services />
                    <About />
                    <Projects />
                    <HomeTestimonials testimonials={testimonials} />
                    <Footer />
                </div>
            )}
        </>
    );
}