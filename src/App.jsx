import styles from './app.module.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { useState } from 'react'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.navbar}>        <Navbar />
        </div>
      </div>

      <div className={styles.main}>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
