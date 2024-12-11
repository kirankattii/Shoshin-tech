import { assets } from '../../assets/assets'
import styles from './sidebar.module.css'
import { Grid, UserPlus, Calendar, Users, Building, Headphones, Settings } from 'lucide-react';
import { menuData } from '../../assets/assets';
import { motion } from 'framer-motion';

const iconMap = {
  Grid,
  UserPlus,
  Calendar,
  Users,
  Building,
  Headphones,
  Settings
};

// const isSmallScreen = window.innerWidth <= 1230;

const Sidebar = () => {
  return (
    <div className={styles.container}>

      <img className={styles.logo} src={assets.logo} alt="" />
      <img className={styles.logoIcon} src={assets.logo_icon} alt="" />

      <div className={styles.menu}>

        {menuData.map((section, sectionIndex) => (
          <div key={sectionIndex} className={styles.menuContainer}>
            <h4 className={styles.sections}>{section.section}</h4>
            <ul className={styles.menuLinks}>
              {section.items.map((item, itemIndex) => {
                const Icon = iconMap[item.icon]; // Dynamically map icon
                return (
                  <li
                    key={itemIndex}
                    initial={{ scale: 0.5 }} whileInView={{ scale: 0 }} transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                  >
                    <Icon size={18} className={styles.icon} />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Sidebar
