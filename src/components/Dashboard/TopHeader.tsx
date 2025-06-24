import React from 'react';
import { Search, ChevronDown, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const TopHeader: React.FC = () => {
  return (
    <header className="bg-background border-b z-10 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-800">
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
                Chennai
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mumbai</DropdownMenuItem>
              <DropdownMenuItem>Delhi-NCR</DropdownMenuItem>
              <DropdownMenuItem>Bengaluru</DropdownMenuItem>
              <DropdownMenuItem>Hyderabad</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hidden md:inline-flex rounded-md">
            Sign In
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
