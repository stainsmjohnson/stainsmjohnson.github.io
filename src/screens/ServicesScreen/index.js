import React from 'react'
import './style.css'

import bells_palsy from '../../assets/services/bells-palsy.jpg'
import bppv_vertigo from '../../assets/services/bppv_vertigo.png'
import head_ache from '../../assets/services/head_ache.png'
import joint_pain from '../../assets/services/joint_pain.png'
import paranthesis from '../../assets/services/paranthesis.jpg'
import post_operation from '../../assets/services/post_operation.png'
import rehab from '../../assets/services/rehab.png'
import sports_injuries from '../../assets/services/sports_injuries.jpg'
import sprain from '../../assets/services/sprain.jpg'
import toricolliss from '../../assets/services/toricollis.jpg'
import urinary_infection from '../../assets/services/urinary_infection.png'

const HomeScreen = () => {
    const services = [
        {id:1,title:'JOINT and MUSCULAR PAINS', icon: joint_pain},
        {id:2,title:'CERVICOGENIC AND TENSION HEAD ACHES',icon: head_ache},
        {id:4,title:'URINARY AND BOWEL INCONTINENCE', icon: urinary_infection},
        {id:5,title:'BPPV– VERTIGO', icon: bppv_vertigo},
        {id:6,title:'SPORTS INJURIES',icon:sports_injuries},
        {id:7,title:'REHAB AFTER JOINT AND MUSCLE INJURIES', icon:rehab},
        {id:8,title:'SPRAINS AND STRAINS', icon: sprain},
        {id:9,title:'TORICOLLIS', icon: toricolliss},
        {id:10,title:'BELLS PALSY',icon:bells_palsy},
        {id:11,title:'PARALYSIS AFTER STROKE',icon: paranthesis},
        {id:12,title:'POST OPERATIVE PHYSICAL', icon: post_operation},
    ]
    return (
        <div>
            <h1 className="service-heading">OUR SERVICES</h1>
            <p className="service-para">WE PROVIDE EXCELLENT PHYSICAL THERAPY SERVICES FOR THE INDIVIDUALS WHO ARE SUFFERING FROM:</p>
            <div className="services-container">
                {services.map(service => (
                    <div key={service.id} className="service-item">
                        <img src={service.icon}/>
                        <span>{service.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default HomeScreen