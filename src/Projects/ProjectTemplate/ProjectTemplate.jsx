import ProjectPage from '../../components/Project/ProjectPage';

// Images
import projectHeroImage from './assets/<add project hero image here>'; // e.g. "./assets/healthbancHero.webp";
import projectImage1 from './assets/<add project image 1>';
import projectImage2 from './assets/<add project image 2>';
import projectImage3 from './assets/<add project image 3>';


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

    const impactList = [
        '<Impact 1 text goes here>',
        '<Impact 2 text goes here>',
        '<Impact 3 text goes here>'
    ];

    return (
        <>
            <ProjectPage
                title="Udinna Projects - <Project Name>"
                metaDescription="<Metadescription for project>"
                heroTitle="<Project Page Title>"
                heroImage={projectHeroImage}
                client="<Add client name for project here>"
                sector="<Add sector of project here>"
                country="<Add country/target demographic like so = Nigeria/Nigeria>"
                year="<Add year of completion here>"
                scope="<Add scope here>"
                projectTitle="<Add project title here>"
                challengeDesc="
                <Add challenge description here>
                "
                solutionEngineered="
                <Add engineered solution here>
                "
                impact={impactList}
                images={projectImages}
                testimonialText="
                <Add testimonial text here>
                "
                testimonialClient="<Add name of person giving testimonial>"
                testimonialClientRole="
                <Add role of person giving testimonial>
                "
                nextProjectName="<Add name of next project to link to>"
                nextProjectLink="<Add link to next project>"
            />
        </>
    )
}