import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t-4 border-yellow-400">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-white font-bold text-lg"
                  style={{ fontFamily: 'monospace' }}>
              HECHO CON
            </span>
            <Heart className="w-6 h-6 text-red-500 fill-current animate-pulse" />
            <span className="text-white font-bold text-lg"
                  style={{ fontFamily: 'monospace' }}>
              EN LA PAZ, BOLIVIA
            </span>
          </div>

          <div className="text-yellow-400 font-black text-2xl"
               style={{
                 fontFamily: 'monospace',
                 textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
               }}>
            CHOLITA FIGHTER © 2024
          </div>

          <div className="flex justify-center gap-8 text-gray-400 text-sm"
               style={{ fontFamily: 'monospace' }}>
            <span>READY?</span>
            <span className="text-yellow-400 animate-pulse">★</span>
            <span>FIGHT!</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
