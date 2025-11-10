import ProjectPage from '../../components/Project/ProjectPage';

// Images
import projectHeroImage from './assets/heroImage.webp'; // e.g. "./assets/healthbancHero.webp";
import projectImage1 from './assets/image8.webp';
import projectImage2 from './assets/image2.webp';
import projectImage3 from './assets/image3.webp';
import projectImage4 from './assets/image4.webp';
import projectImage5 from './assets/image8.webp';
import projectImage6 from './assets/image4.webp';
import projectImage7 from './assets/image7.webp';
import projectImage8 from './assets/image8.webp';

export default function Healthbanc() {
    // Array of images with layout control
    // Available sizes:
    // - 'full': 100% width (entire row)
    // - 'half': 50% width (equal split)
    // - 'small': ~42% width (pair with 'large')
    // - 'large': ~58% width (pair with 'small')
    // - 'smaller': ~33% width (pair with 'larger')
    // - 'larger': ~67% width (pair with 'smaller')
    
    const projectImages = [
        { src: projectImage1, size: 'large' },      // Full width hero
        { src: projectImage2, size: 'small' },     // 42% width
        { src: projectImage3, size: 'small' },     // 58% width
        { src: projectImage4, size: 'large' },     // 58% width
        { src: projectImage5, size: 'full' },     // 42% width
        { src: projectImage6, size: 'half' },      // 50% width
        { src: projectImage7, size: 'half' },      // 50% width
        { src: projectImage8, size: 'full' },      // Full width
    ];

    const impactList = [
        '120K+ users across diagnostics and fitness segments',
        '40% increase in daily active engagement after redesign',
        '3x faster plan purchases from improved user flow'
    ];

    return (
        <>
            <ProjectPage
                title="Udinna Projects - Healthbanc"
                metaDescription="Healthy Lifestyle Product Ecosystem Design"
                heroTitle="Healthbanc"
                heroImage={projectHeroImage}
                client="Healthbanc/Sterling Bank"
                sector="Health & Wellness"
                country="Nigeria/Nigeria"
                year="2023"
                scope="Visual Identity, Product Design"
                projectTitle="Building a Smarter Path to Wellness"
                challengeDesc="
                Modern living has made health confusing; too many apps, 
                too much advice, and no single source of truth. People 
                don’t just need data; they need guidance. Healthbanc was 
                created to unify fitness, nutrition, and diagnostics; 
                helping users plan, track, and achieve real health goals 
                with clarity. Udinna designed a platform that simplifies 
                wellness through data, insight, and personalisation; turning 
                every small step into a measurable improvement.
                "
                solutionEngineered="
                We designed an end-to-end wellness platform that unifies 
                diagnostics, fitness, and nutrition into one experience. 
                From mobile onboarding to health insights, admin and partner 
                dashboards, the ecosystem empowers users to take control of 
                their well-being while enabling providers to deliver 
                personalised plans seamlessly.
                "
                impact={impactList}
                images={projectImages}
                testimonialText="
                Udinna helped us bring our vision for connected wellness to life. 
                From diagnostics to meal plans, they created an ecosystem that feels 
                effortless for users and scalable for our partners. Their design thinking 
                turned complexity into clarity and that made all the difference.
                "
                testimonialClient="Tosin Dawodu"
                testimonialClientRole="
                Product Manager, Healthbanc
                "
                nextProjectName="Agoge"
                nextProjectLink="/projects/agoge"
            />
        </>
    )
}