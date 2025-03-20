import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useLanguageStore } from '../../../../stores/LanguageStore';
import './WelcomeSection.scss';

interface WelcomeSectionProps {
  title?: string;
}

// Implementing Observer pattern through MobX
export const WelcomeSection: React.FC<WelcomeSectionProps> = observer(({ title = 'Welcome to Language Learning' }) => {
  const languageStore = useLanguageStore();
  const [isVisible, setIsVisible] = useState(false);

  // Component Lifecycle Hook Pattern
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <section className={`welcome-section ${isVisible ? 'visible' : ''}`}>
      <h1>{title}</h1>
      <p>Current Language: {languageStore.currentLanguage}</p>
      <button onClick={() => languageStore.setLanguage('Spanish')}>
        Switch to Spanish
      </button>
    </section>
  );
}); 