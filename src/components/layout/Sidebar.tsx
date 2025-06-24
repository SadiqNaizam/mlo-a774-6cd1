import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

type DateFilter = 'Today' | 'Tomorrow' | 'This Weekend';

const dateFilters: readonly DateFilter[] = ['Today', 'Tomorrow', 'This Weekend'] as const;

const categoryFilters = [
  { id: 'amusement-parks', label: 'Amusement Parks' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'food-and-drinks', label: 'Food & Drinks' },
  { id: 'workshops', label: 'Workshops' },
] as const;

const priceFilters = [
  { id: 'free', label: 'Free' },
  { id: '0-500', label: '0 - 500' },
  { id: '501-2000', label: '501 - 2000' },
  { id: 'above-2000', label: 'Above 2000' },
] as const;

const Sidebar: React.FC<{ className?: string }> = ({ className }) => {
  const [selectedDate, setSelectedDate] = useState<DateFilter | null>('Today');

  const handleDateFilterClick = (filter: DateFilter) => {
    setSelectedDate(prev => (prev === filter ? null : filter));
  };

  return (
    <aside className={cn("w-64 flex-col border-r bg-background p-4 hidden lg:flex", className)}>
      <div className="w-full space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Filters</h2>
        
        <Accordion type="multiple" defaultValue={['date']} className="w-full">
          <AccordionItem value="date">
            <AccordionTrigger className="py-3 text-sm font-semibold hover:no-underline">
              <div className="flex justify-between items-center w-full pr-1">
                <span>Date</span>
                <Button variant="link" className="text-primary p-0 h-auto text-xs hover:no-underline">Clear</Button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 space-y-4">
              <div className="flex flex-wrap gap-2">
                {dateFilters.map(filter => (
                  <Button
                    key={filter}
                    variant="outline"
                    size="sm"
                    onClick={() => handleDateFilterClick(filter)}
                    className={cn(
                      'text-primary border-primary/40 hover:bg-accent rounded-md font-normal',
                      selectedDate === filter && 'bg-primary text-primary-foreground hover:bg-primary/90'
                    )}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="date-range" />
                <Label htmlFor="date-range" className="font-normal text-sm text-foreground">Date Range</Label>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="categories">
            <AccordionTrigger className="py-3 text-sm font-semibold hover:no-underline">
              <div className="flex justify-between items-center w-full pr-1">
                <span>Categories</span>
                <Button variant="link" className="text-primary p-0 h-auto text-xs hover:no-underline">Clear</Button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 space-y-3">
              {categoryFilters.map(filter => (
                <div key={filter.id} className="flex items-center space-x-2">
                  <Checkbox id={filter.id} />
                  <Label htmlFor={filter.id} className="font-normal text-sm text-foreground">{filter.label}</Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

           <AccordionItem value="more-filters">
            <AccordionTrigger className="py-3 text-sm font-semibold hover:no-underline">
              <div className="flex justify-between items-center w-full pr-1">
                <span>More Filters</span>
                <Button variant="link" className="text-primary p-0 h-auto text-xs hover:no-underline">Clear</Button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <p className="text-sm text-muted-foreground">More filtering options available here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price" className="border-b-0">
            <AccordionTrigger className="py-3 text-sm font-semibold hover:no-underline">
              <div className="flex justify-between items-center w-full pr-1">
                <span>Price</span>
                <Button variant="link" className="text-primary p-0 h-auto text-xs hover:no-underline">Clear</Button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 space-y-3">
              {priceFilters.map(filter => (
                <div key={filter.id} className="flex items-center space-x-2">
                  <Checkbox id={filter.id} />
                  <Label htmlFor={filter.id} className="font-normal text-sm text-foreground">{filter.label}</Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="pt-2">
          <Button 
            variant="outline"
            className="w-full border-primary text-primary hover:bg-secondary hover:text-primary"
          >
            Browse by Venues
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
