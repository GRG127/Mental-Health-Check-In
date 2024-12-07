import React from 'react';
import { MoodProvider } from './context/MoodContext';
import { MoodInput } from './components/MoodCheck/MoodInput';
import { MoodHistory } from './components/MoodCheck/MoodHistory';
import { MoodTrends } from './components/MoodCheck/MoodTrends';
import { ResourceList } from './components/Resources/ResourceList';
import { Header } from './components/Layout/Header';

function App() {
  return (
    <MoodProvider>
      <div className="min-h-screen bg-calm-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <section className="bg-white p-8 rounded-xl shadow-soft">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">
                  How are you feeling?
                </h2>
                <MoodInput />
              </section>

              <section className="bg-white p-8 rounded-xl shadow-soft">
                <MoodHistory />
              </section>
            </div>

            <div className="space-y-8">
              <section className="bg-white p-8 rounded-xl shadow-soft">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">
                  Your Mood Trends
                </h2>
                <MoodTrends />
              </section>

              <section className="bg-white p-8 rounded-xl shadow-soft">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">
                  Helpful Resources
                </h2>
                <ResourceList />
              </section>
            </div>
          </div>
        </main>
      </div>
    </MoodProvider>
  );
}

export default App;