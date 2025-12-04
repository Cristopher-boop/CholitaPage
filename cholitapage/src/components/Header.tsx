import { Gamepad2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 py-8 shadow-lg">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px),
                          repeating-linear-gradient(90deg, transparent, transparent 2px, black 2px, black 4px)`
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Gamepad2 className="w-12 h-12 text-white animate-bounce" strokeWidth={3} />
          <h1 className="text-6xl font-black text-white tracking-wider pixel-text transform -skew-y-2"
              style={{
                textShadow: '4px 4px 0px rgba(0,0,0,0.8), 8px 8px 0px rgba(0,0,0,0.4)',
                fontFamily: 'monospace',
                letterSpacing: '0.1em'
              }}>
            CHOLITA FIGHTER
          </h1>
          <Gamepad2 className="w-12 h-12 text-white animate-bounce" strokeWidth={3} style={{ animationDelay: '0.2s' }} />
        </div>

        <p className="text-center text-white text-xl font-bold tracking-wide"
           style={{
             textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
             fontFamily: 'monospace'
           }}>
          ★ UN VIAJE DE LUCHA A TRAVÉS DE LA PAZ ★
        </p>
      </div>
    </header>
  );
}
