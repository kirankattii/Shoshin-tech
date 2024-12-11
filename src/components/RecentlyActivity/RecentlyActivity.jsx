import styles from './RecentlyActivity.module.css'
import { motion } from 'framer-motion'

const RecentlyActivity = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={styles.container}>
      <h1>Recently Activity</h1>
      <div className={styles.content}>
        <span>10.40 AM, Fri 10 Sept 2021</span>
        <h2>You Posted a New Job</h2>
        <p>Kindly check the requirements and terms of work and make sure everything is right.</p>
        <div className={styles.footer}>
          <p>Today you makes 12 Activity
          </p>
          <button>See All Activity</button>
        </div>
      </div>
    </motion.div>
  )
}

export default RecentlyActivity
