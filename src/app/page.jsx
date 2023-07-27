import Image from 'next/image'
import styles from './page.module.css'
import HeroImg from "public/hero.png"
import { Button } from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portofolio" text="See Our Works" />
      </div>
      <div className={styles.item}></div>
        <Image src={HeroImg} alt='hero image'  className={styles.img}/>
    </div>
  )
}