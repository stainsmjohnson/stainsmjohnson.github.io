import React from 'react'
import Carosel from '../../components/Carosel'
import './style.css'

import improve_core_image from '../../assets/improve_core.jpg'
import learn_new_image from '../../assets/learn_new.jpg'
import physical_image from '../../assets/physical.jpg'
import prevent_image from '../../assets/prevent.jpg'
import quality_life_image from '../../assets/quality_life.jpg'
import rehab_image from '../../assets/rehab.jpg'
import speed_recovery_image from '../../assets/speed_recovery.jpg'
import sports_image from '../../assets/sports.jpg'
import stay_strong_image from '../../assets/stay_strong.jpg'
import stretch_image from '../../assets/stretch.jpg'
import wellness_image from '../../assets/wellness.jpg'
import balance_image from '../../assets/balance.jpg'
import be_active_image from '../../assets/be_active.jpg'
import be_flexible_image from '../../assets/be_flexible.jpg'
import be_positive_image from '../../assets/be_positive.png'
import body_mechanics_image from '../../assets/body_mechanics.jpg'
import education_image from '../../assets/education.jpg'
import focus_image from '../../assets/focus.jpg'
import have_fun_image from '../../assets/have_fun.jpg'

const HomeScreen = () => {

    const SLOGANS = [
        {id:1,title:'BE ACTIVE', icon:be_active_image},
        {id:2,title:'STRETCH',icon:stretch_image},
        {id:3,title:'STAY STRONG',icon:stay_strong_image},
        {id:4,title:'BE FLEXIBILE', icon: be_flexible_image},
        {id:5,title:'IMPROVE WELLNESS',icon:wellness_image},
        {id:6,title:'GET QUALITY LIFE',icon:quality_life_image},
        {id:7,title:'IMPROVE BALANCE',icon:balance_image},
        {id:8,title:'FOCUS ON MOVEMENTS',icon: focus_image},
        {id:9,title:'DO SPORTS',icon:sports_image},
        {id:10,title:'EDUCATION',icon:education_image},
        {id:11,title:'LEARN NEW',icon:learn_new_image},
        {id:12,title:'HAVE FUN',icon: have_fun_image},
        {id:13,title:'REHAB',icon:rehab_image},
        {id:14,title:'IMPROVE CORE',icon: improve_core_image},
        {id:15,title:'BE POSITIVE',icon:be_positive_image},
        {id:16,title:'PREVENT',icon:prevent_image},
        {id:17,title:'BODY MECHANICS',icon:body_mechanics_image},
        {id:18,title:'PHYSICAL HEALTH',icon:physical_image},
        {id:19,title:'SPEEDY RECOVERY',icon:speed_recovery_image},
    ]

    return (
        <div>
            <Carosel/>
            <div className="slogan-section">
                {/* <div className="slogan-heading">OUR SLOGANS</div> */}
                <div className="slogan-container">
                {SLOGANS.map(slogan => (
                    <div className="slogan">
                        <img src={slogan.icon} alt={slogan.title}/>
                        <span>{slogan.title}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default HomeScreen