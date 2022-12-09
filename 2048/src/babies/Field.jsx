import { useEffect } from 'react'
import { useState } from 'react'
import styles from './007/design.module.css'
import { Block } from './Block'

export const Field = () => {
    const [data, setData] = useState([
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ']
    ])

    const RandomSpaceFiller = () => {
        let emptys = []
        data.forEach((self, index1) => {
            self.forEach((el, index2) => {
                if (el === ' ') {
                    emptys.push({ x: index1, y: index2 })
                }
            })
        })
        if (emptys[0]) {
            const randomIndex = Math.floor(Math.random() * emptys.length)
            const randomFiller = Math.floor(Math.random() * 2 + 1) * 2
            let copiedData = [...data]
            copiedData[emptys[randomIndex].x][emptys[randomIndex].y] = randomFiller
            setData(copiedData)
        } else {
            console.log('filled')
        }


    }
    useEffect(() => {
        RandomSpaceFiller()
        document.addEventListener('keydown', RandomSpaceFiller, true)
    }, [])


    return <div className={styles.field}>
        {data.map(self =>
            self.map((el, ind) => <Block number={el} key={`number: ${ind} inside: ${el}`} />)
        )}
    </div>
}