import { useState } from 'react'
import './Post.css'
// import styles from './Post.module.css'

const Post = ({ title, body }) => {

  const [isDark, setIsDark] = useState(false)

  return (
    <div className='Post mb'>
      <div className={`card ${ isDark ? 'dark' : ''}`}>
      {/* <div className={styles.card}> */}
        <h2>{ title }</h2>
        <p>{ body }</p>
        <button onClick={() => setIsDark(theme => !theme)}>Change to dark theme</button>
        {/* <button className={styles.btn} onClick={() => setIsDark(theme => !theme)}>Change to dark theme</button> */}
      </div>
    </div>
  )
}

export default Post