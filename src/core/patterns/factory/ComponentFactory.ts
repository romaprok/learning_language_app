// Factory Pattern - Creates components based on type
import React from 'react';
import { WelcomeSection } from '../../features/home/components/WelcomeSection/WelcomeSection';
import { FeaturesPreview } from '../../features/home/components/FeaturesPreview/FeaturesPreview';

export type ComponentType = 'welcome' | 'features';

export class ComponentFactory {
  static createComponent(type: ComponentType, props: any = {}): React.ReactElement {
    switch (type) {
      case 'welcome':
        return <WelcomeSection {...props} />;
      case 'features':
        return <FeaturesPreview {...props} />;
      default:
        throw new Error(`Unknown component type: ${type}`);
    }
  }
} 