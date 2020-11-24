import React, { Fragment, useState } from 'react'
import styles from './Section3.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import NTDF from '../../assets/projects/NTDF.png'
import VR from '../../assets/projects/VR.png'
import Portfolio from '../../assets/projects/portfolio.png'
import SAU from '../../assets/projects/SAU.png'
import Bot from '../../assets/projects/bot.png'
import Server from '../../assets/projects/server.png'

const Section3 = (props) => {

    SwiperCore.use([Navigation]);

    const [page, setPage] = useState(0)
    let Cards = [
        <ProjectCard key={0} active={page === 0} background={NTDF} centered={true} title="Nature TD: Forest" description="3D Unity Game" modal={null} />,
        <ProjectCard key={1} active={page === 1} background={SAU} centered={false} title="Steam Achievement Unlocker" description="JavaScript Desktop App" modal={null} />,
        <ProjectCard key={2} active={page === 2} background={VR} centered={true} title="Vertical Runner" description="2D Unity Game" modal={null} />,
        <ProjectCard key={3} active={page === 3} background={Server} centered={false} title="Web Server in Node.js" description="HTTP Server With Authentication And Tokens" modal={null} />,
        <ProjectCard key={4} active={page === 4} background={Portfolio} centered={true} title="Portfolio Website in React" description="My Portfolio Website Built With React" modal={null} />,
        <ProjectCard key={5} active={page === 5} background={Bot} centered={true} title="Discord bot in Node.js" description="Discord Bot Using Discord.js Library" modal={null} />
    ]

    return (
        <Fragment>
            <div className={styles.Projects}>
                <div className={styles.Pagination}>{(page + 1).toString()}/6</div>
                <div>
                    <Swiper style={{width: "100vw", pointerEvents: "all"}}
                        slidesPerView={2} preventInteractionOnTransition
                        navigation loop centeredSlides
                        onSlideChange={(swiper) => {setPage(swiper.realIndex)}}>
                        {Cards.map((el, i) => (<SwiperSlide key={i}>{el}</SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
            <SectionTitle show={props.currentSection === 3 ? true : false} textLeft="My&nbsp;" textRight="Projects" />
        </Fragment>
    )
}

export default Section3