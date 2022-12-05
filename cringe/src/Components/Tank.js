import styles from './designs/design.module.css'
import tankImg from '../imgs/tank.png'
import { useEffect, useState } from 'react'

export const Tank = () => {
    const [posX,setPosX] = useState(5)
    const [posY,setPosY] = useState(10)
    const [velY,setVelY] = useState(-0)
    const [velX,setVelX] = useState(-0)

    useEffect(()=>{
        document.addEventListener('keydown',handleKey,true)
        setInterval(()=>{
            setPosX(prev => prev + velX)
            setPosY(prev => prev + velY)
            console.log(velX,velY)
        },1000)
    },[])
    const handleKey = (e) => {
        let vel1 = 0
        let vel2 = 0
        if(e.key === 'w'){
            vel1 = -0.5
        }
        if(e.key === 's'){
            vel1 = 0.5
        }
        if(e.key === 'a'){
            vel2 = -0.5
        }
        if(e.key === 'd'){
            vel2 = 0.5
        }
        setVelX(vel2)
        setVelY(vel1)
        

    }
    // eslint-disable-next-line jsx-a11y/alt-text
    return <><img src={tankImg} className={styles.tank} style={{top:`${posY * 50}px`,left:`${posX * 50}px`}}/></>
}