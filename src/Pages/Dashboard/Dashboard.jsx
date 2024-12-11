import styles from './dashboard.module.css'
import DashboardStats from '../../components/DashboardStats/DashboardStats'
import Annuncements from '../../components/Annuncements/Annuncements'
import RecentlyActivity from '../../components/RecentlyActivity/RecentlyActivity'
import UpcomingSchedule from '../../components/UpcomingSchedule/UpcomingSchedule'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.dashboardContent}>
        <div className={styles.leftContent}>
          <DashboardStats />
          <Annuncements />
        </div>
        <div className={styles.rightContent}>
          <RecentlyActivity />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
