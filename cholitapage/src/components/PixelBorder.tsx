interface PixelBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function PixelBorder({ children, className = '' }: PixelBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400"></div>
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-400"></div>

      <div className="border-4 border-yellow-400 bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 shadow-2xl">
        {children}
      </div>
    </div>
  );
}
