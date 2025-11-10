import { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation/Navigation";
import Hero from './Hero';
import About from './About';
import Project from './Project';
import Footer from '../../components/Footer/Footer';
import UdinnaLoader from '../../loader/UdinnaLoader';

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
            {showContent && <div className="app-wrapper">
                <Navigation />
                <Hero />
                <About />
                <Project />
                <Footer />
            </div>}
        </>
    );
}