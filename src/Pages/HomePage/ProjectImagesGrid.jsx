import styles from './Projects.module.css';

export default function ProjectImagesGrid({ images }) {
    return (
        <div className={styles.projectImagesGrid}>
            {images.map((item, index) => {
                return (
                    <div
                            key={index}
                            className={`${styles.projectImageWrapper} ${styles[item.size]}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                        <a href={item.url}>
                            <img 
                                src={item.src} 
                                alt={item.title || `Project shot ${index + 1}`}
                                className={styles.projectImg}
                            />
                            <div className={styles.imageOverlay}>
                                <div className={styles.overlayContent}>
                                    <div className={styles.tagContainer}>
                                        {item.tags && item.tags.map((tag, tagIndex) => (
                                            <div key={tagIndex} className={styles.tag}>
                                                <p>{tag}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.projectDesc}>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                );
            })}
        </div>
    );
}