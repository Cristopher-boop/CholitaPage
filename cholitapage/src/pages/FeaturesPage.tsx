import { Sparkles, Music, Zap, Target } from 'lucide-react';
import gameData from '../data/gameData.json';

const featureIcons = [
  { icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-900' },
  { icon: Music, color: 'text-blue-400', bg: 'bg-blue-900' },
  { icon: Target, color: 'text-red-400', bg: 'bg-red-900' },
  { icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-900' },
  { icon: Zap, color: 'text-green-400', bg: 'bg-green-900' },
  { icon: Music, color: 'text-cyan-400', bg: 'bg-cyan-900' }
];

const screenshots = [
  'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6900329/pexels-photo-6900329.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5621620/pexels-photo-5621620.jpeg?auto=compress&cs=tinysrgb&w=800'
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-black to-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="w-12 h-12 text-yellow-400" strokeWidth={3} />
              <h1 className="text-6xl md:text-7xl font-black text-yellow-400 tracking-wider"
                  style={{
                    textShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                    fontFamily: 'monospace'
                  }}>
                CARACTERÍSTICAS
              </h1>
              <Sparkles className="w-12 h-12 text-yellow-400" strokeWidth={3} />
            </div>

            <p className="text-white text-xl font-bold"
               style={{ fontFamily: 'monospace' }}>
              Descubre qué hace a Cholita Fighter único
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {gameData.features.map((feature, index) => {
              const Icon = featureIcons[index].icon;

              return (
                <div key={index}
                     className="group relative border-4 border-yellow-400 bg-gradient-to-br from-red-900 to-red-800 p-8 shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400 opacity-5 rounded-full group-hover:opacity-20 transition-opacity duration-300"></div>

                  <div className={`${featureIcons[index].bg} border-4 border-yellow-400 p-4 w-16 h-16 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${featureIcons[index].color}`} strokeWidth={3} />
                  </div>

                  <h3 className="text-2xl font-black text-yellow-300 mb-3"
                      style={{
                        fontFamily: 'monospace',
                        textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                      }}>
                    {feature}
                  </h3>

                  <div className="w-12 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>

                  <p className="text-white text-sm mt-4 leading-relaxed"
                     style={{ fontFamily: 'monospace' }}>
                    Experimenta la calidad y dedicación que hemos puesto en cada aspecto del juego.
                  </p>
                </div>
              );
            })}
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-yellow-400 mb-8 text-center"
                style={{
                  fontFamily: 'monospace',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                }}>
              GALERÍA DE PANTALLAS
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {screenshots.map((img, i) => (
                <div key={i} className="relative border-4 border-yellow-400 overflow-hidden group aspect-video shadow-2xl">
                  <img src={img}
                       alt={`Screenshot ${i + 1}`}
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="border-4 border-yellow-400 bg-black px-6 py-3">
                      <p className="text-yellow-300 font-black"
                         style={{ fontFamily: 'monospace' }}>
                        NIVEL {i + 1}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-yellow-400 border-2 border-white px-3 py-1">
                    <p className="text-black font-black text-sm"
                       style={{ fontFamily: 'monospace' }}>
                      CAPTURA {i + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specs Section */}
          <div className="border-4 border-yellow-400 bg-gradient-to-br from-red-950 via-red-900 to-red-950 p-12 mb-16">
            <h2 className="text-4xl font-black text-yellow-300 mb-8 text-center"
                style={{ fontFamily: 'monospace' }}>
              ESPECIFICACIONES DEL JUEGO
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'NIVELES', value: '4' },
                { label: 'OPONENTES', value: '4' },
                { label: 'MODOS', value: 'HISTORIA + ARCADE' },
                { label: 'PLATAFORMAS', value: 'PC / CONSOLAS' }
              ].map((spec, i) => (
                <div key={i} className="border-4 border-yellow-400 bg-black p-6 text-center transform hover:scale-105 transition-transform duration-200">
                  <p className="text-yellow-300 font-black text-sm mb-3"
                     style={{ fontFamily: 'monospace' }}>
                    {spec.label}
                  </p>
                  <p className="text-white text-3xl font-black"
                     style={{
                       fontFamily: 'monospace',
                       textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                     }}>
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative border-4 border-yellow-400 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 p-1">
            <div className="bg-black p-12 text-center">
              <h2 className="text-4xl font-black text-yellow-300 mb-4"
                  style={{
                    fontFamily: 'monospace',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                  }}>
                ¿LISTO PARA EL COMBATE?
              </h2>

              <p className="text-white text-lg mb-8 max-w-2xl mx-auto"
                 style={{ fontFamily: 'monospace' }}>
                Cholita Fighter está casi aquí. Prepárate para una experiencia de lucha como nunca antes la has visto.
              </p>

              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-12 py-4 text-xl border-4 border-white shadow-lg transform hover:scale-110 transition-all duration-200"
                      style={{ fontFamily: 'monospace' }}>
                DESCARGAR DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
