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
        { src: projectImage1, size: 'large' },      // 58% width
        { src: projectImage2, size: 'small' },     // 42% width
        { src: projectImage3, size: 'small' },     // 42% width
        { src: projectImage4, size: 'large' },     // 58% width
        { src: projectImage5, size: 'full' },     // 100% width
        { src: projectImage6, size: 'half' },      // 50% width
        { src: projectImage7, size: 'half' },      // 50% width
        { src: projectImage8, size: 'full' },      // Full width
    ];

    const impactList = [
        'I do this for realz',
        'Design, code & AI no be beans',
        'You already know this'
    ];

    return (
        <>
            <ProjectPage
                title="Udinna Projects - Metolo"
                metaDescription="Multidisiplinary Creative Portfolio"
                heroTitle="Metolo"
                heroImage={projectHeroImage}
                client="Metolo Foyet"
                sector="Multidisciplinary"
                country="Nigeria/USA"
                year="2025"
                scope="Branding, Web Design, Web Development"
                projectTitle="Metolo Portfolio Website"
                challengeDesc="
                No challenge too high. No mission impossible
                "
                solutionEngineered="
                An amazing website. You go fear fear.
                "
                impact={impactList}
                images={projectImages}
                testimonialText="
                They are the best
                "
                testimonialClient="Metolo Foyet"
                testimonialClientRole="
                Multidisciplinary GOAT
                "
                nextProjectName="Delight Vet"
                nextProjectLink="/projects/delight-vet"
            />
        </>
    )
}