import styles from './Project.module.css';

export default function ProjectTestimonial({
    testimonialText,
    testimonialClient,
    testimonialClientRole
}) {
    return (
        <section className={styles.projectTestimonial}>
            <p className={styles.testimonialText}>{testimonialText}</p>

            <div className={styles.testimonialClient}>
                <p>{testimonialClient}</p>
                <p>{testimonialClientRole}</p>
            </div>
        </section>
    )
}