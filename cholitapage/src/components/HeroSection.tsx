import { Zap } from 'lucide-react';

interface HeroSectionProps {
  description: string;
}

export default function HeroSection({ description }: HeroSectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-red-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, white 8px, white 10px),
                          repeating-linear-gradient(90deg, transparent, transparent 8px, white 8px, white 10px)`
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 border-8 border-white shadow-2xl p-8 mb-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-gradient-to-br from-red-600 to-red-800 border-4 border-yellow-300 p-12">
              <Zap className="w-20 h-20 text-yellow-400 mx-auto mb-4 animate-pulse" strokeWidth={3} />

              <p className="text-white text-2xl font-bold leading-relaxed"
                 style={{
                   fontFamily: 'monospace',
                   textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
                 }}>
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button className="bg-green-600 hover:bg-green-500 text-white font-black px-8 py-4 text-xl border-4 border-white shadow-lg transform hover:scale-110 transition-all duration-200"
                    style={{ fontFamily: 'monospace' }}>
              ▶ JUGAR AHORA
            </button>

            <button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 text-xl border-4 border-white shadow-lg transform hover:scale-110 transition-all duration-200"
                    style={{ fontFamily: 'monospace' }}>
              ℹ MÁS INFO
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600"></div>
    </section>
  );
}
