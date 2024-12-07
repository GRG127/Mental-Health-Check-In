import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Emotion } from '../../types/mood';

interface EmotionButtonProps {
  type: Emotion;
  icon: React.ReactNode;
  label: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

export const EmotionButton: React.FC<EmotionButtonProps> = ({
  type,
  icon,
  label,
  color,
  isSelected,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`mood-button border-2 ${
        isSelected
          ? `${color} ring-2 ring-primary-500 ring-offset-2`
          : `${color}`
      }`}
    >
      <div className={`${isSelected ? 'text-primary-500' : 'text-gray-600'}`}>
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </button>
  );
};