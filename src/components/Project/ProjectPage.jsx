import Navigation from '../Navigation/Navigation';
import ProjectContext from './ProjectContext';
import ProjectImagesGrid from './ProjectImagesGrid';
import ProjectTestimonial from './ProjectTestimonial';
import NextProjectBtn from './NextProjectBtn';
import Footer from '../Footer/Footer';
import styles from './Project.module.css';

export default function ProjectPage({ 
    title, 
    metaDescription, 
    heroTitle, 
    heroImage,
    client,
    sector,
    country,
    year,
    scope,
    projectTitle,
    challengeDesc,
    solutionEngineered,
    impact, 
    images,
    testimonialText,
    testimonialClient,
    testimonialClientRole,
    nextProjectName,
    nextProjectLink
}) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <div className="app-wrapper">
                <Navigation />

                <div className="projects-container">
                    <section className="project-section">
                        <div className={styles.projectHero}>
                            <h1>{heroTitle}</h1>
                            <img src={heroImage} alt="" className={styles.projectHeroImg} />
                        </div>
                        
                        <ProjectContext
                            client={client}
                            sector={sector}
                            country={country}
                            year={year}
                            scope={scope}
                            projectTitle={projectTitle}
                            challengeDesc={challengeDesc}
                            solutionEngineered={solutionEngineered}
                            impact={impact}
                        />
                        
                        <ProjectImagesGrid images={images} />
                    </section>

                </div>
                
                <ProjectTestimonial 
                    testimonialText={testimonialText}
                    testimonialClient={testimonialClient}
                    testimonialClientRole={testimonialClientRole}
                />

                <NextProjectBtn 
                    nextProjectName={nextProjectName}
                    nextProjectLink={nextProjectLink}
                />

                <Footer />
            </div>
        </>
    );
}