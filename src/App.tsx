import './styles/global.scss'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>React TypeScript App</h1>
      </header>
      <main className={styles.appMain}>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </main>
    </div>
  )
}

export default App
