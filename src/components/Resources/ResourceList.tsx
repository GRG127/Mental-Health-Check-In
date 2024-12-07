import React from 'react';
import { ResourceCard } from './ResourceCard';
import { Phone, Globe, Book, Youtube, Heart } from 'lucide-react';

export const ResourceList: React.FC = () => {
  const resources = [
    {
      title: 'AASRA Helpline',
      description: '24/7 helpline for emotional support and suicide prevention',
      link: 'tel:+919820466726',
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: 'iCall Helpline',
      description: 'Professional counseling by TISS (9am-9pm, Mon-Sat)',
      link: 'tel:+919152987821',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: 'NIMHANS',
      description: 'National Institute of Mental Health and Neurosciences',
      link: 'https://nimhans.ac.in',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'The Live Love Laugh Foundation',
      description: 'Mental health awareness and support',
      link: 'https://thelivelovelaughfoundation.org',
      icon: <Book className="w-6 h-6" />,
    },
    {
      title: 'Guided Meditation',
      description: 'Collection of guided meditation videos',
      link: 'https://www.youtube.com/results?search_query=guided+meditation',
      icon: <Youtube className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {resources.map((resource) => (
        <ResourceCard key={resource.title} {...resource} />
      ))}
    </div>
  );
};