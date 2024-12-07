import React, { useState } from 'react';
import { useMood } from '../../context/MoodContext';
import { Emotion } from '../../types/mood';
import { EmotionButton } from './EmotionButton';
import { emotions } from './emotions';

export const MoodInput: React.FC = () => {
  const { dispatch } = useMood();
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [intensity, setIntensity] = useState(5);
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEmotion) return;

    dispatch({
      type: 'ADD_ENTRY',
      payload: {
        id: Date.now().toString(),
        date: new Date(),
        emotion: selectedEmotion,
        intensity,
        notes,
      },
    });

    setSelectedEmotion(null);
    setIntensity(5);
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {emotions.map(({ type, icon: Icon, label, color }) => (
          <EmotionButton
            key={type}
            type={type}
            icon={<Icon className="w-8 h-8" />}
            label={label}
            color={color}
            isSelected={selectedEmotion === type}
            onClick={() => setSelectedEmotion(type)}
          />
        ))}
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          How intense is this feeling? (1-10)
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          className="input-range"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>Mild</span>
          <span>Moderate</span>
          <span>Strong</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Would you like to add any notes?
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          rows={3}
          placeholder="Feel free to write about what's on your mind..."
        />
      </div>

      <button
        type="submit"
        disabled={!selectedEmotion}
        className="w-full bg-primary-500 text-white py-3 px-4 rounded-xl hover:bg-primary-600 disabled:bg-gray-200 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
      >
        Save Your Check-in
      </button>
    </form>
  );
};