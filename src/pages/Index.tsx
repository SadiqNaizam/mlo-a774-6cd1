import React from 'react';

import CardGrid from '../components/Dashboard/CardGrid';
import CategoryTabs from '../components/Dashboard/CategoryTabs';
import FilterTags from '../components/Dashboard/FilterTags';
import SidebarNav from '../components/Dashboard/SidebarNav';
import TopHeader from '../components/Dashboard/TopHeader';

/**
 * The main Event Discovery Page.
 * 
 * This page assembles the primary components of the user interface:
 * - A sticky header with top navigation and category tabs.
 * - A two-column main content area featuring a filter sidebar and a grid of activity cards.
 * The layout is responsive, collapsing to a single column on smaller screens.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
        <TopHeader />
        <CategoryTabs />
      </header>

      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-6">
          <aside className="hidden lg:block lg:col-span-1">
            <SidebarNav />
          </aside>

          <main className="lg:col-span-4">
            <div className="flex flex-col gap-6">
              <FilterTags />
              <CardGrid />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
