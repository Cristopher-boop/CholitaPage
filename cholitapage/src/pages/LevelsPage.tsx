import { Swords, MapPin } from 'lucide-react';
import gameData from '../data/gameData.json';

const levelImages = [
  'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6900329/pexels-photo-6900329.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/5621620/pexels-photo-5621620.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

const opponentImages = [
  'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3807495/pexels-photo-3807495.jpeg?auto=compress&cs=tinysrgb&w=600'
];

const difficultyColors: Record<string, { bg: string; text: string; border: string }> = {
  'Fácil': { bg: 'bg-green-600', text: 'text-green-300', border: 'border-green-400' },
  'Medio': { bg: 'bg-yellow-600', text: 'text-yellow-300', border: 'border-yellow-400' },
  'Difícil': { bg: 'bg-orange-600', text: 'text-orange-300', border: 'border-orange-400' },
  'Experto': { bg: 'bg-red-600', text: 'text-red-300', border: 'border-red-400' }
};

export default function LevelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-black to-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <MapPin className="w-12 h-12 text-yellow-400" strokeWidth={3} />
              <h1 className="text-6xl md:text-7xl font-black text-yellow-400 tracking-wider"
                  style={{
                    textShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                    fontFamily: 'monospace'
                  }}>
                LOS 4 NIVELES
              </h1>
              <MapPin className="w-12 h-12 text-yellow-400" strokeWidth={3} />
            </div>

            <p className="text-white text-xl font-bold"
               style={{ fontFamily: 'monospace' }}>
              Atraviesa los escenarios más emblemáticos de La Paz
            </p>
          </div>

          <div className="space-y-16">
            {gameData.levels.map((level, index) => (
              <div key={level.id} className={`grid md:grid-cols-2 gap-8 items-stretch ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Level Image */}
                <div className="order-1 md:order-first">
                  <div className="relative border-4 border-yellow-400 overflow-hidden group shadow-2xl h-full">
                    <img src={levelImages[index]}
                         alt={level.name}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-40"></div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <h2 className="text-4xl font-black text-yellow-400"
                          style={{
                            textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                            fontFamily: 'monospace'
                          }}>
                        NIVEL {level.id}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Level Content */}
                <div className={index % 2 === 1 ? 'order-2' : 'order-2'} >
                  <div className="space-y-6 h-full flex flex-col">
                    <div className="border-4 border-yellow-400 bg-gradient-to-br from-red-900 to-red-800 p-8 flex-1">
                      <h3 className="text-4xl font-black text-yellow-300 mb-4"
                          style={{ fontFamily: 'monospace' }}>
                        {level.name}
                      </h3>

                      <p className="text-white text-lg leading-relaxed mb-6"
                         style={{ fontFamily: 'monospace' }}>
                        {level.description}
                      </p>

                      <div className="bg-black bg-opacity-50 border-4 border-yellow-400 p-4 mb-4">
                        <p className="text-yellow-300 font-bold text-sm mb-2"
                           style={{ fontFamily: 'monospace' }}>
                          ESCENARIO
                        </p>
                        <p className="text-white italic"
                           style={{ fontFamily: 'monospace' }}>
                          {level.background}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className={`border-4 ${difficultyColors[level.difficulty].border} ${difficultyColors[level.difficulty].bg} p-6 text-center`}>
                        <p className="text-white font-bold text-sm mb-2"
                           style={{ fontFamily: 'monospace' }}>
                          DIFICULTAD
                        </p>
                        <p className={`text-3xl font-black ${difficultyColors[level.difficulty].text}`}
                           style={{ fontFamily: 'monospace' }}>
                          {level.difficulty}
                        </p>
                      </div>

                      <div className="border-4 border-purple-400 bg-purple-700 p-6 text-center">
                        <Swords className="w-8 h-8 text-purple-300 mx-auto mb-2" strokeWidth={3} />
                        <p className="text-white font-bold text-sm"
                           style={{ fontFamily: 'monospace' }}>
                          COMBATE ÉPICO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opponent Section */}
                <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center border-4 border-purple-500 bg-gradient-to-br from-purple-900 to-purple-800 p-8">
                    <div className="relative border-4 border-purple-400 overflow-hidden group">
                      <img src={opponentImages[index]}
                           alt={level.opponent}
                           className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                      <div className="absolute inset-0 flex items-end justify-center pb-4">
                        <span className="text-purple-300 font-black text-2xl text-center"
                              style={{ fontFamily: 'monospace' }}>
                          VS
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="border-4 border-purple-400 bg-black bg-opacity-50 p-6">
                        <h4 className="text-yellow-300 font-bold mb-2"
                            style={{ fontFamily: 'monospace' }}>
                          ⚔ OPONENTE FINAL
                        </h4>
                        <p className="text-white text-3xl font-black"
                           style={{
                             fontFamily: 'monospace',
                             textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                           }}>
                          {level.opponent}
                        </p>
                      </div>

                      <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black py-4 px-6 text-lg border-4 border-purple-300 shadow-lg transform hover:scale-105 transition-all duration-200"
                              style={{ fontFamily: 'monospace' }}>
                        ▶ SELECCIONAR NIVEL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
