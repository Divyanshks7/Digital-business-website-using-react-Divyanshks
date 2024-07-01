import React from 'react'
import './WhoWeInvest.css'
import { whoWeInvest } from '../../data'
import {motion} from 'framer-motion'
import { containerVariants, tagVaraints, titleVaraints } from '../../animation'
const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
        <div className="container">
            <div className="wwi-container">
                {/* left side */}
                <div className="wwi-left">
                    <div className="head">
                        <motion.span
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVaraints}
                        className="tag"> Who we invest in</motion.span>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVaraints}
                        className="title"> Digital Businesses <br /> With Early Traction</motion.span>
                    </div>

                    {/* features */}
                    <div className="wwi-features">
                        {
                            whoWeInvest.map((feature,i)=> (
                                <motion.div
                                initial="offscreen"
                                 whileInView={"onscreen"}
                                 variants={containerVariants(i * 0.05 + 1)}
                                className="wwi-feature" key={i}>
                                 <span className="des">{feature.title}</span>
                                 <span className="text">{feature.des}</span>
                                 </motion.div>   
                            ))
                        }
                    </div>
                </div>

                {/* right side */}
                <div className="wwi-right">
                    <motion.img
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(0.5)}
                    src="persons.png" alt="persons" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeInvest