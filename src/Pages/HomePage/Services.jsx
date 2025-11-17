import axon from '../../assets/axon.svg';
import amazon from '../../assets/amazon.svg';
import atmos from '../../assets/atmos.svg';
import brandingBg from '../../assets/branding-bg.jpg';
import marketingBg from '../../assets/digitalmarketing.jpg';
import designBg from '../../assets/design.jpg';
import socialBg from '../../assets/social.jpg';
import motionBg from '../../assets/motion.jpg';
import productionBg from '../../assets/production.jpg';
import trainingBg from '../../assets/training.jpg';
import ServiceCard from './ServiceCard';
import style from './Services.module.css';

export default function Services() {
    const servicesData = [
        {
            backgroundImage: brandingBg,
            heading: 'Branding & Design',
            subtitle: 'The Muzzz',
            description: 'We help brands grow through data-driven campaigns - social media, SEO, influencer marketing, and performance ads that convert awareness to revenue.',
            brands: [
                { logo: axon, alt: 'Axon' },
                { logo: amazon, alt: 'Amazon' },
                { logo: atmos, alt: 'Atmos' }
            ]
        },
        {
            backgroundImage: marketingBg,
            heading: 'Digital Marketing & Growth',
            subtitle: 'The Muzzz',
            description: 'We help brands grow through data-driven campaigns - social media, SEO, influencer marketing, and performance ads that convert awareness to revenue.',
            brands: [
                { logo: axon, alt: 'Axon' },
                { logo: amazon, alt: 'Amazon' },
                { logo: atmos, alt: 'Atmos' }
            ]
        },
        {
            backgroundImage: designBg,
            heading: 'Product & UX/UI Design',
            subtitle: 'The Muzzz',
            description: 'We design intuitive digital experiences, from apps to dashboards - focused on usability, aesthetics & business impact.',
            brands: [
                { logo: axon, alt: 'Axon' },
                { logo: amazon, alt: 'Amazon' },
                { logo: atmos, alt: 'Atmos' }
            ]
        },
        {
            backgroundImage: socialBg,
            heading: 'Social Media Management',
            subtitle: 'The Muzzz',
            description: 'We help brands grow communities, engage audiences, and convert followers into loyal customers through content and storytelling.',
            brands: [
                { logo: axon, alt: 'Axon' },
                { logo: amazon, alt: 'Amazon' },
                { logo: atmos, alt: 'Atmos' }
            ]
        },
        {
            backgroundImage: socialBg,
            heading: 'No-Code Web & App Development',
            subtitle: 'The Muzzz',
            description: 'Using platforms like Webflow, Bubble, and FlutterFlow, we build powerful, scalable digital products — fast and affordably.',
            brands: [
                { logo: axon, alt: 'Axon' },
                { logo: amazon, alt: 'Amazon' },
                { logo: atmos, alt: 'Atmos' }
            ]
        },
        {
            backgroundImage: motionBg,
            heading: 'Video & Motion Design',
            subtitle: 'The Muzzz',
            description: 'We tell stories through compelling motion graphics, explainer videos, product launch and brand animations that bring ideas to life.',
            brands: [
                { logo: axon, alt: 'Axon' },
                { logo: amazon, alt: 'Amazon' },
                { logo: atmos, alt: 'Atmos' }
            ]
        },
        {
            backgroundImage: productionBg,
            heading: 'Creative Content Production',
            subtitle: 'The Muzzz',
            description: 'From photography to short-form videos, we create content that humanizes your brand and connects emotionally with your audience.',
            brands: [
                { logo: axon, alt: 'Axon' },
                { logo: amazon, alt: 'Amazon' },
                { logo: atmos, alt: 'Atmos' }
            ]
        },
        {
            backgroundImage: trainingBg,
            heading: 'Consulting & Training',
            subtitle: 'The Muzzz',
            description: 'We empower startups and teams with the knowledge, systems, and creative direction to grow and scale effectively.',
            brands: [
                { logo: axon, alt: 'Axon' },
                { logo: amazon, alt: 'Amazon' },
                { logo: atmos, alt: 'Atmos' }
            ]
        },
    ];

    return (
        <section className={style.serviceSection} id="services">
            <div className={style.serviceSectionHeader}>
                <h2>Services</h2>
                <a 
                    href="https://calendly.com/udinnadrive/30min"
                    className={style.navLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Start a Project
                </a>
            </div>
            <div className={style.serviceList}>
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        backgroundImage={service.backgroundImage}
                        heading={service.heading}
                        subtitle={service.subtitle}
                        description={service.description}
                        brands={service.brands}
                    />
                ))}
            </div>
        </section>
    );
}