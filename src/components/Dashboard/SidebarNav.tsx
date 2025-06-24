import React from 'react';
import FilterAccordion from './FilterAccordion';
import { Button } from '@/components/ui/button';

const SidebarNav: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold">Filters</h2>
      <FilterAccordion />
      <div className="pt-2">
        <Button 
          variant="outline"
          className="w-full border-primary text-primary hover:bg-secondary hover:text-primary"
        >
          Browse by Venues
        </Button>
      </div>
    </div>
  );
};

export default SidebarNav;
