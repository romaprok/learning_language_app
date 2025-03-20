// Page Component implementing multiple patterns
import React, { useEffect, useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useLanguageStore } from '../../../stores/LanguageStore';
import { ComponentFactory } from '../../../core/patterns/factory/ComponentFactory';
import { useAsync } from '../../../hooks/useAsync';
import { Layout } from '../../shared/components/Layout';
import './Home.scss';

// Custom Hook Pattern - Data Fetching
const useHomeData = () => {
  // Custom Hook implementation
  return useAsync(async () => {
    const response = await fetch('https://api.example.com/home-data');
    return response.json();
  });
};

// Interface Segregation Principle
interface HomeProps {
  initialLanguage?: string;
}

// Observer Pattern & Container Component Pattern
export const Home: React.FC<HomeProps> = observer(({ initialLanguage }) => {
  // State Management Pattern
  const [activeSection, setActiveSection] = useState<'welcome' | 'features'>('welcome');
  const languageStore = useLanguageStore();

  // Effect Pattern
  useEffect(() => {
    if (initialLanguage) {
      languageStore.setLanguage(initialLanguage);
    }
  }, [initialLanguage, languageStore]);

  // Custom Hook Usage
  const { data, loading, error } = useHomeData();

  // Memoization Pattern
  const handleSectionChange = useCallback((section: 'welcome' | 'features') => {
    setActiveSection(section);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) throw error; // Error Boundary will catch this

  // Factory Pattern Usage
  const activeComponent = ComponentFactory.createComponent(activeSection, {
    data,
    onSectionChange: handleSectionChange
  });

  // Composition Pattern
  return (
    <Layout>
      <div className="home-page">
        <nav className="section-nav">
          <button 
            onClick={() => handleSectionChange('welcome')}
            className={activeSection === 'welcome' ? 'active' : ''}
          >
            Welcome
          </button>
          <button 
            onClick={() => handleSectionChange('features')}
            className={activeSection === 'features' ? 'active' : ''}
          >
            Features
          </button>
        </nav>
        {activeComponent}
      </div>
    </Layout>
  );
});

// Default Export Pattern
export default Home; 