import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
}

const mainNavItems: NavItem[] = [
  { name: 'Movies' },
  { name: 'Stream' },
  { name: 'Events' },
  { name: 'Plays' },
  { name: 'Sports' },
  { name: 'Activities' },
];

const secondaryNavItems: NavItem[] = [
  { name: 'ListYourShow' },
  { name: 'Corporates' },
  { name: 'Offers' },
  { name: 'Gift Cards' },
];

const CategoryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Activities');

  return (
    <div className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-12">
        <nav className="flex items-center gap-6 overflow-x-auto pb-2">
          {mainNavItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                'text-sm font-medium transition-colors whitespace-nowrap',
                activeTab === item.name ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <nav className="hidden md:flex items-center gap-6">
          {secondaryNavItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CategoryTabs;
