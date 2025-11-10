import styles from './Project.module.css';

export default function ProjectContext({ 
    client, 
    sector, 
    country, 
    year, 
    scope,
    projectTitle,
    challengeDesc,
    solutionEngineered,
    impact
}) {
    return (
        <div className={styles.projectContext}>
            <div className={styles.projectInfo}>
                <div className={styles.projectBlurb}>
                    <p className={styles.projectSubTitle}>Client</p>
                    <p className={styles.projectBlurbText}>{client}</p>
                </div>
                <div className={styles.projectBlurb}>
                    <p className={styles.projectSubTitle}>Sector</p>
                    <p className={styles.projectBlurbText}>{sector}</p>
                </div>
                <div className={styles.projectBlurb}>
                    <p className={styles.projectSubTitle}>Country/Target Demographics</p>
                    <p className={styles.projectBlurbText}>{country}</p>
                </div>
                <div className={styles.projectBlurb}>
                    <p className={styles.projectSubTitle}>Year</p>
                    <p className={styles.projectBlurbText}>{year}</p>
                </div>
                <div className={styles.projectBlurb}>
                    <p className={styles.projectSubTitle}>Scope of Work</p>
                    <p className={styles.projectBlurbText}>{scope}</p>
                </div>
            </div>

            <div className={styles.projectOverview}>
                <h2>{projectTitle}</h2>
                <div className={styles.projectSubsection}>
                    <p className={styles.projectSubTitle}>The Challenges</p> 
                    <p className={styles.subtitleDesc}>{challengeDesc}</p>
                </div>
                <div className={styles.projectSubsection}>
                    <p className={styles.projectSubTitle}>Solution Engineered</p> 
                    <p className={styles.subtitleDesc}>{solutionEngineered}</p>
                </div>
                {impact && <div className={styles.projectSubsection}>
                    <p className={styles.projectSubTitle}>Impact</p> 
                    <ul>
                        {impact.map((item, index) => (
                            <li key={index} className={styles.subtitleDesc}>{item}</li>
                        ))}
                    </ul>
                </div>}
            </div>
        </div>
    );
}