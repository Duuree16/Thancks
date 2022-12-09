import styles from "./007/design.module.css"

export const Block = (props) => {
    let colors = []
    colors[2] = '#eee4da'
    colors[4] = '#ece0c8'
    colors[8] = '#f2b179'
    colors[16] = '#f59563'
    colors[32] = '#f57c5f'
    colors[64] = '#f65e3b'
    colors[128] = '#edcf73'
    colors[256] = '#edcc62'
    colors[512] = '#edc850'
    colors[1024] = '#edc53f'
    colors[2048] = '#edc22d'

    return <div className={styles.block} style={{ backgroundColor: colors[props.number], color: props.number === 2 || props.number === 4 ? '#776e65' : 'white' }}>{props.number}</div>
}