import style from './Services.module.css';

export default function ServiceCard({ 
    backgroundImage, 
    heading, 
    subtitle, 
    description, 
    brands 
}) {
    return (
        <div 
            className={style.service}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={style.serviceContent}>
                <h2>{heading}</h2>
                <div className={style.serviceTextContent}>
                    <p style={{fontWeight: 600}}>{subtitle}</p>
                    <p>{description}</p>
                </div>
                <div className={style.serviceBrands}>
                    <p style={{fontWeight: 600}}>Notable Brands</p>
                    <div className={style.serviceBrandLogos}>
                        {brands.map((brand, index) => (
                            <img 
                                key={index} 
                                src={brand.logo} 
                                alt={brand.alt || ''} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}