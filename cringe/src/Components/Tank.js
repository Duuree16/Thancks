import styles from './designs/design.module.css'
import tankImg from '../imgs/tank.png'
import { useEffect, useState } from 'react'

export const Tank = () => {
    const [posX, setPosX] = useState(5)
    const [posY, setPosY] = useState(10)
    const [direction, setDirection] = useState('')
    const [look, setLook] = useState('')
    const velocity = 0.25
    const keys = {
        a: false,
        s: false,
        d: false,
        w: false,
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKey, true)
        document.addEventListener('keyup', handleKeyUp, true)
        const interval = setInterval(() => {
            switch (direction) {
                case 'up':
                    setPosY(prev => prev - velocity)
                    break
                case 'down':
                    setPosY(prev => prev + velocity)
                    break
                case 'right':
                    setPosX(prev => prev - velocity)
                    break
                case 'left':
                    setPosX(prev => prev + velocity)
                    break
                case '':
                    break
            }
        }, 100)
        return () => {
            clearInterval(interval)
        }
    }, [direction])
    const handleKey = (e) => {
        if (e.key === 'w') {
            setDirection('up')
            setLook('up')
            keys.w = true
        }
        if (e.key === 's') {
            setDirection('down')
            setLook('down')
            keys.s = true
        }
        if (e.key === 'a') {
            setDirection('right')
            setLook('right')
            keys.a = true
        }
        if (e.key === 'd') {
            setDirection('left')
            setLook('left')
            keys.d = true
        }

    }

    const handleKeyUp = (e) => {
        if (e.key === 'w') {
            keys.w = false
        }
        if (e.key === 's') {
            keys.s = false
        }
        if (e.key === 'a') {
            keys.a = false
        }
        if (e.key === 'd') {
            keys.d = false
        }
        if (
            !keys.w &&
            !keys.a &&
            !keys.s &&
            keys.d
        ) {
            setDirection('')
        }
    }
    return <><img src={tankImg} className={[styles.tank, styles[look]].join(' ')} style={{ top: `${posY * 50}px`, left: `${posX * 50}px` }} /></>
}