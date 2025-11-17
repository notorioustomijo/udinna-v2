import styles from './PortfolioFilter.module.css';

export default function PortfolioFilter({ 
    filters, 
    activeFilter, 
    onFilterChange 
}) {
    return (
        <div className={styles.filterList}>
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={`${styles.filter} ${
                        activeFilter === filter 
                            ? styles.activeFilter 
                            : styles.inactiveFilter
                    }`}
                    onClick={() => onFilterChange(filter)}
                >
                    <h4>{filter}</h4>
                </button>
            ))}
        </div>
    );
}