import { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './styles/Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
} 