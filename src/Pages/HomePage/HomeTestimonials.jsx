import { useState, useEffect } from 'react';
import styles from './HomeTestimonial.module.css';

export default function HomeTestimonials({ testimonials }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Safety check
    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    // Auto-rotate testimonials every 6 seconds
    useEffect(() => {
        if (testimonials.length <= 1) return;

        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                setIsTransitioning(false);
            }, 300);
        }, 6000);

        return () => clearInterval(timer);
    }, [currentIndex, testimonials.length]);

    const handleDotClick = (index) => {
        if (index !== currentIndex) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
            }, 300);
        }
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className={styles.testimonialsSection}>
            <div 
                className={`${styles.testimonialContainer} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
            >
                <p className={styles.testimonialText}>
                    "{currentTestimonial.testimonialText}"
                </p>

                <div className={styles.testimonialClient}>
                    <p className={styles.clientName}>
                        {currentTestimonial.testimonialClient}
                    </p>
                    <p className={styles.clientRole}>
                        {currentTestimonial.testimonialClientRole}
                    </p>
                </div>
            </div>

            {/* Carousel Indicators */}
            {testimonials.length > 1 && (
                <div className={styles.carouselIndicators}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${
                                index === currentIndex ? styles.activeIndicator : ''
                            }`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}