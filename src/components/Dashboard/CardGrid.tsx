import React from 'react';
import ActivityCard, { type Activity } from './ActivityCard';

const activitiesData: Activity[] = [
  {
    id: '1',
    title: 'VGP Wonder World Chennai',
    category: 'VGP Wonder World: Chennai',
    date: 'Sun, 22 Jun onwards',
    imageUrl: 'https://i.imgur.com/gOq7VjW.jpeg',
    isPromoted: true,
  },
  {
    id: '2',
    title: 'Ideal Beach Resort Day Outing',
    category: 'Ideal Beach Resort: ECR',
    date: 'Mon, 23 Jun onwards',
    imageUrl: 'https://i.imgur.com/kSj9LgW.jpeg',
    isPromoted: true,
  },
  {
    id: '3',
    title: 'Casagrand Sundance',
    category: 'Casagrand Suncity: Chennai',
    date: 'Sun, 22 Jun onwards',
    imageUrl: 'https://i.imgur.com/vHqLdeG.jpeg',
    isPromoted: false,
  },
  {
    id: '4',
    title: 'VGP Marine Kingdom - Chennai',
    category: 'VGP Marine Kingdom: ECR',
    date: 'Sun, 22 Jun onwards',
    imageUrl: 'https://i.imgur.com/5qJ6gMm.jpeg',
    isPromoted: false,
  },
  {
    id: '5',
    title: 'Madras Crocodile Bank Trust',
    category: 'Wildlife & Nature',
    date: 'Open Daily',
    imageUrl: 'https://i.imgur.com/3N0wYDx.jpeg',
    isPromoted: false,
  },
  {
    id: '6',
    title: 'Black Thunder Theme Park',
    category: 'Amusement Parks',
    date: 'All Week',
    imageUrl: 'https://i.imgur.com/qL3f3rV.jpeg',
    isPromoted: true,
  },
  {
    id: '7',
    title: 'MGM Dizzee World',
    category: 'Amusement Parks',
    date: 'Fri, 20 Jun onwards',
    imageUrl: 'https://i.imgur.com/o19aVw9.jpeg',
    isPromoted: false,
  },
  {
    id: '8',
    title: 'Go-Karting Challenge',
    category: 'Adventure Sports',
    date: 'This Weekend',
    imageUrl: 'https://i.imgur.com/rX8D4fM.jpeg',
    isPromoted: false,
  },
];

const CardGrid: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Activities In Chennai</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {activitiesData.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
