import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  link,
  icon,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-calm-50 p-6 rounded-xl border border-calm-200 hover:shadow-soft transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
    >
      <div className="flex items-start gap-4">
        <div className="text-primary-500 bg-primary-50 p-3 rounded-lg">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </a>
  );
};