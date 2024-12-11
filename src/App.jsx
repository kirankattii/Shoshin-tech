import styles from './app.module.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <div className={styles.appContainer}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.navbar}>
          <Navbar />
        </div>
      </div>

      <div className={styles.main}>
        <Dashboard />
      </div>
    </div>
  )
}

export default App
