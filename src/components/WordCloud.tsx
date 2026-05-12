interface Word {
  text: string;
  value: number;
}

interface WordCloudProps {
  words: Word[];
  title: string;
  subtitle?: string;
  positiveColor?: boolean;
}

const POSITIVE_COLORS = ['#059669', '#0d9488', '#0891b2', '#2563eb', '#16a34a', '#047857', '#0f766e'];
const NEGATIVE_COLORS = ['#dc2626', '#ea580c', '#d97706', '#b45309', '#c2410c', '#9a3412', '#92400e'];
const MIXED_COLORS = ['#2563eb', '#0891b2', '#059669', '#d97706', '#dc2626', '#7c3aed', '#be123c', '#0f766e', '#1d4ed8'];

export default function WordCloud({ words, title, subtitle, positiveColor }: WordCloudProps) {
  const max = Math.max(...words.map(w => w.value));
  const min = Math.min(...words.map(w => w.value));
  const range = max - min || 1;

  const colors = positiveColor === true ? POSITIVE_COLORS : positiveColor === false ? NEGATIVE_COLORS : MIXED_COLORS;

  const sized = words.map((w, i) => {
    const normalized = (w.value - min) / range;
    const fontSize = 11 + normalized * 22;
    const opacity = 0.65 + normalized * 0.35;
    const color = colors[i % colors.length];
    return { ...w, fontSize, opacity, color };
  });

  const shuffled = [...sized].sort(() => Math.random() - 0.5);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-full">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{title}</h3>
      {subtitle && <p className="text-xs text-gray-400 mb-4">{subtitle}</p>}
      <div className="flex flex-wrap gap-2 items-center justify-center py-3 min-h-36">
        {shuffled.map((w, i) => (
          <span
            key={i}
            className="cursor-default transition-transform hover:scale-110 hover:z-10 relative"
            style={{
              fontSize: `${w.fontSize}px`,
              color: w.color,
              opacity: w.opacity,
              fontWeight: w.fontSize > 24 ? 700 : w.fontSize > 18 ? 600 : 500,
              lineHeight: 1.4,
            }}
            title={`${w.text}: ${w.value} mentions`}
          >
            {w.text}
          </span>
        ))}
      </div>
    </div>
  );
}
