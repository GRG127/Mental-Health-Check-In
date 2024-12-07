import React from 'react';
import { format } from 'date-fns';
import { useMood } from '../../context/MoodContext';
import { Trash2 } from 'lucide-react';

export const MoodHistory: React.FC = () => {
  const { state, dispatch } = useMood();

  const deleteEntry = (id: string) => {
    dispatch({ type: 'DELETE_ENTRY', payload: id });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recent Entries</h2>
      <div className="space-y-4">
        {state.entries.length === 0 ? (
          <p className="text-gray-500">No entries yet. Start by adding your first mood check-in!</p>
        ) : (
          state.entries
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((entry) => (
              <div
                key={entry.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">
                      {format(entry.date, 'PPP p')}
                    </p>
                    <p className="font-medium capitalize">{entry.emotion}</p>
                    <p className="text-sm">Intensity: {entry.intensity}/10</p>
                    {entry.notes && (
                      <p className="text-gray-600 mt-2">{entry.notes}</p>
                    )}
                  </div>
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};