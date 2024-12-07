import { Smile, Frown, Meh, Heart, Battery, Sun, Moon } from 'lucide-react';
import { Emotion } from '../../types/mood';

export const emotions = [
  { type: 'happy' as Emotion, icon: Smile, label: 'Happy', color: 'bg-yellow-50 border-yellow-200 hover:border-yellow-300' },
  { type: 'sad' as Emotion, icon: Frown, label: 'Sad', color: 'bg-blue-50 border-blue-200 hover:border-blue-300' },
  { type: 'anxious' as Emotion, icon: Heart, label: 'Anxious', color: 'bg-red-50 border-red-200 hover:border-red-300' },
  { type: 'calm' as Emotion, icon: Meh, label: 'Calm', color: 'bg-green-50 border-green-200 hover:border-green-300' },
  { type: 'stressed' as Emotion, icon: Battery, label: 'Stressed', color: 'bg-purple-50 border-purple-200 hover:border-purple-300' },
  { type: 'energetic' as Emotion, icon: Sun, label: 'Energetic', color: 'bg-orange-50 border-orange-200 hover:border-orange-300' },
  { type: 'tired' as Emotion, icon: Moon, label: 'Tired', color: 'bg-indigo-50 border-indigo-200 hover:border-indigo-300' },
];