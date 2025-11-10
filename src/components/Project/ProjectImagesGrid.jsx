import styles from './Project.module.css';

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
                        <img 
                            src={item.src} 
                            alt={`Project shot ${index + 1}`}
                            className={styles.projectImg}
                        />
                    </div>
                );
            })}
        </div>
    );
}