import { Ellipsis } from 'lucide-react'
import { upcomingSchedule } from '../../assets/assets'
import styles from './upcomingSchedule.module.css'
import { motion } from 'framer-motion'

const UpcomingSchedule = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={styles.container}>
      <div className={styles.header}>
        <h2>Upcoming Schedule</h2>
        <select  >
          <option value="">Today, 13 Sep 2021</option>
          <option value="">Today, 13 Sep 2021</option>
          <option value="">Today, 13 Sep 2021</option>
        </select>
      </div>
      <div className={styles.upcomingScheduleContainer}>
        {upcomingSchedule.map((item, index) => (
          <div key={index} className={styles.schedules}>
            <span className={styles.sections}>{item.section}</span>
            <ul>
              {item.items.map((item, index) => (
                <li key={index}>
                  <div>
                    <p>{item.name}</p>
                    <span>{item.date}</span>
                  </div>
                  <Ellipsis className={styles.options} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button>Create New Schedule</button>
    </motion.div>
  )
}

export default UpcomingSchedule
