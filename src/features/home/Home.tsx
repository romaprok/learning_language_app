import { WelcomeSection } from './components/WelcomeSection';
import { FeaturesPreview } from './components/FeaturesPreview';
import styles from './styles/Home.module.scss';

export function Home() {
  return (
    <div className={styles.home}>
      <WelcomeSection />
      <FeaturesPreview />
    </div>
  );
} 