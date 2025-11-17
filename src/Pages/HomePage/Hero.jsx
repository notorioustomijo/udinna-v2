import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import sterling from '../../assets/sterling-small.svg';
import frutta from '../../assets/frutta-small.svg';
import washryteSmall from '../../assets/washryte-small.svg';
import delightSmall from '../../assets/delight-vet-small.svg';
import skydd from '../../assets/skydd-small.svg';
import landGirl from '../../assets/landgirl-small.svg';
import rightArrow from '../../assets/right-arrow.svg';
import landGirlflyer from '../../assets/landgirl-flyer.webp';
import ceegold from '../../assets/ceegold-logo.webp';
import washryteflyer from '../../assets/washryte-flyer.webp';
import fruttapost from '../../assets/frutta-post.webp';
import delightvet from '../../assets/delightvet-post.webp';

import style from './Hero.module.css';

export default function Hero() {

    return (
        <section className={style.heroSection}>

            <div className={style.heroText}>
                <h1>Crafting dream brands and digital experiences</h1>
                <a 
                    href="https://calendly.com/udinnadrive/30min"
                    className="btn btn-pry"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>Start a Project</p>
                </a>
            </div>
            <div className={style.iframeContainer}>
                <iframe 
                    loading="lazy" 
                    title="Gumlet video player" 
                    src="https://play.gumlet.io/embed/68c40c2…?background=true&autoplay=true&loop=true&disableControls=true" 
                    style={{border: 'none', height: '100%', width: '100%'}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;" bis_size={'{"x":0,"y":56,"w":878,"h":493,"abs_x":0,"abs_y":56}'} 
                    bis_id="fr_7acb4fu615snynsyntpkie" bis_depth="0" bis_chainid="1"
                >
                </iframe>
            </div>
            <div className={style.companiesSection}>
                <h2>Companies we have worked with</h2>
            </div>
        </section>
    )
}