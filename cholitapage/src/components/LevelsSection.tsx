import { MapPin, Swords } from 'lucide-react';
import PixelBorder from './PixelBorder';

interface Level {
  id: number;
  name: string;
  description: string;
  opponent: string;
  difficulty: string;
  background: string;
}

interface LevelsSectionProps {
  levels: Level[];
}

export default function LevelsSection({ levels }: LevelsSectionProps) {
  const difficultyColors: Record<string, string> = {
    'Fácil': 'text-green-400',
    'Medio': 'text-yellow-400',
    'Difícil': 'text-orange-400',
    'Experto': 'text-red-400'
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <MapPin className="w-10 h-10 text-yellow-400" strokeWidth={3} />
          <h2 className="text-5xl font-black text-yellow-400 tracking-wider"
              style={{
                textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
                fontFamily: 'monospace'
              }}>
            LOS 4 NIVELES
          </h2>
          <MapPin className="w-10 h-10 text-yellow-400" strokeWidth={3} />
        </div>

        <div className="space-y-8">
          {levels.map((level) => (
            <PixelBorder key={level.id} className="transform hover:scale-[1.02] transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-yellow-400 text-black font-black text-3xl w-16 h-16 flex items-center justify-center border-4 border-white shadow-lg"
                         style={{ fontFamily: 'monospace' }}>
                      {level.id}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-yellow-300 mb-2"
                          style={{ fontFamily: 'monospace' }}>
                        {level.name}
                      </h3>
                      <p className="text-white leading-relaxed"
                         style={{ fontFamily: 'monospace' }}>
                        {level.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-300 italic border-l-4 border-yellow-400 pl-4 mt-4"
                       style={{ fontFamily: 'monospace' }}>
                    {level.background}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black bg-opacity-50 border-4 border-yellow-400 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Swords className="w-5 h-5 text-red-400" />
                      <span className="text-yellow-300 font-bold"
                            style={{ fontFamily: 'monospace' }}>
                        OPONENTE
                      </span>
                    </div>
                    <p className="text-white font-bold text-lg"
                       style={{ fontFamily: 'monospace' }}>
                      {level.opponent}
                    </p>
                  </div>

                  <div className="bg-black bg-opacity-50 border-4 border-yellow-400 p-4">
                    <span className="text-yellow-300 font-bold block mb-2"
                          style={{ fontFamily: 'monospace' }}>
                      DIFICULTAD
                    </span>
                    <p className={`font-black text-2xl ${difficultyColors[level.difficulty]}`}
                       style={{ fontFamily: 'monospace' }}>
                      {level.difficulty.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            </PixelBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
