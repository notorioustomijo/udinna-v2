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

export default function Ods() {
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
        '7,000+ users onboarded within the first launch cycle',
        '₦2M+ in early-stage revenue',
        '20% month-on-month growth in orders'
    ];

    return (
        <ProjectPage
            title="Udinna Projects - OneDrugStore"
            metaDescription="Pharmatech product design"
            heroTitle="Onedrugstore"
            heroImage={projectHeroImage}
            client="OneDrugStore/Sterling Bank"
            sector="Pharmaceuticals & Home Essentials; HealthTech"
            country="Nigeria/Nigeria"
            year="2024"
            scope="Brand Strategy, Visual Identity, Product Design"
            projectTitle="Redefining Access to Healthcare"
            challengeDesc="
            In many parts of Africa, buying medicine is still uncertain; 
            fake drugs, price inconsistencies, and inaccessible pharmacies 
            leave millions underserved. While e-commerce thrived, pharmacy 
            remained locked in outdated systems. Onedrugstore set out to 
            change that, to make access to genuine medication as simple as 
            shopping online. Udinna designed a human-centered digital pharmacy 
            that connects users, vendors, and hospitals in one trusted ecosystem, 
            from prescription uploads to doorstep delivery. Healthcare, finally 
            made convenient and transparent."
            solutionEngineered="
            We designed the complete Onedrugstore ecosystem; 
            web, mobile, vendor, and admin platforms, to 
            deliver fast, reliable access to genuine medication. 
            At launch, over 7,000 users onboarded, ₦2M+ revenue 
            generated, and top pharma vendors integrated. Streamlined 
            onboarding increased monthly orders by 20%."
            impact={impactList}
            images={projectImages}
            testimonialText="
            Udinna transformed how we approached digital healthcare. 
            Their design process helped us simplify a complex 
            ecosystem; from vendors to patients into one seamless 
            experience. The results spoke for themselves: faster 
            adoption, higher engagement, and real revenue impact.
            "
            testimonialClient="Anulika Anietie"
            testimonialClientRole="
            Product Manager, Pharma Products, Sterling Bank PLC.
            "
            nextProjectName="HealthBanc"
            nextProjectLink="/projects/healthbanc"
        />
    );
}