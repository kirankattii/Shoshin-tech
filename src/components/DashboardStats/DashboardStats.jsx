import styles from './dashboardStats.module.css'
import { dashboard_stats, graphStats } from '../../assets/assets'
import { motion } from 'framer-motion'

const DashboardNumbers = () => {
  return (
    <div className={styles.dashboardNumbers}>
      {
        dashboard_stats.map((stats, index) => (
          <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ background: stats.color }} className={styles.numbers} key={index} >
            <h2>{stats.title}</h2>
            <h1>{stats.no}</h1>
            <p style={{ color: stats.textcolor }}>{stats.desc}</p>
          </motion.div>
        ))
      }
    </div>
  )
}



const DashboardGraph = () => {
  return (
    <div className={styles.dashboardGraph}>
      {graphStats.map((item, index) => (
        <motion.div
          initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} key={index} className={styles.graphs} >
          <div className={styles.leftGraph}>
            <h2>{item.title}</h2>
            <h1>{item.total}</h1>
            <p>
              <span>{item.men}</span>
              <span>{item.women}</span>
            </p>
          </div>

          <div className={styles.rightGraph}>
            <img src={item.img} alt="" />
            <p>+{item.percent}% Past Month</p>
          </div>

        </motion.div>
      ))}
    </div>
  )
}

export const DashboardStats = () => {
  return (
    <div className={styles.dashboardStats}>
      <DashboardNumbers />
      <DashboardGraph />
    </div>
  )
}


export default DashboardStats