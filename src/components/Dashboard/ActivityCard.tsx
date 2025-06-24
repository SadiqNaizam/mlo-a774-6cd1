import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Activity {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  isPromoted: boolean;
}

interface ActivityCardProps {
  activity: Activity;
  className?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, className }) => {
  return (
    <div className={cn("w-full bg-transparent group cursor-pointer", className)}>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={activity.imageUrl}
          alt={activity.title}
          className="w-full h-80 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {activity.isPromoted && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-none">PROMOTED</Badge>
        )}
         <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-sm font-semibold drop-shadow-md">{activity.date}</p>
        </div>
      </div>
      <div className="pt-3">
        <h3 className="font-bold text-base text-foreground truncate">{activity.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{activity.category}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
