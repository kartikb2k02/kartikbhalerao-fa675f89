
import { useState } from 'react';

export const Header = () => {
  const [activeStage, setActiveStage] = useState('Ship');

  const stages = [
    { name: 'Ideate', id: 'ideate' },
    { name: 'Plan', id: 'plan' },
    { name: 'Build', id: 'build' },
    { name: 'Ship', id: 'ship' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-center">
          <div className="flex items-center bg-slate-800/80 rounded-full p-2 border border-slate-700/50">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <button
                  onClick={() => setActiveStage(stage.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeStage === stage.name
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {stage.name}
                </button>
                {index < stages.length - 1 && (
                  <div className="w-px h-6 bg-slate-600 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
