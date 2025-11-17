import ProjectImagesGrid from './ProjectImagesGrid';
import style from './Projects.module.css';

import image1 from './assets/image8.webp';
import image2 from './assets/image2.webp';
import image3 from './assets/image3.webp';
import image4 from './assets/image4.webp';
import image5 from './assets/image8.webp';
import image6 from './assets/image4.webp';
import image7 from './assets/image7.webp';
import image8 from './assets/image8.webp';

export default function Projects() {
    const projectImages = [
        { 
            src: image1, 
            size: 'large',
            title: 'Frutta Juice',
            description: "Africa's Favourite Fruit Juice & Beverage Company",
            tags: ['Visual design', 'Marketing campaign', 'Creative branding', 'Social media management'],
            url: '/projects/frutta'
        },
        { 
            src: image2, 
            size: 'small',
            title: 'HealthBanc',
            description: 'A one-stop platform for fitness, diagnostics, and healthy meal plans, tailored to help you achieve your health goals',
            tags: ['Visual design', 'Marketing campaign', 'Creative branding', 'Social media management'],
            url: '/projects/healthbanc'
        },
        { 
            src: image3, 
            size: 'small',
            title: 'Onedrugstore',
            description: 'Redefining Access to Healthcare',
            tags: ['UI/UX design', 'Mobile/web design', 'Health tech/e-commerce'],
            url: '/projects/one-drug-store'
        },
        { 
            src: image4, 
            size: 'large',
            title: 'Agoge AI',
            description: 'Training the Future of Teams',
            tags: ['UI/UX design', 'Mobile/Web Design', 'HR/Team building & management'],
            url: '/projects/agoge'
        },
        { 
            src: image5, 
            size: 'full',
            title: 'Restaurant Chain',
            description: 'Bringing authentic flavors to every neighborhood',
            tags: ['Visual Design', 'Brand Strategy'],
            url: '/projects/restaurant'
        },
        { 
            src: image6, 
            size: 'half',
            title: 'Fitness App',
            description: 'Your personal trainer in your pocket',
            tags: ['UI/UX', 'Product Design'],
            url: '/projects/fitness'
        },
        { 
            src: image7, 
            size: 'half',
            title: 'E-commerce Platform',
            description: 'Seamless shopping experience for modern consumers',
            tags: ['Web Development', 'UX Design'],
            url: '/projects/ecom'
        },
        { 
            src: image8, 
            size: 'full',
            title: 'Music Festival',
            description: 'Celebrating culture through sound and art',
            tags: ['Event Branding', 'Marketing'],
            url: '/projects/music-festival'
        }
    ];

    return (
        <section className={style.projectsSection}>
            <div className={style.projectsSectionHeader}>
                <h2>Projects</h2>
                <a 
                    href="/portfolio"
                    className={style.navLink}
                >
                    Portfolio
                </a>
            </div>

            <ProjectImagesGrid images={projectImages} />
        </section>
    );
}