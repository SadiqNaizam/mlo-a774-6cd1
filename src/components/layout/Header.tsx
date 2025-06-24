import React from 'react';
import { Search, ChevronDown, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC<{ className?: string }> = ({ className }) => {
  const locations: readonly string[] = ["Chennai", "Mumbai", "Delhi-NCR", "Bengaluru", "Hyderabad"] as const;
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-sm border-b z-50",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold text-foreground">
              book<span className="text-primary font-extrabold">my</span>show
            </span>
          </div>
          <div className="relative hidden lg:block w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="pl-10 w-full bg-background"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="hidden md:flex items-center gap-1 text-sm">
                {locations[0]}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {locations.slice(1).map((location) => (
                <DropdownMenuItem key={location}>{location}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="hidden md:inline-flex rounded-md">
            Sign In
          </Button>
          
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
