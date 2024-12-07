export type Emotion = 'happy' | 'sad' | 'anxious' | 'calm' | 'stressed' | 'energetic' | 'tired';

export interface MoodEntry {
  id: string;
  date: Date;
  emotion: Emotion;
  intensity: number;
  notes?: string;
}