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
        <ProjectCard key={0} active={page === 0} background={SAU} centered={false} title="Steam Achievement Unlocker" description="JavaScript Desktop App" info="Steam Achievement Unlocker is a JavaScript desktop app built with electron framework. it allows idling in steam games and unlocking any achievements in them." buttons={[{name: "Play Demo", func: () => console.log("x"), url: "https://google.com"}]} modal={null} />,
        <ProjectCard key={1} active={page === 1} background={NTDF} centered={true} title="Nature TD: Forest" description="3D Unity Game" info="Nature TD: Forest is a 3D, First Person, Tower Defense Game Made In Unity. The Game Has many modular Scripts that make adding new features and levels very easy. There are currently 2 playable levels (Tutorial & Level 1) and 9 different towers. This is my first 3D Unity game. I feel like i can write any unity game now, with the experience i got from writing this one." buttons={[{name: "Play Demo", url: null, func: () => console.log("x")}, {name: "Github", url: "https://github.com", func: null}]} modal={null} />,
        <ProjectCard key={2} active={page === 2} background={VR} centered={true} title="Vertical Runner" description="2D Unity Game" info="Vertical Runner is a simple 2D infinite runner game. The pace speeds up over time to make is difficult and reflex-based. this game was one of my first C#/Unity projects. It helped me improve my programming skills and prepared me for bigger Unity projects" buttons={[{name: "Play Demo", func: () => console.log("x"), url: "https://google.com"}]} modal={null} />,
        <ProjectCard key={3} active={page === 3} background={Server} centered={false} title="Web Server in Node.js" description="HTTP Server With Authentication And Tokens" info="3D GAME" buttons={[{name: "Play Demo", func: () => console.log("x"), url: "https://google.com"}]} modal={null} />,
        <ProjectCard key={4} active={page === 4} background={Portfolio} centered={true} title="Portfolio Website in React" description="My Portfolio Website Built With React" info="3D GAME" buttons={[{name: "Play Demo", func: () => console.log("x"), url: "https://google.com"}]} modal={null} />,
        <ProjectCard key={5} active={page === 5} background={Bot} centered={true} title="Discord bot in Node.js" description="Discord Bot Using Discord.js Library" info="3D GAME" buttons={[{name: "Play Demo", func: () => console.log("x"), url: "https://google.com"}]} modal={null} />
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