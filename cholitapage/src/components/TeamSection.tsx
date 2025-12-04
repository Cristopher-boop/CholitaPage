import { Users } from 'lucide-react';
import PixelBorder from './PixelBorder';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

interface TeamSectionProps {
  team: TeamMember[];
}

export default function TeamSection({ team }: TeamSectionProps) {
  const colors = ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600'];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Users className="w-10 h-10 text-yellow-400" strokeWidth={3} />
          <h2 className="text-5xl font-black text-yellow-400 tracking-wider"
              style={{
                textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
                fontFamily: 'monospace'
              }}>
            EL EQUIPO
          </h2>
          <Users className="w-10 h-10 text-yellow-400" strokeWidth={3} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <PixelBorder key={index} className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <div className={`w-24 h-24 mx-auto mb-4 ${colors[index]} border-4 border-white shadow-lg flex items-center justify-center`}>
                  <span className="text-4xl font-black text-white"
                        style={{ fontFamily: 'monospace' }}>
                    {member.avatar}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-yellow-300 mb-2"
                    style={{ fontFamily: 'monospace' }}>
                  {member.name}
                </h3>

                <p className="text-white font-semibold"
                   style={{ fontFamily: 'monospace' }}>
                  {member.role}
                </p>
              </div>
            </PixelBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
