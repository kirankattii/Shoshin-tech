import { Menu, Search, X } from 'lucide-react'
import { assets } from '../../assets/assets'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.leftContent}>
        <Menu className={styles.menuIcon} />
        <div className={styles.inputbox}>
          <input type="text" placeholder='Search' />
          <Search className={styles.searchIcon} size={20} strokeWidth={3} />
        </div>
        <Search className={styles.searchIcon2} size={22} strokeWidth={3} />
      </div>
      <div className={styles.rightContent}>
        <img src={assets.notification_icon} alt="notification" />
        <img src={assets.chartBox_icon} alt="chartbox" />
        <div className={styles.userInfo}>
          <img className={styles.profileIcon} src={assets.profile_icon} alt="user profile" />
          <span>Admirra Jhon</span>
          <img className={styles.arrowDown} src={assets.arrowDown_icon} alt="arrow down" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
