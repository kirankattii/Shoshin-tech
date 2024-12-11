import { assets } from '../../assets/assets'
import styles from './sidebar.module.css'
import { Grid, UserPlus, Calendar, Users, Building, Headphones, Settings, X } from 'lucide-react';
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
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </motion.li>
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
