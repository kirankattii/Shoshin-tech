import { Ellipsis } from 'lucide-react'
import { announcement, assets } from '../../assets/assets'
import styles from './Annuncements.module.css'
import { motion } from 'framer-motion'

const Annuncements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Annuncements</h2>
        <select>
          <option value="all">Today, 13 Sep 2021</option>
          <option value="all">Today, 13 Sep 2021</option>
          <option value="all">Today, 13 Sep 2021</option>
        </select>
      </div>
      <div className={styles.announcementContainer}>
        {announcement.map((item, index) => (
          <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: index * 0.2 }} key={index} className={styles.announcement}>
            <div className={styles.left}>
              <p>{item.title}</p>
              <span>{item.date}</span>
            </div>
            <div className={styles.right}>
              <img src={assets.darkPing_icon} alt="" />
              <Ellipsis />
            </div>
          </motion.div>
        ))}
      </div>
      <button >
        See All Announcement
      </button>
    </div>
  )
}

export default Annuncements
