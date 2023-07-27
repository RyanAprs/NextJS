import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { Button } from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true} alt='about image' className={styles.img}/>
        <div className={styles.imgText} >
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Hnadcrafting award wining digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            At obcaecati corporis dolorum quod saepe enim aliquam 
            laborum recusandae fuga perspiciatis fugiat odit facere 
            fugit aut voluptate ab sed quae id, quos molestias! Vero quaerat 
            saepe mollitia ad tenetur perspiciatis ipsam.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Explicabo, dolorem. Vitae asperiores quasi, eligendi saepe 
            placeat consequatur, neque aliquam magni dolorum ea at. Quis 
            nemo alias beatae rerum. Vel voluptates, deserunt sint ipsa 
            fugiat id mollitia ducimus ipsum dolores velit?
            </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Harum dignissimos eaque esse eveniet, numquam quod nobis. 
            Sit neque voluptatibus perspiciatis officiis quasi labore 
            blanditiis reprehenderit autem, eos magni minus quod ex eum. 
            Quo officiis quae aut laborum dolorem at voluptatem
          <br />
          <br /> - Dynamic Websites
          <br />
          <br /> - Fast and Handy
          <br />
          <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About