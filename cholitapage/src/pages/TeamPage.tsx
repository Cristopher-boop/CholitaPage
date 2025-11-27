import { Users, Github, Twitch } from 'lucide-react';
import gameData from '../data/gameData.json';

const teamImages = [
  'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3807495/pexels-photo-3807495.jpeg?auto=compress&cs=tinysrgb&w=600'
];

const roles = [
  'Diseña personajes épicos y crea los mundos visuales del juego',
  'Lidera la programación del motor de juego y mecánicas de combate',
  'Escribe la narrativa boliviana y compone la música andina del juego',
  'Diseña los desafiantes niveles y la progresión del juego'
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-black to-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Users className="w-12 h-12 text-yellow-400" strokeWidth={3} />
              <h1 className="text-6xl md:text-7xl font-black text-yellow-400 tracking-wider"
                  style={{
                    textShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                    fontFamily: 'monospace'
                  }}>
                EL EQUIPO
              </h1>
              <Users className="w-12 h-12 text-yellow-400" strokeWidth={3} />
            </div>

            <p className="text-white text-xl font-bold"
               style={{ fontFamily: 'monospace' }}>
              4 talentos unidos en La Paz para crear una experiencia épica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {gameData.team.map((member, index) => {
              const colors = [
                { card: 'from-blue-900 to-blue-800', icon: 'bg-blue-600', text: 'text-blue-300' },
                { card: 'from-green-900 to-green-800', icon: 'bg-green-600', text: 'text-green-300' },
                { card: 'from-cyan-900 to-cyan-800', icon: 'bg-cyan-600', text: 'text-cyan-300' },
                { card: 'from-orange-900 to-orange-800', icon: 'bg-orange-600', text: 'text-orange-300' }
              ];

              const color = colors[index];

              return (
                <div key={index} className="group">
                  <div className={`border-4 border-yellow-400 bg-gradient-to-br ${color.card} overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                    <div className="grid md:grid-cols-2 gap-6 p-0">
                      {/* Team Member Image */}
                      <div className="relative overflow-hidden aspect-square md:aspect-auto">
                        <img src={teamImages[index]}
                             alt={member.name}
                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                        <div className="absolute inset-0 flex items-end justify-center pb-4">
                          <div className={`${color.icon} border-4 border-white p-4`}>
                            <span className="text-white font-black text-2xl block"
                                  style={{ fontFamily: 'monospace' }}>
                              {member.avatar}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="p-8 flex flex-col justify-between">
                        <div>
                          <h2 className="text-3xl font-black text-yellow-300 mb-2"
                              style={{
                                fontFamily: 'monospace',
                                textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                              }}>
                            {member.name}
                          </h2>

                          <p className="text-white font-bold text-sm mb-4 border-l-4 border-yellow-400 pl-4"
                             style={{ fontFamily: 'monospace' }}>
                            {member.role}
                          </p>

                          <p className="text-white text-sm leading-relaxed mb-6"
                             style={{ fontFamily: 'monospace' }}>
                            {roles[index]}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <button className="flex-1 bg-black border-3 border-white text-white font-black py-2 px-3 text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
                                  style={{ fontFamily: 'monospace' }}>
                            <Github className="w-4 h-4" strokeWidth={3} />
                            <span className="hidden md:inline">GitHub</span>
                          </button>

                          <button className="flex-1 bg-black border-3 border-white text-white font-black py-2 px-3 text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
                                  style={{ fontFamily: 'monospace' }}>
                            <Twitch className="w-4 h-4" strokeWidth={3} />
                            <span className="hidden md:inline">TWITCH</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-r-4 border-b-4 border-yellow-400 bg-black p-4 mt-0">
                    <p className="text-center text-yellow-300 font-black text-sm"
                       style={{ fontFamily: 'monospace' }}>
                      {index + 1} DE 4 MIEMBROS
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-4 border-yellow-400 bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-12">
            <h2 className="text-4xl font-black text-yellow-300 mb-8 text-center"
                style={{ fontFamily: 'monospace' }}>
              ★ UNIDOS POR LA PASIÓN DEL GAMING ★
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: '🎨', title: 'CREATIVIDAD', desc: 'Diseño visual único' },
                { icon: '💻', title: 'TECNOLOGÍA', desc: 'Código de calidad' },
                { icon: '🎵', title: 'NARRATIVA', desc: 'Historia cautivadora' },
                { icon: '🎮', title: 'INNOVACIÓN', desc: 'Mecánicas nuevas' }
              ].map((item, i) => (
                <div key={i} className="border-4 border-yellow-400 bg-black p-6 text-center transform hover:scale-110 transition-transform duration-200">
                  <span className="text-5xl block mb-3">{item.icon}</span>
                  <p className="text-yellow-300 font-black mb-2"
                     style={{ fontFamily: 'monospace' }}>
                    {item.title}
                  </p>
                  <p className="text-white text-sm"
                     style={{ fontFamily: 'monospace' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
