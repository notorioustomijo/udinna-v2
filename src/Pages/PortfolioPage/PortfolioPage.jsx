import { useState, useMemo } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import ProjectImagesGrid from '../HomePage/ProjectImagesGrid';
import PortfolioFilter from './PortfolioFilter';
import HomeTestimonials from '../HomePage/HomeTestimonials';
import Footer from '../../components/Footer/Footer';
import styles from './PortfolioPage.module.css';

import image1 from '../HomePage/assets/image8.webp';
import image2 from '../HomePage/assets/image2.webp';
import image3 from '../HomePage/assets/image3.webp';
import image4 from '../HomePage/assets/image4.webp';
import image5 from '../HomePage/assets/image8.webp';
import image6 from '../HomePage/assets/image4.webp';
import image7 from '../HomePage/assets/image7.webp';
import image8 from '../HomePage/assets/image8.webp';

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

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        'All',
        'Product Design',
        'Creative Branding',
        'Marketing Campaign',
        'Motion Graphics'
    ];

    const projectImages = [
        { 
            src: image1, 
            title: 'Frutta Juice',
            description: "Africa's Favourite Fruit Juice & Beverage Company",
            tags: ['Creative Branding', 'Marketing Campaign'],
            url: '/projects/frutta'
        },
        { 
            src: image2, 
            title: 'HealthBanc',
            description: 'A one-stop platform for fitness, diagnostics, and healthy meal plans',
            tags: ['Product Design', 'Health Tech'],
            url: '/projects/healthbanc'
        },
        { 
            src: image3, 
            title: 'Onedrugstore',
            description: 'Redefining Access to Healthcare',
            tags: ['Product Design', 'Health Tech'],
            url: '/projects/one-drug-store'
        },
        { 
            src: image4, 
            title: 'Agoge AI',
            description: 'Training the Future of Teams',
            tags: ['Product Design', 'Web Development'],
            url: '/projects/agoge'
        },
        { 
            src: image5, 
            title: 'Restaurant Chain',
            description: 'Bringing authentic flavors to every neighborhood',
            tags: ['Creative Branding', 'Marketing Campaign'],
            url: '/projects/restaurant'
        },
        { 
            src: image6, 
            title: 'Fitness App',
            description: 'Your personal trainer in your pocket',
            tags: ['Product Design', 'Health Tech'],
            url: '/projects/fitness'
        },
        { 
            src: image7, 
            title: 'E-commerce Platform',
            description: 'Seamless shopping experience for modern consumers',
            tags: ['Web Development', 'Product Design'],
            url: '/projects/ecom'
        },
        { 
            src: image8, 
            title: 'Music Festival',
            description: 'Celebrating culture through sound and art',
            tags: ['Creative Branding', 'Marketing Campaign', 'Motion Graphics'],
            url: '/projects/music-festival'
        }
    ];

    const assignSizes = (projects) => {
        const sizePattern = ['large', 'small', 'small', 'large', 'full', 'half', 'half', 'full'];
        
        return projects.map((project, index) => ({
            ...project,
            size: sizePattern[index % sizePattern.length]
        }));
    };

    const filteredProjects = useMemo(() => {
        let filtered;
        if (activeFilter === 'All') {
            filtered = projectImages;
        } else {
            filtered = projectImages.filter(project => 
                project.tags.includes(activeFilter)
            );
        }
        
        return assignSizes(filtered);
    }, [activeFilter]);

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <>
            <Navigation />
            <div className={styles.portfolioPage}>
                <PortfolioFilter 
                    filters={filters}
                    activeFilter={activeFilter}
                    onFilterChange={handleFilterChange}
                />

                <div className={styles.portfolioContent}>
                    {filteredProjects.length > 0 ? (
                        <ProjectImagesGrid images={filteredProjects} />
                    ) : (
                        <div className={styles.noResults}>
                            <p>No projects found for this filter.</p>
                        </div>
                    )}
                </div>
            </div>

            <HomeTestimonials testimonials={testimonials} />
            
            <Footer />
        </>
    );
}