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


export default function PageName() {
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

    // const impactList = [
    //     '<Impact 1 text goes here>',
    //     '<Impact 2 text goes here>',
    //     '<Impact 3 text goes here>'
    // ];

    return (
        <>
            <ProjectPage
                title="Udinna Projects - Agoge"
                metaDescription="The Future of Team Training"
                heroTitle="Agoge"
                heroImage={projectHeroImage}
                client="Agoge Foundry"
                sector="HR/Team Building & Management"
                country="Nigeria/Nigeria>"
                year="2025"
                scope="Visual Identity, Product design"
                projectTitle="Training the Future of Teams"
                challengeDesc="
                Organisations fail not because of lack of skill, 
                but because of weak culture and disconnection. 
                Agoge was born from a bold idea to strengthen teams 
                through diagnostics, shared challenges, and real 
                growth experiences. Udinna brought that idea to life 
                through an interactive digital platform that blends 
                gamification, psychology, and real-world learning. 
                We designed Agoge to feel like a journey, one that 
                transforms individuals into unstoppable teams.
                "
                solutionEngineered="
                We built Agoge as an intelligent team-growth platform, 
                diagnosing groups (Small teams, friends etc) and 
                organisational (Enterprises, Startups etc) challenges 
                and recommending actionable solutions such as training, 
                workshops, and retreats. The product’s AI-driven insight 
                engine and dynamic recommendation system make it easy 
                for teams to evolve through data, not guesswork.
                "
                // impact={impactList}
                images={projectImages}
                testimonialText="
                Working with Udinna was like having a strategic co-founder. 
                They didn’t just design interfaces, they helped us define 
                the entire user experience for how teams grow through data. 
                Their blend of creativity and structure made Agoge a product 
                with real purpose and usability.
                "
                testimonialClient="Toluwabori Onasoga"
                testimonialClientRole="
                CEO & Founder, Agoge Foundry
                "
                nextProjectName="Washryte"
                nextProjectLink="/projects/washryte"
            />
        </>
    )
}