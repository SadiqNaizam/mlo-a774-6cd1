import React from 'react';
import { Button } from '@/components/ui/button';

const filterTagsData: string[] = [
  "Amusement Parks", "Tourist Attractions", "Gaming", "Adventure", 
  "Nightlife", "Food and Drinks", "Parties", "Unique Tours"
];

const FilterTags: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {filterTagsData.map((tag) => (
        <Button
          key={tag}
          variant="outline"
          size="sm"
          className="rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default FilterTags;
