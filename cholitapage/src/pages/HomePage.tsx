import { Link } from 'react-router-dom';
import { Zap, Play, Info, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-slate-900 pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, white 8px, white 10px),
                            repeating-linear-gradient(90deg, transparent, transparent 8px, white 8px, white 10px)`
        }}></div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="inline-block mb-8">
                <div className="border-4 border-yellow-400 bg-gradient-to-br from-red-600 to-red-800 p-2">
                  <div className="bg-black px-8 py-4">
                    <h1 className="text-6xl md:text-8xl font-black text-yellow-400 tracking-wider"
                        style={{
                          textShadow: '4px 4px 0px rgba(255,200,0,0.5), 8px 8px 0px rgba(0,0,0,0.8)',
                          fontFamily: 'monospace',
                          lineHeight: '1.1'
                        }}>
                      CHOLITA<br />FIGHTER
                    </h1>
                  </div>
                </div>
              </div>

              <p className="text-2xl md:text-3xl text-yellow-300 font-bold mb-8 max-w-2xl"
                 style={{
                   textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                   fontFamily: 'monospace'
                 }}>
                ★ Un viaje épico de lucha a través de La Paz, Bolivia ★
              </p>

              <div className="grid md:grid-cols-2 gap-12 items-stretch">
                <div className="space-y-6">
                  <div className="border-4 border-yellow-400 bg-black p-8 shadow-2xl">
                    <Zap className="w-12 h-12 text-yellow-400 mb-4" strokeWidth={3} />
                    <h2 className="text-2xl font-black text-yellow-300 mb-4"
                        style={{ fontFamily: 'monospace' }}>
                      LA HISTORIA
                    </h2>
                    <p className="text-white text-lg leading-relaxed"
                       style={{ fontFamily: 'monospace' }}>
                      Sigue a una valiente cholita a través de los escenarios más emblemáticos de La Paz. Enfrenta oponentes únicos, aprende combos especiales inspirados en danzas folklóricas y descubre la fuerza ancestral boliviana.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link to="/levels"
                          className="flex-1 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-4 text-lg border-4 border-white shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                          style={{ fontFamily: 'monospace' }}>
                      <Play className="w-5 h-5" strokeWidth={3} />
                      JUGAR
                    </Link>

                    <Link to="/features"
                          className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 text-lg border-4 border-white shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                          style={{ fontFamily: 'monospace' }}>
                      <Info className="w-5 h-5" strokeWidth={3} />
                      INFO
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="border-4 border-yellow-400 bg-gradient-to-br from-red-900 to-black p-1 shadow-2xl">
                    <div className="bg-black aspect-video flex items-center justify-center overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-transparent to-yellow-600 opacity-20"></div>

                      <div className="w-32 h-32 border-8 border-yellow-400 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-20 h-20 text-yellow-400 fill-yellow-400" strokeWidth={1} />
                      </div>

                      <img src="https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=600"
                           alt="Cholita Fighter"
                           className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 border-4 border-white p-4 shadow-lg">
                    <p className="text-black font-black text-center"
                       style={{ fontFamily: 'monospace' }}>
                      READY?<br />
                      <span className="text-2xl">FIGHT!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-green-600 p-1 mt-16">
              <div className="bg-black p-8 text-center">
                <p className="text-yellow-300 text-xl font-black mb-4"
                   style={{ fontFamily: 'monospace' }}>
                  ¡EXPLORA LOS ESCENARIOS ÉPICOS!
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {[
                    { name: 'Plaza San Francisco', difficulty: 'FÁCIL' },
                    { name: 'Mercado de Brujas', difficulty: 'MEDIO' },
                    { name: 'Teleférico Rojo', difficulty: 'DIFÍCIL' },
                    { name: 'Valle de la Luna', difficulty: 'EXPERTO' }
                  ].map((level, i) => (
                    <div key={i} className="border-4 border-yellow-400 bg-gradient-to-br from-red-900 to-red-800 p-4">
                      <p className="text-yellow-300 font-black text-sm"
                         style={{ fontFamily: 'monospace' }}>
                        {level.name}
                      </p>
                      <p className={`text-lg font-black mt-2 ${
                        i === 0 ? 'text-green-400' :
                        i === 1 ? 'text-yellow-400' :
                        i === 2 ? 'text-orange-400' :
                        'text-red-400'
                      }`}
                         style={{ fontFamily: 'monospace' }}>
                        {level.difficulty}
                      </p>
                    </div>
                  ))}
                </div>

                <Link to="/levels"
                      className="inline-flex items-center gap-2 mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 text-lg border-4 border-white shadow-lg transform hover:scale-105 transition-all duration-200"
                      style={{ fontFamily: 'monospace' }}>
                  VER MÁS <ArrowRight className="w-5 h-5" strokeWidth={3} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600"></div>
    </div>
  );
}
