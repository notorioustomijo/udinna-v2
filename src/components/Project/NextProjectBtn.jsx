import styles from './Project.module.css';

export default function NextProjectBtn({
    nextProjectName,
    nextProjectLink
}) {
    return (
        <div className={styles.nextProjectBtnContainer}>
            <a 
                href={nextProjectLink} 
                className={styles.nextProjectBtn}
            >
                <span className={styles.nextProjectBtnText}>View Next Project ({nextProjectName})</span>
                <div className={styles.nextProjectArrowWrapper}>
                    <svg className={`${styles.arrow} ${styles['arrow-1']}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    <svg className={`${styles.arrow} ${styles['arrow-2']}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            </a>
        </div>
    )
}