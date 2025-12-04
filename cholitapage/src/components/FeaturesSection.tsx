import { Sparkles, Check } from 'lucide-react';

interface FeaturesSectionProps {
  features: string[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Sparkles className="w-10 h-10 text-yellow-400" strokeWidth={3} />
          <h2 className="text-5xl font-black text-yellow-400 tracking-wider"
              style={{
                textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
                fontFamily: 'monospace'
              }}>
            CARACTERÍSTICAS
          </h2>
          <Sparkles className="w-10 h-10 text-yellow-400" strokeWidth={3} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index}
                 className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 border-4 border-yellow-400 p-6 transform hover:scale-105 transition-transform duration-200 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 border-2 border-white p-1 mt-1">
                  <Check className="w-5 h-5 text-white" strokeWidth={4} />
                </div>

                <p className="text-white font-bold text-lg flex-1"
                   style={{ fontFamily: 'monospace', lineHeight: '1.5' }}>
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
